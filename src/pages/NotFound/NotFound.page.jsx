import React from 'react';
import { Link } from 'react-router-dom';

//styles
import { Container, TitleLink, ImgContainer } from './NotFound.styles';

function NotFoundPage() {
  return (
    <Container>
      <h1>There's nothing to see here</h1>
      <Link to="/">
        <TitleLink>Go home! &#x27A1;</TitleLink>
      </Link>
      <ImgContainer>      
        <img src="404.gif" alt="page not found" />
      </ImgContainer>
    </Container>
  );
}

export default NotFoundPage;
