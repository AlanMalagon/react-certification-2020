import React from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider';

//components
import { DarkmodeButton } from './DarkmodeButton/DarkmodeButton.component';
import { ProfileButton } from './ProfileButton/ProfileButton.component';
import { Searchbar } from './Searchbar/Searchbar.component';

//styles
import { StyledHeader } from './Header.styles.js';

export const Header = () => {

  const { state } = useGlobal();

  return <StyledHeader theme={state.theme}>
      <Searchbar/>
      <DarkmodeButton/>
      <ProfileButton/>
  </StyledHeader>;
}