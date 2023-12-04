import React from 'react';
import { Link } from 'react-router-dom';
import fb from 'assets/icon-facebook.svg';
import pinterest from 'assets/icon-pinterest.svg';
import twitter from 'assets/icon-twitter.svg';
import Logo from './NavBar/Logo';
import Social from './Social';
import Paragraph from './UI/Paragraph';

function Footer() {
  const socialSites = [
    {
      image: fb,
      imageAltText: 'facebook logo',
      link: 'https://www.facebook.com/',
    },
    {
      image: pinterest,
      imageAltText: 'pinterest logo',
      link: 'https://www.pinterest.com/',
    },
    {
      image: twitter,
      imageAltText: 'twitter logo',
      link: 'https://www.twitter.com/',
    },
  ];
  return (
    <footer className="py-12 grid gap-4 text-center md:text-start max-w-6xl mx-auto bg-secondary-sacramento-green">
      <div className="grid gap-4 md:flex md:justify-between md:items-center">
        <div className="grid gap-4">
          <Logo className="mx-auto w-fit block" />
          <ul className="flex gap-4 justify-center md:justify-start">
            <li>
              <Link to="/" className="hover:text-primary-coral">
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-coral">
                about
              </Link>
            </li>
          </ul>
        </div>
        <address>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </address>
      </div>
      <div className="grid gap-4 md:flex md:justify-between">
        <Social socialSites={socialSites} />
        <Paragraph>Copyright 2020. All Rights Reserved</Paragraph>
      </div>
    </footer>
  );
}

export default Footer;
