import React from 'react';

//hooks
import { useGlobal } from '../../../providers/Global.provider';

//utils
import { parseDatetime } from '../../../utils/parseDatetime';

//styles
import { VideoRelated, Thumbnail, Subcontainer, Title, ChannelAndDatePublished } from './RelatedVideosItem.styles';

export const RelatedVideosItem = ({video}) => {

    const { state, dispatch } = useGlobal();

    return <VideoRelated onClick={()=>dispatch({type:'closeMenu'})}>
        {
            video.hasOwnProperty("snippet") &&
            <>
                <Thumbnail src={video.snippet.thumbnails.medium.url}></Thumbnail>
                <Subcontainer>
                    <Title theme={state.theme}>{video.snippet.title}</Title>
                    <ChannelAndDatePublished theme={state.theme}>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</ChannelAndDatePublished>            
                </Subcontainer>
            </>
        }
    </VideoRelated>
};