import React from 'react';
import { render, act,screen } from '@testing-library/react';
import { Header } from '../../../../components/Header/Header.component'
import { Routes } from '../../../../components/Routes/Routes.component';
import { MemoryRouter } from 'react-router';
import GlobalProvider from '../../../../providers/Global.provider';

describe('ProfileButton component', ()=>{

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
    
    it("should include a button", async()=>{
        global.gapi = {
            load:jest.fn(),
        }
        await act(async()=>{
            render(createRouter());
        });
        const button = screen.getByTestId('profileButton');
        expect(button).toBeInTheDocument();
    });
    
    it("the button should include an svg", async()=>{
        global.gapi = {
            load:jest.fn(),
        }
        await act(async()=>{
            render(createRouter());
        });
        const svg = screen.getByTestId("profileIcon");
        expect(svg).toBeInTheDocument();
    });
});