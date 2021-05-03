import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ListItem = styled(motion.li)`
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    font-weight: 100;
    margin: 0 0 30px 0;
    list-style-type: none;
    text-align: center;
    width: 85%;
    height: 42px;

    &:hover{
        box-shadow: 2px 2px 50px 1px rgba(0, 0, 0, 0.2);
    }
`;

export const IconContainer = styled.div`
    margin: 9px 0 0 5px;
    width: 20%;

    svg{
        height: 25px;
        width: 25px;
    }
`;

export const NameContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 80%;
`;

export const Name = styled.p`
    color: ${props => props.theme.header.menu.itemColor};
    font-size: 16px;
`;