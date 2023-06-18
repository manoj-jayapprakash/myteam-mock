import Buttons from 'components/UI/Buttons';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className="flex w-full gap-4 items-center ml-8 lowercase text-white">
      <li>
        <Link to="/" className="hover:text-primary-coral">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-primary-coral">
          About
        </Link>
      </li>
      <li className="ml-auto">
        <Link to="/contact">
          <Buttons model="primary" mode="light" text="contact us" />
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
