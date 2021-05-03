import React from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider.jsx';

//styles
import { Container, GlobalStyle } from'./Layout.styles.js';

function Layout({ children }) {

  const { theme } = useGlobal().state;

  return <Container theme={theme}>
    <GlobalStyle theme={theme}/>
      {children}
    </Container>;
}

export default Layout;
