import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideosGrid } from '../../../components/VideosGrid/VideosGrid.component';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../../../providers/Global.provider';
import { extractVideos } from '../../../utils/extractVideos';

const data = extractVideos(require('../../../mock-data/youtube-video-api.json'));

describe('VideoGrid', ()=>{
    it('should render the component and its children correctly', ()=>{
        render(
        <BrowserRouter>
            <GlobalProvider>
                <VideosGrid data={data}/>
            </GlobalProvider>
        </BrowserRouter>);
        const container = screen.getAllByAltText(/thumbnail/i);
        expect(container.length).toBe(25);
    });
});