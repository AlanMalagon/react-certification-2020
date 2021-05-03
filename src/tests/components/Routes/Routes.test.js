import React from 'react';
import { act, screen, render } from '@testing-library/react';
import { Routes } from '../../../components/Routes/Routes.component';
import { MemoryRouter } from 'react-router';
import GlobalProvider from '../../../providers/Global.provider';

describe('Routes component', ()=>{

    const createRouter = (initialEntry = '/') => {
        return (
            <MemoryRouter initialEntries={[initialEntry]}>
                <GlobalProvider>
                    <Routes/>
                </GlobalProvider>
            </MemoryRouter>
        )
    }

    beforeAll(()=>{
        global.gapi = {
            load:jest.fn(),
        }
    });

    it('should render correctly "/" route', async ()=>{
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(createRouter()).container;
        });
        const home = screen.getByTestId('home-page');
        expect(home).toBeInTheDocument();
    });

    it('should render correctly "/login" route', async ()=>{
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(createRouter('/login')).container;
        });
        const login = screen.getByTestId('login');
        const username = screen.getByPlaceholderText('Username');
        const password = screen.getByPlaceholderText('Password');
        expect(login).toBeInTheDocument();
        expect(username).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });

    it('should render correctly "/video/:videoId" route and show a video player with the same :videoId', async ()=>{
        const videoId = '40RVG_ij-cY';
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(createRouter(`/video/${videoId}`)).container;
        });
        const videoFrame = screen.getByTestId('video-frame');
        const videoPlayer = screen.getByTitle('YouTube video player');
        const videoInfo = screen.getByTestId('video-info');
        const infoToggle = screen.getByTestId('info-toggle');
        const relatedVideos = screen.getByTestId('related-videos');
        expect(videoFrame).toBeInTheDocument();
        expect(videoPlayer.getAttribute('src').split('/')[4]).toBe(videoId);
        expect(videoInfo).toBeInTheDocument();
        expect(infoToggle).toBeInTheDocument();
        expect(relatedVideos).toBeInTheDocument();
    });

    it('"/favorites"should redirect to "/home" if the user is not authenticated', async ()=>{
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(createRouter('/favorites')).container;
        });
        const home = screen.getByTestId('home-page');
        expect(home).toBeInTheDocument();
    });

    it('Any unknown rout should show NotFound component', async ()=>{
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(createRouter('/unknown')).container;
        });
        const Title = screen.getByText(`There's nothing to see here`);
        const Link = screen.getByText(`Go home! ➡`);
        expect(Title).toBeInTheDocument();
        expect(Link).toBeInTheDocument();
    });
});