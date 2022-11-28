import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { NavBar } from './components/NavBar';
import Experiences from './pages/Experiences';
import useDarkMode from './hooks/useDarkMode';
import ThemeContext from './theme/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeContext.Provider value={
      {
        darkMode: darkMode,
        setDarkMode: setDarkMode
      }
    }>
      <div
        className="dark:text-white transition-all bg-fixed bg-[url(assets/bg_android_light.png)] dark:bg-[url(assets/bg_android.png)]"
      >
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
