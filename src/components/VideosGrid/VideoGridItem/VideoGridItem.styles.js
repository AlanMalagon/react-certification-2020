import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-width: 320px;
    min-width: 320px;
    max-height: 280px;
    min-height: 280px;
    text-align: left;

    @media(max-width:320px){
        max-width: 300px;
        min-width: 300px;
        max-height: 220px;
        min-height: 220px;
    }

    @media(max-width:280px){
        max-width: 280px;
        min-width: 280px;
        max-height: 240px;
        min-height: 240px;
        padding: 10px;
    }
`;

export const VideoThumbnail = styled(motion.img)`
    width: 320px;
    max-height: 180px;
    object-fit: cover;
    user-select: none;

    @media(max-width:320px){
        max-height: 165px;
    }

    @media(max-width:280px){
        max-height: 145px;
    }
`;

export const VideoInfo = styled.div`
    background-color: transparent;
`;

export const VideoTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    margin: 10px 0 0 0px;
    min-height: 40px;
    max-height: 40px;
    overflow: hidden;
`;

export const VideoThumbnailInfo = styled.p`
    color: #919191;
    margin: 10px 0 0 0px;
`;

export const FavButtonContainer = styled.div`
    height: 42px;
    margin: -15rem 0 0 15rem;
    width: 42px;

    @media(min-width:280px) and (max-width: 320px){        
        margin: -14.2rem 0 0 15rem;
    }
`;