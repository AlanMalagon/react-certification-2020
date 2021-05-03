import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../../../components/Layout/Layout.component';
import GlobalProvider from '../../../providers/Global.provider';

describe('Layout component', ()=>{
    it('should render correctly',()=>{
        const {container} =  render(<GlobalProvider>
                <Layout/>
            </GlobalProvider>);
        const main = container.querySelector('main');
        expect(main).toBeInTheDocument();
    });
});