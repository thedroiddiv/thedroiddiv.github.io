import React from 'react';
import { ExperienceCard } from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { myExperiences } from '../data/Experiences';

function Experiences() {
  return (
    <Section title="MY 🤝 EXPERIENCES" id="experiences">
      <div className="md:flex md:flex-nowrap md:overflow-x-scroll md:px-6 py-8 gap-16">
        {myExperiences.map((exp, index) => (
          <div className="md:transition md:hover:scale-105 md:duration-500">
            <ExperienceCard key={index} experience={exp} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experiences;
