import Ellipse from '../svgs/ellipse.svg';
import { About } from './About';
import { Home } from './Home';


const App = () => {
  return (
    <div className={`bg-zinc-950 text-white`}>
      <Home/>
      <About/>
    </div>
  );
};

export default App;
