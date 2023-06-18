import ContactUs from 'components/ContactUs';
import Features from 'components/Features/index';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

function Home() {
  return (
    <main>
      <Hero className="max-w-6xl mx-auto grid gap-4 px-4 pt-12 pb-24 md:w-2/3 md:mx-auto lg:w-full text-center xl:gap-24 xl:pb-36 xl:text-left xl:grid-cols-2 xl:items-center bg-hero-home bg-no-repeat bg-bottom">
        <Heading type="h1">
          Find the best <span className="text-primary-coral">talent</span>
        </Heading>
        <Paragraph>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </Paragraph>
      </Hero>
      <div className="bg-secondary-sacramento-green">
        <Features />
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

export default Home;
