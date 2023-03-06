import { About } from './About';
import { Home } from './Home';
import { Skills } from './Skills';
import { ExperienceSection } from './Experience';

export const GrayApp = () => {
  return (
    <div className={`bg-zinc-950 text-white`}>
      <Home />
      <About />
      <Skills />
      <ExperienceSection />
    </div>
  );
};
