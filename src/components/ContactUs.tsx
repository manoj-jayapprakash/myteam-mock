import React from 'react';
import Heading from 'components/UI/Heading';
import Buttons from 'components/UI/Buttons';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <section className="flex flex-col gap-8 md:flex-row max-w-6xl mx-auto md:justify-between ">
      <Heading type="h2" className="text-secondary-sacramento-green font-bold">
        Ready to get started?
      </Heading>
      <Link to="/contact">
        <Buttons model="primary" mode="dark" text="contact us" />
      </Link>
    </section>
  );
}

export default ContactUs;
