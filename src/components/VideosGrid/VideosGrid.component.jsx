import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { VideoGridItem } from './VideoGridItem/VideoGridItem.component';


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