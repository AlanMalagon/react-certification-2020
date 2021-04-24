import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { VideoDetail } from './VideoDetail.page';
import { BrowserRouter } from 'react-router-dom';
import { } from '../../utils/hooks/useFetchVideoInfo'
import GlobalProvider from '../../providers/Global.provider';

const mockVideoInfo =  {
    "kind": "youtube#searchListResponse",
    "etag": "qRmsUCXTXXtktbqjII5DpLxl9PA",
    "nextPageToken": "CBkQAA",
    "regionCode": "MX",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 25
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "vO-kVtm8Wi23ZBj64oYRG_moe18",
            "id": {
                "kind": "youtube#video",
                "videoId": "40RVG_ij-cY"
            },
            "snippet": {
                "publishedAt": "2020-03-27T16:00:02Z",
                "channelId": "UCYK1TyKyMxyDQU8c6zF8ltg",
                "title": "Cute Funny Doggos | Funny Pet Videos",
                "description": "Funny Pet Videos brings you the best animal videos around the internet! We feature dogs, cats, horses, pigs, lions, lizards, rodents, bugs, spiders, tigers, kittens, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/40RVG_ij-cY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/40RVG_ij-cY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/40RVG_ij-cY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Funny Pet Videos",
                "liveBroadcastContent": "none",
                "publishTime": "2020-03-27T16:00:02Z"
            }
        }
    ]
}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: ()=>({videoId:'40RVG_ij-cY'}),
}));

jest.mock('../../utils/hooks/useFetchVideoInfo', () => ({
    useFetchVideoInfo: ()=>({videos:mockVideoInfo}),
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