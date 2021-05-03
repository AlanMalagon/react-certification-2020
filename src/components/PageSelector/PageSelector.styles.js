import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const PageButton = styled(motion.button)`
    ${props=>{
        if(props.direction === 'left')return `margin-right: 20px`;
    }};
    background-color: ${props => props.theme.pageButtons.backgroundColor};
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.pageButtons.color};
    cursor: pointer;
    font-size: 25px;
    height:50px;
    outline: none;
    width:50px;

    &:hover{
        ${props => {
            if(!props.disabled){
                return `background-color: ${props.theme.pageButtons.hoverColor};`;
            }
        }};
    }

    &:disabled{
        cursor: default;
        opacity: 0.5;
    }
`;