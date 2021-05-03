import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobal } from '../../providers/Global.provider';

function Private({ children, ...rest }) {
  const { isAuthenticated } = useAuth0();
  const { state } = useGlobal();

  return (
    <Route {...rest} render={() => ((state.user.authenticated || isAuthenticated) ? children : <Redirect to="/" />)} />
  );
}

export default Private;
