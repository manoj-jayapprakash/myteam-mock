import React, { useState } from 'react';
import Logo from 'components/NavBar/Logo';
import useMediaQuery from 'hooks/useMediaQuery';
import hamburger from 'assets/icon-hamburger.svg';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

function NavBar() {
  const nonMobileView = useMediaQuery('(min-width: 768px)');
  const [viewMobileMenu, setViewMobileMenu] = useState(false);

  const renderMobileContent = viewMobileMenu ? (
    <MobileMenu hideMobileMenu={() => setViewMobileMenu(!viewMobileMenu)} />
  ) : (
    <button type="button" onClick={() => setViewMobileMenu(!viewMobileMenu)}>
      <img src={hamburger} alt="hamburger menu" />
    </button>
  );

  return (
    <nav
      className={`${
        nonMobileView
          ? 'flex items-center'
          : 'flex items-center justify-between'
      } px-4 py-8 max-w-6xl mx-auto`}
    >
      <Logo />
      {nonMobileView ? <Menu /> : renderMobileContent}
    </nav>
  );
}

export default NavBar;
