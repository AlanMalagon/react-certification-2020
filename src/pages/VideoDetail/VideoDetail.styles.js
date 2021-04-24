import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Subcontainer = styled.div`
    width: 95%;
`;

export const LeftContainer = styled.div`
    float: left;
    width: 75%;

    @media(max-width: 1024px){
        width: 100%;
    }
`;

export const RightContainer = styled.div`
    float: left;
    width: 25%;

    @media(max-width: 1024px){
        margin-top: 1rem;
        width: 100%;
    }
`;