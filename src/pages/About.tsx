import Clients from 'components/Clients';
import ContactUs from 'components/ContactUs';
import Directors from 'components/Directors';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

function About() {
  return (
    <main>
      <Hero className="max-w-6xl mx-auto grid gap-4 px-4 pt-12 pb-24 md:w-2/3 md:mx-auto lg:w-full text-center xl:gap-24 xl:pb-36 xl:text-left xl:grid-cols-3 xl:items-center bg-hero-home bg-no-repeat bg-bottom">
        <Heading type="h1">About</Heading>
        <Paragraph className="xl:col-span-2">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </Paragraph>
      </Hero>
      <div className="bg-secondary-jungle-green">
        <Directors />
      </div>
      <div className="bg-secondary-sacramento-green">
        <Clients />
      </div>
      <div className="bg-primary-coral p-16 text-center md:p-24 md:text-left">
        <ContactUs />
      </div>
      <div className="bg-secondary-sacramento-green">
        <Footer />
      </div>
    </main>
  );
}

export default About;
