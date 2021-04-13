import React from 'react';
import {Container, StyledButton, StyledSvg, buttonPressedStyle} from '../HeaderIconStyles';

export const DarkmodeButton = () => {
    return <Container data-testid="darkmodeButton">
       <StyledButton whileTap={buttonPressedStyle}>
            <StyledSvg height="32" viewBox="0 0 24 24" width="32" data-testid="darkmodeIcon">
                <path d="m2.71 15.85v2.68c0 1.52 1.24 2.76 2.76 2.76h2.68l1.9 1.9c.52.52 1.22.81 1.95.81s1.43-.29 1.95-.81l1.9-1.9h2.68c1.52 0 2.76-1.24 2.76-2.76v-2.68l1.9-1.9c.52-.52.81-1.22.81-1.95s-.29-1.43-.81-1.95l-1.9-1.9v-2.68c0-1.52-1.24-2.76-2.76-2.76h-2.68l-1.9-1.9c-1.04-1.04-2.86-1.04-3.9 0l-1.9 1.9h-2.68c-1.52 0-2.76 1.24-2.76 2.76v2.68l-1.9 1.9c-.52.52-.81 1.22-.81 1.95s.29 1.43.81 1.95zm9.29-9.85c.8 0 1.57.15 2.28.43.29.12.47.4.47.7 0 .31-.19.59-.48.7-1.58.62-3.27 2.04-3.27 4.17s1.69 3.55 3.27 4.17c.29.11.48.39.48.7 0 .3-.18.58-.47.7-.71.28-1.48.43-2.28.43-3.48 0-6-2.52-6-6s2.52-6 6-6z"/>
            </StyledSvg>
        </StyledButton>
    </Container>;
}