import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
    background-color: transparent;
    border: none;
    border-radius: 50%;
    padding: 0px;
    ${props=> {
        if(props.profile) return `padding-top:8px;`;
    }};
    height: 50px;
    width: 50px;

    &:focus{
        outline: none;
    }

    &:hover{
        cursor: pointer;
    }        
`;

export const StyledButton = styled(motion.button)`
    background-color: transparent;
        border: none;
        border-radius: 50%;
        padding: 0px;
        height: 50px;
        width: 50px;

        &:focus{
            outline: none;
        }

        &:hover{
            cursor: pointer;
        }
`;

export const buttonPressedStyle = {
    scale:0.8,
    backgroundColor: "#b3b3b3",
};