import { Section } from '../components/Section';

function About() {
  return (
    <Section title="ABOUT 🧑🏻‍💻 ME" id="about">
      <div className="flex flex-col items-center justify-center gap-12 md:mt-24">
        <div className="flex mt-4 justify-center w-64 h-64">
          <img className="rounded-full" src="assets/me.png" alt="" />
        </div>
        <h6 className="text-2xl font-light text-center">
          Hi! I am Divyansh Kushwaha, an Electronics and Communication
          Engineering undergraduate at{' '}
          <p className="font-bold">
            International Institute of Information Technology, Naya Raipur,
            INDIA.{' '}
          </p>
          I love exploring new Tech.
        </h6>
      </div>
    </Section>
  );
}

export default About;
