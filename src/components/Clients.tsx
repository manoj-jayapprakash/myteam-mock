import React from 'react';
import verge from 'assets/logo-the-verge.png';
import guardian from 'assets/logo-the-guardian.png';
import jakarta from 'assets/logo-jakarta-post.png';
import gadgetsNow from 'assets/logo-gadgets-now.png';
import techRadar from 'assets/logo-tech-radar.png';
import Heading from './UI/Heading';

function Clients() {
  const clients = [
    {
      image: verge,
      altText: 'Verge company logo',
    },
    {
      image: jakarta,
      altText: 'Jakarta  company logo',
    },
    {
      image: guardian,
      altText: 'the Guardian  company logo',
    },
    {
      image: techRadar,
      altText: 'Tech Radar  company logo',
    },
    {
      image: gadgetsNow,
      altText: 'Gadgets Now company logo',
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-12 py-12 text-center">
      <Heading type="h2" className="mb-8">
        Some of our Clients
      </Heading>
      <ul className="xl:py-8 flex items-center flex-col gap-8 md:flex-row xl:justify-evenly">
        {clients.map((client) => (
          <li key={client.image} className="w-36">
            <img src={client.image} alt={client.altText} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Clients;
