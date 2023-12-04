import Footer from 'components/Footer';
import Form from 'components/Form/Form';
import Hero from 'components/Hero';
import Queries from 'components/Queries';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

function Contact() {
  return (
    <main>
      <Hero className="max-w-6xl mx-auto grid gap-4 px-4 pt-12 pb-12 md:w-2/3 md:mx-auto lg:w-full text-center xl:items-center">
        <Heading type="h1">Contact</Heading>
        <Paragraph className="text-2xl xl:text-2xl text-primary-coral">
          Ask us about
        </Paragraph>
        <Queries />
      </Hero>
      <Form />
    </main>
  );
}

export default Contact;
