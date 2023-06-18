import ContactUs from 'components/ContactUs';
import Footer from 'components/Footer';

function About() {
  return (
    <main>
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
