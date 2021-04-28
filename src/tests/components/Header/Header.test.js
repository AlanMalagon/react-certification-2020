import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Header } from '../../../components/Header/Header.component';
import GlobalProvider from '../../../providers/Global.provider';
import { Routes } from '../../../components/Routes/Routes.component';
import { MemoryRouter } from 'react-router';

describe('Header component', ()=>{
    it('should render correctly', async()=>{
        const createRouter = (initialEntry = '/') => {
            return (
                <MemoryRouter initialEntries={[initialEntry]}>
                    <GlobalProvider>
                        <Header/>
                        <Routes/>
                    </GlobalProvider>
                </MemoryRouter>
            )
        }
        global.gapi = {
            load:jest.fn(),
        }
        await act(async()=>{
            render(createRouter());
        });
        const searchbar = screen.getByTestId('searchbar');
        const darkmodeButton = screen.getByTestId('darkmodeButton');
        const profileButton = screen.getByTestId('profileButton');
        expect(searchbar).toBeInTheDocument();
        expect(darkmodeButton).toBeInTheDocument();
        expect(profileButton).toBeInTheDocument();
    });
});