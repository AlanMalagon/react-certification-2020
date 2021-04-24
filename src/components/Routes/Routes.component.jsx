import React from 'react';
import {Switch, Route, useLocation } from 'react-router-dom';

//Pages
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import FavoriteVideos from '../../pages/FavoriteVideos/FavoriteVideos.page';
import FavoriteVideoDetail from '../../pages/FavoriteVideoDetail/FavoriteVideoDetail.page';

//Components
import { VideoDetail } from '../../pages/VideoDetail/VideoDetail.page';
import { Login } from '../Login/Login.component';

export const Routes = () =>{
    const location = useLocation();
    const background = location.state && location.state.background;

    return <>
        <Switch location={background || location}>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/video/:videoId" component={VideoDetail}/>
            <Route exact path="/login" component={Login}/>
            <Private exact path="/favorites"><FavoriteVideos/></Private>
            <Private exact path="/favorites/:videoId"><FavoriteVideoDetail/></Private>
            <Route path="*" component={NotFound}/>
        </Switch>
        { background && <Route exact path="/login" component={Login}/>}
    </>
}

