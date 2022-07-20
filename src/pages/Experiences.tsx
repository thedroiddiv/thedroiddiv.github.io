import React from 'react';
import { ExperienceCard } from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { myExperiences } from '../data/Experiences';

function Experiences() {
  return (
    <Section title="MY 🤝 EXPERIENCES" id="experiences">
      <div className="flex flex-wrap gap-8 justify-center">
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
