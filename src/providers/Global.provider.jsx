import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducer';
import { storage } from '../utils/storage';
import { dark } from '../Themes.styles';

const theme = JSON.parse(storage.get('theme')) || dark;
const user = JSON.parse(storage.get('user')) || {authenticated:false};
const favorites = storage.get('favorites') || [];

const GlobalContext = React.createContext(null);

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
}

function GlobalProvider({children}) {

  const [state, dispatch] = useReducer(reducer, {theme, search:'doggos', page:'', user, favorites, isMenuOpen:false});

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobal };
export default GlobalProvider;