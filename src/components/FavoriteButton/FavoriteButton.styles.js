import styled from 'styled-components';
import {motion} from 'framer-motion';

export const AddToFavoritesButton = styled(motion.div)`
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    height: 42px;
    justify-content: center;
    padding: 5px;
    width: 42px;

    svg{
        cursor: pointer;
        fill: ${props => props.theme.videoDetail.svgColor};
        z-index: 1;
    }
`;