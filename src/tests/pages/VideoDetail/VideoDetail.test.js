import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { VideoDetail } from '../../../pages/VideoDetail/VideoDetail.page';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../../../providers/Global.provider';
const mockVideoInfo =  require('../../../mock-data/youtube-video-api-id.json').items[0];

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: ()=>({videoId:'40RVG_ij-cY'}),
}));

jest.mock('../../../utils/hooks/useFetchVideoInfo', () => ({
    useFetchVideoInfo: ()=>({videoInfo:mockVideoInfo}),
}));

describe('VideoDetail', () => {
    

    it('should render correctly', async() => {        
        global.gapi = {
            load:jest.fn(),
        }
        await act(async()=>{
            render(<BrowserRouter>
                <GlobalProvider>
                    <VideoDetail/>
                </GlobalProvider>
            </BrowserRouter>);
        });
        const component = screen.getByTestId('video-detail');
        const videoFrame =  screen.getByTestId('video-frame');
        const videoInfo =  screen.getByTestId('video-info');
        const relatedVideos =  screen.getByTestId('related-videos');
        const infoToggle = screen.getByTestId('info-toggle');
        expect(component).toBeInTheDocument();
        expect(videoFrame).toBeInTheDocument();
        expect(videoInfo).toBeInTheDocument();
        expect(relatedVideos).toBeInTheDocument();
        expect(infoToggle).toBeInTheDocument();
        expect(infoToggle.textContent).toBe("Show more");
    });

    it('Should show "less" when the info div is clicked', async() => {
        global.gapi = {
            load:jest.fn(),
        }
        await act(async()=>{
            render(<BrowserRouter>
                <GlobalProvider>
                    <VideoDetail/>
                </GlobalProvider>
            </BrowserRouter>);
        });
        const component = screen.getByTestId('video-detail');
        const videoFrame =  screen.getByTestId('video-frame');
        const videoInfo =  screen.getByTestId('video-info');
        const relatedVideos =  screen.getByTestId('related-videos');
        const infoToggle = screen.getByTestId('info-toggle');
        fireEvent.click(infoToggle);
        expect(component).toBeInTheDocument();
        expect(videoFrame).toBeInTheDocument();
        expect(videoInfo).toBeInTheDocument();
        expect(relatedVideos).toBeInTheDocument();
        expect(infoToggle).toBeInTheDocument();
        expect(infoToggle.textContent).toBe("Show less");
    });
});