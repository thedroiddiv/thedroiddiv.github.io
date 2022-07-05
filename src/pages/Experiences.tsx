import React from 'react';
import { ExperienceCard } from '../components/ExperienceCard';
import { Section } from '../components/Section';
import { myExperiences } from '../data/Experiences';

function Experiences() {
  return (
    <Section title="MY 🤝 EXPERIENCES" id="experiences">
      <div className="flex flex-nowrap w-full overflow-x-scroll px-6 py-8 gap-16">
        {myExperiences.map((exp, index) => (
          <div className=" transition hover:scale-105 duration-500">
            <ExperienceCard key={index} experience={exp} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experiences;
