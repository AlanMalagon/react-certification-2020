import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobal } from '../../../providers/Global.provider';
import { ProfileSVG } from '../../../svg/Profile';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';

const Avatar = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
`;

export const ProfileButton = () => {
    const { user, isAuthenticated } = useAuth0();
    const { loginWithPopup } = useAuth0();
    const location = useLocation();
    const {state, dispatch } = useGlobal();

    let redirectTo = {
        pathname:"/login",
        state:{ background: location }
    };
    if(isAuthenticated || state.user.authenticated){
        redirectTo="/favorites"
    }
    
    /**
     * Code to interact with my own login implementation
     * it will change the icon for the wizeline image used in the 
     * login.api.js fake api.
     */
    // return <Link to={redirectTo} onClick={()=> dispatch({type:'closeMenu'})}>
    //     <Container data-testid="profileButton">
    //         <StyledButton whileTap={buttonPressedStyle}>            
    //             {state.user.authenticated?<Avatar src={state.user.avatarUrl}></Avatar>:<ProfileSVG/>}
    //         </StyledButton>
    //     </Container>
    // </Link>;


    /**
     * This code is esentially the same as above but it will use the Auth0 image of the user
     */
    return <Link to={redirectTo} onClick={()=> {
                dispatch({type:'closeMenu'});
                if(!isAuthenticated)loginWithPopup();
            }}>
        <Container data-testid="profileButton">
            <StyledButton whileTap={buttonPressedStyle}>
                {isAuthenticated?<Avatar src={user.picture}></Avatar>:<ProfileSVG/>}
            </StyledButton>
        </Container>
    </Link>
}