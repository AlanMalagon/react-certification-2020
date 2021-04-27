import React from 'react';
import { act, screen, render } from '@testing-library/react';
import { Routes } from './Routes.component';
import { MemoryRouter } from 'react-router';
import GlobalProvider from '../../providers/Global.provider';

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

    it('should render correctly "/" route', async ()=>{        
        global.gapi = {
            load:jest.fn(),
        }
        let renderedComponent;
        await act(async()=>{
            renderedComponent = render(createRouter()).container;
        });
        const main = screen.getByTestId('home-page');
        expect(main).toBeInTheDocument();
    });
});