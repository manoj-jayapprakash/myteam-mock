import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import React from 'react';

export type TFeature = {
  title: string;
  image: string;
  imageAltText: string;
  description: string;
};

function Feature({ title, image, imageAltText, description }: TFeature) {
  return (
    <div className="grid gap-3 md:flex md:items-start md:gap-8">
      <img src={image} alt={imageAltText} className="block mx-auto" />
      <div className="grid gap-4">
        <Heading type="h3" className="text-primary-coral">
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}

export default Feature;
