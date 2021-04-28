import React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkmodeButton } from '../../../../components/Header/DarkmodeButton/DarkmodeButton.component';
import GlobalProvider from '../../../../providers/Global.provider';

describe('DarkmodeButton component', ()=>{    
    
    it("should include a button", ()=>{
        const { container } = render(<GlobalProvider>
            <DarkmodeButton/>
        </GlobalProvider>)
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
    });
    
    it("the button should include an svg", ()=>{
        render(<GlobalProvider>
            <DarkmodeButton/>
        </GlobalProvider>);
        const svg = screen.getByTestId("darkmodeIcon");
        expect(svg).toBeInTheDocument();
    });
});