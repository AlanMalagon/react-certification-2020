import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  
  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
  
`;

export const IconsInfoContainer = styled.div`
  color: ${props => props.theme.iconsInfoContainer.color};
`;