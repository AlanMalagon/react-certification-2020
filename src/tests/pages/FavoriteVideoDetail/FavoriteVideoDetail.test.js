import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalProvider from '../../../providers/Global.provider';
import FavoriteVideoDetail from '../../../pages/FavoriteVideoDetail/FavoriteVideoDetail.page';
import { MemoryRouter } from 'react-router';
import { act } from 'react-dom/test-utils';

describe('FavoriteVideoDetail component', () => {

    const createRouter = (initialEntry = '/') => {
        return (
            <MemoryRouter initialEntries={[initialEntry]}>
                <GlobalProvider>
                    <FavoriteVideoDetail/>
                </GlobalProvider>
            </MemoryRouter>
        )
    }

    beforeAll(()=>{
        global.gapi = {
            load:jest.fn(),
        }
    });
    
    it('should render correctly', async() => {
        await act(async()=>{
            render(createRouter());
        });
        const FavoriteVideoDetail =  screen.getByTestId('video-detail');
        expect(FavoriteVideoDetail).toBeInTheDocument();
    });

});