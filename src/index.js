import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './components/App';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="alanmalagon.us.auth0.com"
      clientId="g41uhsrFUSJB7qAjUh1XOywLkeSw6n29"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
