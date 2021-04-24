import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobal } from '../../providers/Global.provider';

//components
import { ProfileCard } from '../../components/ProfileCard/ProfileCard.component';
import { ProfileCardAuth0 } from '../../components/ProfileCardAuth0/ProfileCardAuth0.component';
import { VideosGrid } from '../../components/VideosGrid/VideosGrid.component';

//Styles
import { Container, LeftContainer, LogoutContainer, RightContainer, Title } from './FavoriteVideos.styles';

const FavoriteVideos = ({testData}) => {

    const { isAuthenticated, logout } = useAuth0();
    const { state, dispatch } = useGlobal();
    const { pathname } = useLocation();
    
    const data = state.favorites || testData;

    function deAuthenticate(event) {
        event.preventDefault();
        dispatch({type:'logout'});
    }

    return <Container>
        <LeftContainer>
            {isAuthenticated?<ProfileCardAuth0/>:<ProfileCard/>}
        </LeftContainer>
        <RightContainer>
            <Title theme={state.theme}>Favorite videos</Title>
            <VideosGrid data={data} location={pathname}/>  
        </RightContainer>
        <LogoutContainer>
            <Link to="/" onClick={deAuthenticate}>
                <button onClick={() => logout({ returnTo: window.location.origin })}>    
                    Logout
                </button>
            </Link>
        </LogoutContainer>
  </Container>;
}

export default FavoriteVideos;