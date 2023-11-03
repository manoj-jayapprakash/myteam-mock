import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from 'components/UI/Buttons';
import close from 'assets/icon-close.svg';

function MobileMenu({ hideMobileMenu }: { hideMobileMenu: () => void }) {
  return (
    <div className="absolute top-0 left-1/4 bg-secondary-police-blue p-4 w-3/4 h-screen z-10">
      <ul className=" grid gap-8 text-white lowercase ml-4">
        <li className="ml-auto mt-4">
          <button
            type="button"
            onClick={hideMobileMenu}
            onKeyDown={hideMobileMenu}
          >
            <img src={close} alt="close button" />
          </button>
        </li>
        <li>
          <Link onClick={hideMobileMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={hideMobileMenu} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={hideMobileMenu} to="/contact">
            <Buttons model="primary" mode="light" text="contact us" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
