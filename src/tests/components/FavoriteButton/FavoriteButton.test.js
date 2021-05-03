import React from 'react';
import { screen, render } from '@testing-library/react';
import GlobalProvider from '../../../providers/Global.provider';
import { FavoriteButton } from '../../../components/FavoriteButton/FavoriteButton.component';

describe('FavoriteButton component', ()=>{
    it('should render correctly', () => {
        render(<GlobalProvider>
            <FavoriteButton/>
        </GlobalProvider>);
        const button = screen.getByTitle('Add to favorites');
        expect(button).toBeInTheDocument();
    });
});