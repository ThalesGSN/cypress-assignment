import React, { FunctionComponent } from 'react';
import { HeaderContainer } from './Header.styles';
import Logo from '../../assets/icons/logo.svg';

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <img src={Logo} alt="Origin Financial Logo" />
  </HeaderContainer>
);

export default Header;
