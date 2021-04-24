import React from 'react';

//styles
import { Container, Frame } from './VideoFrame.styles';

export const VideoFrame = ({videoId}) => {
    return <Container data-testid="video-frame">
        <Frame src={`https://www.youtube.com/embed/${videoId}`} 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></Frame>
    </Container>
}