import React from 'react';

//hooks
import { useGlobal } from '../../providers/Global.provider';

//components
import { MenuSVG } from '../../svg/Menu';
import { MenuList } from './MenuList/MenuList.component';

//styles
import { NavContainer, StyledButton } from './Menu.styles';


const variants = {
  open: (custom) => ({
    backgroundColor: `${custom.backgroundColorOpen}`,
    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: (custom) => ({
    backgroundColor: `${custom.backgroundColorClosed}`,
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  })
};

export const Menu = () => {
  const { state, dispatch } = useGlobal();
  const { theme, isMenuOpen } = state;
  return <NavContainer animate={isMenuOpen ? "open" : "closed"} variants={variants} theme={theme} custom={theme.header.menu} data-testid="menu">
    <StyledButton onClick={() => dispatch({type:'menu'})}>
      <MenuSVG/>
      </StyledButton>
    <MenuList/>
  </NavContainer>
}