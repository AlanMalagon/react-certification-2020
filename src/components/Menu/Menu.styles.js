import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavContainer =  styled(motion.nav)`
  position:fixed;
  height: 100%;
  width: 10%;
  z-index: 3;

  @media(min-width:280px) and (max-width:414px){
    width: 100%;
  }

  @media(min-width:415px) and (max-width:1024px){
    width: 35%;
  }

  svg{
    fill: ${props => props.theme.header.svgColor};
  }
`;

export const StyledButton = styled(motion.button)`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 0px;
  height: 50px;
  width: 50px;
  margin: 15px 0 0 15px;
  
  &:focus{
    outline: none;
  }

  &:hover{
    cursor: pointer;
  }
`;