import React from 'react';

export type SocialProps = {
  image: string;
  imageAltText: string;
  link: string;
};

function Social({ socialSites }: { socialSites: SocialProps[] }) {
  return (
    <ul className="flex gap-4 items-center justify-center">
      {socialSites.map((social) => (
        <li key={social.link}>
          <a href={social.link} target="_blank" rel="noreferrer">
            <img src={social.image} alt={social.imageAltText} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
