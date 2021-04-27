import React, { useEffect, useState } from 'react';

//Styles
import { useGlobal } from '../../providers/Global.provider';
import { Container, PageButton } from './PageSelector.styles';

export const PageSelector = ({pageTokens}) =>{

    const { state, dispatch } = useGlobal();
    const [ pageToken, setPageToken ] = useState(null);
    const [ disablePrevButton, setDisablePrevButton ] = useState(true);

    useEffect(()=>{
        dispatch({type: 'changePage', value:pageToken});
        pageTokens.prevPageToken !== '' ? setDisablePrevButton(false):setDisablePrevButton(true);
    },[pageToken, dispatch, pageTokens]);

    const getPrevPage = () =>{
        setPageToken(pageTokens.prevPageToken);
    }

    const getNextPage = () =>{
        setPageToken(pageTokens.nextPageToken);
    }
    
    return(<Container>
        <PageButton 
            theme={state.theme} 
            whileTap={disablePrevButton?{}:{scale:0.9}} 
            onClick={getPrevPage}
            disabled={disablePrevButton} 
            direction='left'
        >
            &#x2039;
        </PageButton>
        <PageButton 
            theme={state.theme} 
            whileTap={{scale:0.9}} 
            onClick={getNextPage}
        >
            &#x203A;
        </PageButton>
    </Container>);

}
