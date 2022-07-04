import ContactForm from '../components/ContactForm';
import { Section } from '../components/Section';
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

function Contact() {
  return (
    <Section title="CONTACT 📱 ME" id="contact">
      <div className="flex flex-col items-center md:flex-row justify-center gap-16 flex-wrap">
        <div className="md:w-64 w-full flex-col items-center">
          <h2 className="text-xl text-white font-medium ">Divyansh Kushwaha</h2>
          <p className="text-sm">
            Ramanujan House, IIIT Naya Raipur Sector 24, Naya Raipur,
            Chhattisgarh 493661 <br /> INDIA
          </p>
          <br />
          <p>
            <span className="font-medium">Email:</span>
            <br /> kushwaha.divyansh.dxn@gmail.com
          </p>
          <p>
            <span className="font-medium">Mobile:</span>
            <br />
            +91-8354931770
          </p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <a
              href="https://www.instagram.com/divyansh.dxn/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/divyanshdxn/"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.github.com/divyansh-dxn/"
              rel="noreferrer"
              target="_blank"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshdxn/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.github.com/divyansh-dxn/"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-96">
          <ContactForm />
        </div>

        <iframe
          className="md:w-96 w-full h-96 rounded-lg"
          title="Location"
          src="https://www.google.com/maps/embed/v1/place?q=iiit+naya+raipur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </Section>
  );
}

export default Contact;
