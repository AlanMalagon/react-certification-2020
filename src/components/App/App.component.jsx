import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

//Components
import { Header } from '../../components/Header/Header.component';
import { VideoDetail } from '../../components/VideoDetail/VideoDetail.component';
import GlobalProvider from '../../providers/Global.provider';

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header/>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                <Route exact path="/video/:videoId">
                  <VideoDetail/>
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
