import React, { FunctionComponent } from 'react';
import { HeaderContainer } from './Header.styles';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Logo from '../../assets/icons/logo.webp';

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <img src={Logo} alt="Bank Logo" />
  </HeaderContainer>
);

export default Header;
