import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.profileCard.backgroundColor};
    border-radius: 10px;
    box-shadow: ${props => props.theme.profileCard.boxShadow};
    height: 21rem;
    width: 100%;

    @media(min-width: 280px) and (max-width:1024px){
        height: 15rem;
        margin: 0 0 20px 0;
    }
`;

export const ProfilePic =  styled.img`
    border-radius: 50%;
    height: 200px;
    margin: 2em 0 0 0;
    width: 200px;

    @media(min-width: 280px) and (max-width:1024px){
        height: 100px;
        width: 100px;
    }
`;

export const ProfileSeparator = styled.div`
    border: 1px solid ${props => props.theme.profileCard.separatorColor};
    margin: 30px 0 30px 0;
`;

export const Name = styled.p`
    color: ${props => props.theme.favoritesView.titleColor};
    font-size: 32px;
    margin: 0px;
`;