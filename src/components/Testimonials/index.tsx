import Heading from 'components/UI/Heading';
import React from 'react';
import kady from 'assets/avatar-kady.jpg';
import aiysha from 'assets/avatar-aiysha.jpg';
import arthur from 'assets/avatar-arthur.jpg';
import UserProfile from 'components/UI/UserProfile';
import Testimonial from './Testimonial';

function Testimonials() {
  const testimonials = [
    {
      testimonial:
        ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
      userImage: kady,
      name: 'Kady Baker',
      company: 'Product Manager at Bookmark',
    },
    {
      testimonial:
        '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
      userImage: aiysha,
      name: 'Aiysha Reese',
      company: 'Founder of Manage',
    },
    {
      testimonial:
        '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
      userImage: arthur,
      name: 'Arthur Clarke',
      company: 'Co-founder of MyPhysio',
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4  mb-4 md:w-3/4 lg:w-full py-24">
      <Heading
        type="h2"
        className="text-center px-2 leading-none lg:w-11/12 lg:mx-auto"
      >
        Delivering real results for top companies. Some of our{' '}
        <span className="text-secondary-rapture-blue">success stories.</span>
      </Heading>
      <ul className="grid gap-12 mt-8 lg:flex lg:mt-24">
        {testimonials.map((testimonial) => (
          <li key={testimonial.testimonial} className="min-h-[15rem]">
            <Testimonial
              testimonial={testimonial.testimonial}
              key={testimonial.testimonial}
            >
              <UserProfile
                userImage={testimonial.userImage}
                name={testimonial.name}
                company={testimonial.company}
                className="flex-col-reverse"
              />
            </Testimonial>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
