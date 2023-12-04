import Heading from 'components/UI/Heading';
import React from 'react';
import { directors } from './directors.data';
import Director from './Director';

function Directors() {
  return (
    <section className="max-w-6xl mx-auto pt-12 pb-24">
      <Heading type="h2" className="pb-8 text-center">
        Meet the directors
      </Heading>
      <ul className="grid gap-24 md:flex md:flex-wrap md:gap-12 md:justify-center">
        {directors.map((director) => (
          <li key={director.name} className="mx-auto md:m-0 min-h-[16rem] ">
            <Director
              userImage={director.userImage}
              name={director.name}
              company={director.company}
              socialSites={director.socialSites}
              quote={director.quote}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Directors;
