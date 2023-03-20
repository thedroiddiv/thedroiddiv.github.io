import { About } from './About';
import { Home } from './Home';
import { Skills } from './Skills';
import { ExperienceSection } from './Experience';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { NavBar } from '../components/NavBar';

export const GrayApp = () => {
  return (
    <div className={`bg-zinc-950 text-white`}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Footer/>
    </div>
  );
};
