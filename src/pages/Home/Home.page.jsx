import React from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider';

//components
import { VideosGrid } from '../../components/VideosGrid/VideosGrid.component';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

//Styles
import { Container, IconsInfoContainer } from './Home.styles';
import { PageSelector } from '../../components/PageSelector/PageSelector.component';

function HomePage() {

  const { state } = useGlobal();
  const { videos, loading, pageTokens } = useFetchVideos(state.search, state.page);

  return (
    <Container data-testid="home-page">
      {loading && <p>Loading</p>}
      {!loading && <VideosGrid data={videos} location='/video'/>}
      <PageSelector pageTokens={pageTokens}/>
      <IconsInfoContainer theme={state.theme}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></IconsInfoContainer>
      <IconsInfoContainer theme={state.theme}>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a></IconsInfoContainer>
    </Container>
  );
}

export default HomePage;
