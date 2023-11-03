import React from 'react';
import personIcon from 'assets/icon-person.svg';
import gearIcon from 'assets/icon-cog.svg';
import chartIcon from 'assets/icon-chart.svg';
import Paragraph from './UI/Paragraph';

function Queries() {
  const queries = [
    {
      image: personIcon,
      imageAltText: 'person icon',
      description: 'The quality of our talent network',
    },
    {
      image: gearIcon,
      imageAltText: 'gear icon',
      description: 'Usage & implementation of our software',
    },
    {
      image: chartIcon,
      imageAltText: 'chart icon',
      description: 'How we help drive innovation',
    },
  ];
  return (
    <ul className="xl:px-6 grid justify-center gap-4">
      {queries.map((query) => (
        <li key={query.description} className="w-fit">
          <div className="flex items-center gap-4">
            <img src={query.image} alt={query.imageAltText} />
            <Paragraph>{query.description}</Paragraph>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Queries;
