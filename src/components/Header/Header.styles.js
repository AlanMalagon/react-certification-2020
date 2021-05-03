import styled from 'styled-components';

export const StyledHeader = styled.header`
align-items: center;
background-color: ${props => props.theme.header.backgroundColor};
border-bottom: ${props => props.theme.header.borderBottom};
box-shadow: ${props => props.theme.header.boxShadow};
display: flex;
padding: 15px;
position: fixed;
width: 100%;
z-index: 2;

svg{
  fill: ${props => props.theme.header.svgColor};
}
`;