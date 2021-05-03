import React from 'react';
import { useParams } from 'react-router-dom';

//hooks
import { useFetchVideoInfo } from '../../utils/hooks/useFetchVideoInfo';
import { useFetchRelatedVideos } from '../../utils/hooks/useFetchRelatedVideos';

//Components
import { VideoFrame }from '../../components/VideoFrame/VideoFrame.component';
import { VideoInfo }from '../../components/VideoInfo/VideoInfo.component';
import { RelatedVideos }from '../../components/RelatedVideos/RelatedVideos.component';

//Styles
import { Container, Subcontainer, LeftContainer, RightContainer} from './VideoDetail.styles';

export const VideoDetail = () => {
    const { videoId } = useParams();
    const { videoInfo } = useFetchVideoInfo(videoId);
    const { relatedVideos } = useFetchRelatedVideos(videoId);

    return <Container data-testid="video-detail">
        <Subcontainer>
            <LeftContainer>
                <VideoFrame videoId={videoId}></VideoFrame>
                {videoInfo && <VideoInfo video={videoInfo}></VideoInfo>}
            </LeftContainer>
            <RightContainer>
                {relatedVideos && <RelatedVideos videos={relatedVideos}></RelatedVideos>}
            </RightContainer>
        </Subcontainer>
    </Container>
}