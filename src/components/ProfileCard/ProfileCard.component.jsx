import React from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider';

//styles
import { Container, ProfilePic, ProfileSeparator, Name } from './ProfileCard.styles';

export const ProfileCard = () => {

    const { state } = useGlobal();

    return <Container theme={state.theme}>    
        <ProfilePic src={state.user.avatarUrl}/>
        <ProfileSeparator theme={state.theme}/>
        <Name theme={state.theme}>{state.user.name}</Name>
    </Container>
}