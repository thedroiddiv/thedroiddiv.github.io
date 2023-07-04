import { AboutMe } from './sections/about/Aboout';
import { Experience } from './sections/experience/Experience';
import Navbar from './sections/header/NavBar';
import { Home } from './sections/home/Home';
import ThemeContext from './theme/ThemeContext';
import useDarkMode from './theme/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkMode,
        setDarkMode: setDarkMode,
      }}
    >
      <main className="w-screen transition-colors bg-[#F6F4F6] text-[#252326] dark:bg-[#252326] dark:text-[#F6F4F6] font-jetbrains-mono">
        <Navbar />
        <Home />
        <AboutMe />
        <Experience />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
