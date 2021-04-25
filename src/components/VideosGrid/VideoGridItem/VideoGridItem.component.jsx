import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//hooks
import { useAuth0 } from '@auth0/auth0-react';
import { useGlobal } from '../../../providers/Global.provider';

//styles
import { CardContainer, VideoThumbnail, VideoInfo, VideoTitle, VideoThumbnailInfo, FavButtonContainer } from './VideoGridItem.styles';
import { parseDatetime } from '../../../utils/parseDatetime';
import { FavoriteButton } from '../../FavoriteButton/FavoriteButton.component';

export const VideoGridItem = ({video, location}) => {
    
    const { isAuthenticated } = useAuth0();
    const { state, dispatch } = useGlobal();
    const [showFavButton, setShowFavButton] = useState(false);

    console.log(state.user.authenticated, isAuthenticated);

    const handleMouseEnter = (e) => {
        setShowFavButton(true);
    };

    const handleMouseLeave = (e) => {
        setShowFavButton(false);
    };

    return <CardContainer  onClick={()=>dispatch({type:'closeMenu'})} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link key={video.etag} to={`${location}/${video.id}`} >
            <VideoThumbnail alt="thumbnail" src={video.snippet.thumbnails.high.url}/>
            <VideoInfo>
                <VideoTitle>{video.snippet.title}</VideoTitle>
                <VideoThumbnailInfo>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</VideoThumbnailInfo>
            </VideoInfo>
        </Link>
        {
            ((state.user.authenticated || isAuthenticated) && showFavButton) && 
            <FavButtonContainer>
                <FavoriteButton video={video}/>
            </FavButtonContainer> 
        }

    </CardContainer>
}