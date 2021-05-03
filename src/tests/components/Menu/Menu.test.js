import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalProvider from '../../../providers/Global.provider';
import { Menu } from '../../../components/Menu/Menu.component';
import { BrowserRouter } from 'react-router-dom';

describe('Menu component', () => {
    
    it('should render correctly', () => {
        render(<BrowserRouter>
            <GlobalProvider>
                <Menu/>
            </GlobalProvider>
        </BrowserRouter>);
        const menu = screen.getByTestId('menu');
        const home = screen.getByText(/Home/);
        const favorites = screen.getByText(/Favorites/);
        expect(menu).toBeInTheDocument();
        expect(home).toBeInTheDocument();
        expect(favorites).toBeInTheDocument();
    });

});