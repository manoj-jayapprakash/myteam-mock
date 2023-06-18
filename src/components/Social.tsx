import React from 'react';
import fb from 'assets/icon-facebook.svg';
import pinterest from 'assets/icon-pinterest.svg';
import twitter from 'assets/icon-twitter.svg';
import { Link } from 'react-router-dom';

function Social() {
  const socialSites = [
    {
      image: fb,
      imageAltText: 'facebook logo',
      link: 'www.facebook.com',
    },
    {
      image: pinterest,
      imageAltText: 'pinterest logo',
      link: 'www.pinterest.com',
    },
    {
      image: twitter,
      imageAltText: 'twitter logo',
      link: 'www.twitter.com',
    },
  ];
  return (
    <ul className="flex gap-4 items-center justify-center">
      {socialSites.map((social) => (
        <li key={social.link}>
          <Link to={social.link}>
            <img src={social.image} alt={social.imageAltText} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Social;
