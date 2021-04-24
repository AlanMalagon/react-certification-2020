import styled from 'styled-components';

export const VideoRelated = styled.div`
    cursor:pointer;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
`;

export const Thumbnail = styled.img`
    float:left;
    margin-right: 10px;
    width: 45%;
`;

export const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -5px;
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    max-height: 50px;
    overflow: hidden;
    color: ${props => props.theme.videoDetail.relatedVideos.color};
`;

export const ChannelAndDatePublished = styled.p`
    font-size: 13px;
    margin: 5px 0 0 0;
    color: ${props => props.theme.videoDetail.relatedVideos.colorDate};
`;