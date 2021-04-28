import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../../../components/Login/Login.component';
import GlobalProvider from '../../../providers/Global.provider';

describe('Login component', () => {

    it('should render correctly', ()=>{
        render(<GlobalProvider>
                <Login/>
        </GlobalProvider>);
        const login = screen.getByTestId('login');
        expect(login).toBeInTheDocument();
    });

    it('should change the content of the login button once clicked succesfully', () => {
        render(<GlobalProvider>
                <Login/>
        </GlobalProvider>);
        const username = screen.getByPlaceholderText('Username');
        const password = screen.getByPlaceholderText('Password');
        const button = screen.getByText(/Login/);
        fireEvent.change(username, { target: { value: 'wizeline' } });
        fireEvent.change(password, { target: { value: 'Rocks!' } });
        expect(button.innerHTML).toBe('Login');
        fireEvent.click(button);
        expect(button.innerHTML).toBe('...');
    });
});