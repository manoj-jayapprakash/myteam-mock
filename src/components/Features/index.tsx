import React from 'react';
import Heading from 'components/UI/Heading';
import personIcon from 'assets/icon-person.svg';
import gearIcon from 'assets/icon-cog.svg';
import chartIcon from 'assets/icon-chart.svg';
import Feature, { TFeature } from './Feature';

function Features() {
  const features: TFeature[] = [
    {
      title: 'Experienced Individuals',
      image: personIcon,
      imageAltText: 'person icon',
      description:
        'Our network is made up of highly experienced professionals who are passionate about what they do.',
    },
    {
      title: 'Easy to Implement',
      image: gearIcon,
      imageAltText: 'gear icon',
      description:
        'Our processes have been refined over years of implementation meaning our teams always deliver.',
    },
    {
      title: 'Enhanced Productivity',
      image: chartIcon,
      imageAltText: 'chart icon',
      description:
        'Our customized platform with in-built analytics helps you manage your distributed teams.',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 md:w-3/4 lg:flex lg:gap-12 lg:w-full">
      <Heading type="h2" className="mb-8 md:w-3/4 md:mb-12">
        Build & manage distributed teams like no one else.
      </Heading>
      <ul className="text-center grid gap-12 md:text-left">
        {features.map((feature) => (
          <li key={feature.title}>
            <Feature
              title={feature.title}
              image={feature.image}
              imageAltText={feature.imageAltText}
              description={feature.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
