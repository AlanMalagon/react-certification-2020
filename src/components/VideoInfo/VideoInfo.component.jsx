import React, { useState } from 'react';

//hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobal } from '../../providers/Global.provider';

//Components
import { FavoriteButton } from '../FavoriteButton/FavoriteButton.component';

//utils
import { parseDatetime } from '../../utils/parseDatetime';

//styles
import { 
    Subcontainer,
    TitleAndDateContainer,
    Title, 
    ChannelAndDatePublished,
    Separator, 
    DescriptionContainer, 
    DescriptionText, 
    ShowLessMore, 
    FavButtonContainer 
} from './VideoInfo.styles';

const variants = {
    open: {height: "auto"},
    closed: {height: 50}
}

export const VideoInfo = ({video}) => {
    const { isAuthenticated } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    const { title, channelTitle, publishedAt, description} = video.snippet;
    const { state } = useGlobal();

    return <div data-testid="video-info">
        <Subcontainer>
            <TitleAndDateContainer>
                <Title theme={state.theme}>{title}</Title>
                <ChannelAndDatePublished theme={state.theme}>{`${channelTitle} • ${parseDatetime(publishedAt)}`}</ChannelAndDatePublished>
            </TitleAndDateContainer>
            { (state.user.authenticated || isAuthenticated ) &&
                <FavButtonContainer>
                    <FavoriteButton video={video}/>
                </FavButtonContainer>
            }
        </Subcontainer>
        <Separator theme={state.theme}></Separator>
        <DescriptionContainer animate={isOpen ? "open":"closed"} variants={variants}>
            <DescriptionText theme={state.theme}>{description}</DescriptionText>
        </DescriptionContainer>
        <ShowLessMore theme={state.theme} data-testid="info-toggle" onClick={()=>setIsOpen(!isOpen)}>Show {!isOpen && 'more'}{isOpen && 'less'}</ShowLessMore>
    </div>
}