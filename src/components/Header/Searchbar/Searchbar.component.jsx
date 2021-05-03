import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//hooks
import { useGlobal } from '../../../providers/Global.provider';

//components
import { Container, InnerContainer, StyledSearchbar, StyledSvg } from './Searchbar.styles';

export const Searchbar = () => {

  const { state, dispatch } = useGlobal();
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type:'search', value:inputValue});
    history.push("/");
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleIconClick = () =>{
    dispatch({type:'search', value:inputValue});
    history.push("/");
  }

  return <Container data-testid="searchbar" onClick={()=>dispatch({type:'closeMenu'})}>
      <InnerContainer onSubmit={handleSubmit} data-testid="form">
          <StyledSearchbar type="text" placeholder="Search" onChange={handleChange} value={inputValue} theme={state.theme}></StyledSearchbar>
          <StyledSvg height="32" focusable="false" viewBox="0 0 24 24" data-testid="searchbarIcon" onClick={handleIconClick}><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></StyledSvg>
      </InnerContainer>
  </Container>;
}