import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalProvider from '../../../providers/Global.provider';
import FavoriteVideos from '../../../pages/FavoriteVideos/FavoriteVideos.page';
import { MemoryRouter } from 'react-router';

describe('FavoriteVideos component', () => {

    const createRouter = (initialEntry = '/') => {
        return (
            <MemoryRouter initialEntries={[initialEntry]}>
                <GlobalProvider>
                    <FavoriteVideos/>
                </GlobalProvider>
            </MemoryRouter>
        )
    }
    
    it('should render correctly', () => {
        render(createRouter());
        const favoriteVideos =  screen.getByTestId('favorites-page');
        expect(favoriteVideos).toBeInTheDocument();
    });

});