import React from 'react';

//components
import { VideoGridItem } from './VideoGridItem/VideoGridItem.component';

//styles
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const VideosGrid = ({data, location}) => {

  return <Container data-testid="videosGrid">
      {
          data.map(video =>
              <VideoGridItem key={video.id}
              video={video}
              location={location}/>
          )
      }
  </Container>;
}