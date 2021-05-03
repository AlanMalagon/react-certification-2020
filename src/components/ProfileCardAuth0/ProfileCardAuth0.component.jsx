import React from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider';
import { useAuth0 } from "@auth0/auth0-react";

//components
import { Container, ProfilePic, ProfileSeparator, Name } from '../ProfileCard/ProfileCard.styles';

export const ProfileCardAuth0 = () => {

    const { state } = useGlobal();
    const { user } = useAuth0();

    return <Container theme={state.theme}>    
        <ProfilePic src={user.picture}/>
        <ProfileSeparator theme={state.theme}/>
        <Name theme={state.theme}>{user.nickname}</Name>
    </Container>
}