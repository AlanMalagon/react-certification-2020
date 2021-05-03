import React from 'react';
import { useParams } from 'react-router-dom';

//hooks
import { useGlobal } from '../../providers/Global.provider';
import { useFetchVideoInfo } from '../../utils/hooks/useFetchVideoInfo';

//components
import { VideoFrame }from '../../components/VideoFrame/VideoFrame.component';
import { VideoInfo }from '../../components/VideoInfo/VideoInfo.component';
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos.component';

//styles
import { Container, Subcontainer, LeftContainer, RightContainer} from '../../pages/VideoDetail/VideoDetail.styles';

export const FavoriteVideoDetail = () => {
    const { videoId } = useParams();
    const { videoInfo } = useFetchVideoInfo(videoId);    
    const { favorites } = useGlobal().state;

    return <Container data-testid="video-detail">
        <Subcontainer>
            <LeftContainer>
                <VideoFrame videoId={videoId}></VideoFrame>
                {videoInfo && <VideoInfo video={videoInfo}></VideoInfo>}
            </LeftContainer>
            <RightContainer>
                <RelatedVideos videos={favorites}/>
            </RightContainer>
        </Subcontainer>
    </Container>
}

export default FavoriteVideoDetail;