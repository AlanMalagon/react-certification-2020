import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobal } from '../../../providers/Global.provider';

//components
import { ProfileSVG } from '../../../svg/Profile';

//styles
import {Container, buttonPressedStyle} from '../HeaderIconStyles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
const Avatar = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
`;

export const ProfileButton = () => {
    const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
    const location = useLocation();
    const {state, dispatch } = useGlobal();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function deAuthenticate(event) {
        event.preventDefault();
        dispatch({type:'logout'});
    }

    return <>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Container whileTap={buttonPressedStyle} data-testid="profileButton" profile='profile'>
                {isAuthenticated && <Avatar src={user.picture}/>}
                {state.user.authenticated && <Avatar src={state.user.avatarUrl}/>}
                {!(isAuthenticated || state.user.authenticated) && <ProfileSVG/>}
            </Container>
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={()=>dispatch({type:'closeMenu'})}
        >
            {
                !(isAuthenticated || state.user.authenticated) && 
                <Link to={{pathname:"/login",state:{ background: location }}}>
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
            }
            {
                !(isAuthenticated || state.user.authenticated) && 
                <MenuItem onClick={()=>{
                    handleClose();
                    loginWithPopup();
                }}>Auth0</MenuItem>
            }
            {
                (isAuthenticated || state.user.authenticated) &&
                <Link to='/favorites'>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
            }
            {
                (isAuthenticated || state.user.authenticated) &&
                <Link to="/" onClick={deAuthenticate}>
                    <MenuItem onClick={() => {
                        handleClose();
                        logout({ returnTo: window.location.origin });
                    }}>Logout</MenuItem>
                </Link>
            }
        </Menu>
    </>
}