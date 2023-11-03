import React from 'react';

export type UserProfileProps = {
  userImage: string;
  name: string;
  company: string;
};

export default function UserProfile({
  userImage,
  name,
  company,
  className = '',
}: UserProfileProps & { className?: string }) {
  return (
    <figure
      className={`flex flex-col gap-2 items-center text-center ${className}`}
    >
      <img
        src={userImage}
        alt={`${name} Profile`}
        width={96}
        className="rounded-full border-2 border-solid border-white"
      />
      <figcaption className="grid gap-1">
        <p className="text-lg text-secondary-rapture-blue font-livvic">
          {name}
        </p>
        <p className="text-base italic font-light font-livvic">{company}</p>
      </figcaption>
    </figure>
  );
}
