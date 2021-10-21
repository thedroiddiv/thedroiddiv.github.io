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


      <div className="h-screen p-10 overflow-auto bg-fixed bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/bgblue.jpg"})` }}>

        {/* glass pannel */}
        <div className="p-5 md:p-10 bg-fixed bg-gray-900 text-white rounded-3xl min-h-full backdrop-filter backdrop-blur bg-opacity-40 " >

          {/* main content */}
          <Navbar />
          <div className="srcoll flex items-center justify-center" style={{ minHeight: "75vh" }}>
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
