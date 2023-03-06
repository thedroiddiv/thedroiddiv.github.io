import Ellipse from '../svgs/ellipse.svg';
import { About } from './About';
import { Home } from './Home';
import { Skills } from './Skills';


const App = () => {
  return (
    <div className={`bg-zinc-950 text-white`}>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
};

export default App;
