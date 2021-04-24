import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Subcontainer = styled.div`
    display: grid;
`;

export const Title = styled.div`
    color: ${props => props.theme.videoDetail.color};
    font-size: 32px;
    grid-column: 1/2;
    grid-row: 1;
    margin: 10px 0px 0px 0px;
`;

export const ChannelAndDatePublished = styled.div`
    color: ${props => props.theme.videoDetail.colorDate};
    font-size: 12px;
    grid-column: 1/2;
    grid-row: 2;
    margin: 0px 0px 0px 0px;
`;

export const AddToFavoritesContainer = styled.div`
    grid-column: 2/2;
    grid-row: 2;
`;

export const AddToFavoritesButton = styled(motion.div)`
    float: right;
    height: 42px;
    margin: -35px 5px 0 0; 
    width: 42px;
    svg{
        cursor: pointer;
        fill: ${props => props.theme.videoDetail.svgColor};
        float: right;
    }
`;

export const Separator = styled.div`
    border: 1px solid ${props => props.theme.videoDetail.colorSeparator};
    margin: 10px 0px 0px 0px;
    width:100%;
`;

export const DescriptionContainer = styled(motion.div)`
    overflow: hidden;
    min-height: 50px;
`;

export const DescriptionText = styled.p`
    text-align: justify;
    font-size: 12px;
    margin: 10px 0px 0px 0px;
    color: ${props => props.theme.videoDetail.colorDescription};
`;

export const ShowLessMore = styled.button`
    background: ${props => props.theme.videoDetail.descButton.backgroundColor};
    border: none;
    border-radius: 2px;
    color: ${props => props.theme.videoDetail.descButton.color};
    cursor: pointer;
    font-size: 16px;
    outline: none;
    width: 100%;
    height: 50px;
`;