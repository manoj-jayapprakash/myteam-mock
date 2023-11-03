import Social, { SocialProps } from 'components/Social';
import UserProfile from 'components/UI/UserProfile';
import React, { useState } from 'react';
import plus from 'assets/icon-cross.svg';
import close from 'assets/icon-close.svg';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

type DirectorProps = {
  userImage: string;
  name: string;
  company: string;
  quote: string;
  socialSites: SocialProps[];
};

function Director({
  userImage,
  name,
  company,
  quote,
  socialSites,
}: DirectorProps) {
  const [viewQuote, setviewQuote] = useState(false);
  return (
    <div className="w-72 relative h-full">
      <div
        className={`${
          viewQuote
            ? 'bg-secondary-dark-green'
            : 'bg-secondary-sacramento-green'
        } p-8 h-full`}
      >
        {!viewQuote ? (
          <UserProfile
            userImage={userImage}
            name={name}
            company={company}
            className="gap-8"
          />
        ) : (
          <div className="grid gap-2 py-2 text-center">
            <Heading type="h3" className="text-secondary-rapture-blue">
              {name}
            </Heading>
            <Paragraph className="text-base xl:text-base">{quote}</Paragraph>
            <Social socialSites={socialSites} />
          </div>
        )}
      </div>
      <button
        type="button"
        className={`absolute top-[90%] left-[43%] rounded-full p-4 ${
          viewQuote ? 'bg-secondary-rapture-blue' : 'bg-primary-coral'
        }`}
        onClick={() => setviewQuote(!viewQuote)}
      >
        {viewQuote ? (
          <img src={close} alt="close icon" />
        ) : (
          <img src={plus} alt="cross icon" />
        )}
      </button>
    </div>
  );
}

export default Director;
