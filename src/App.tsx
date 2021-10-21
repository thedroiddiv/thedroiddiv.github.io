import { Route, Switch, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { AnimatePresence } from 'framer-motion'
import FloatingBubbles from './components/FloatingBubbles';
import ContactMe from './pages/ContactMe';

function App() {

  const loc = useLocation();

  return (

    <div id="main" className=" overflow-hidden max-h-screen">
      <FloatingBubbles />


      <div className="h-screen md:p-10 overflow-auto bg-fixed bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/bgblue.jpg"})` }}>

        {/* glass pannel */}
        <div className="p-4 pb-10 md:p-10 bg-fixed bg-black text-white md:rounded-3xl min-h-full md:min-h-4/5 backdrop-filter bg-opacity-40 " >

          {/* main content */}
          <Navbar />
          <div className="srcoll flex items-center justify-center mt-6 md:mt-0" style={{ minHeight: "60vh" }}>
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={loc} key={loc.pathname}>
                <Route path="/" exact component={About} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={ContactMe} />
              </Switch>
            </AnimatePresence>
          </div>
          {/* main content */}

        </div>
        {/* glass pannel */}

      </div>
    </div>

  );
}

export default App;
