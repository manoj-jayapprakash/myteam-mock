import React from 'react';
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';

function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={className}>
      <img src={logo} alt="myteam logo" />
    </Link>
  );
}

export default Logo;
