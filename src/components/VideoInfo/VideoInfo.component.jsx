import React, { useEffect, useState } from 'react';

//hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobal } from '../../providers/Global.provider';

//utils
import { parseDatetime } from '../../utils/parseDatetime';

//styles
import { FavoriteSVG } from '../../svg/Favorite';
import { Subcontainer, Title, ChannelAndDatePublished, Separator, DescriptionContainer, DescriptionText, ShowLessMore, AddToFavoritesContainer, AddToFavoritesButton } from './VideoInfo.styles';
const variants = {
    open: {height: "auto"},
    closed: {height: 50}
}

export const VideoInfo = ({video}) => {
    const { isAuthenticated } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    const { title, channelTitle, publishedAt, description} = video.snippet;
    const { state , dispatch } = useGlobal();
    const [isFav, setIsFav] = useState(false);

    const handleClick = () =>{
        if(!isFav) dispatch({type:'addFavorite', value: video});
        else dispatch({type:'removeFavorite', value: video})
    }

    useEffect(()=>{
        const exists = state.favorites.filter(item=>item.id === video.id).length > 0;
        setIsFav(exists);
    }, [state,video]);

    return <div data-testid="video-info">
        <Subcontainer>
            <Title theme={state.theme}>{title}</Title>
            <ChannelAndDatePublished theme={state.theme}>{`${channelTitle} • ${parseDatetime(publishedAt)}`}</ChannelAndDatePublished>
            { (state.user.authenticated || isAuthenticated ) &&
                <AddToFavoritesContainer>
                    <AddToFavoritesButton theme={state.theme} title="Add to favorites" whileTap={{scale:1.5}} onClick={handleClick}>
                        <FavoriteSVG filled={isFav}/>
                    </AddToFavoritesButton>
                </AddToFavoritesContainer>
            }
        </Subcontainer>
        <Separator theme={state.theme}></Separator>
        <DescriptionContainer animate={isOpen ? "open":"closed"} variants={variants}>
            <DescriptionText theme={state.theme}>{description}</DescriptionText>
        </DescriptionContainer>
        <ShowLessMore theme={state.theme} data-testid="info-toggle" onClick={()=>setIsOpen(!isOpen)}>Show {!isOpen && 'more'}{isOpen && 'less'}</ShowLessMore>
    </div>
}