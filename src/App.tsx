import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  const bgImg = ((Date.now() & 1) != 1) ? "/bgblue.jpg" : "/bgblue.jpg"
  console.log(bgImg);

  return (
    <div className="min-h-screen p-10 sm:p-10 md:p-20 lg:p-20 flex flex-col justify-center items-center bg-fixed bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}>

      <div className="p-10 sm:p-10 bg-fixed bg-black text-white rounded-3xl 
        bg-clip-padding bg-opacity-20 shadow-md " style={{ backdropFilter: "blur(20px)", minHeight: "70vh", minWidth: "100%" }}>

        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Projects} />
          </Switch>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
