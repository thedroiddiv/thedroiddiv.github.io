import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div
      className="bg-black text-white bg-fixed"
      style={{ backgroundImage: 'url(assets/bg_android.png)' }}
    >
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
