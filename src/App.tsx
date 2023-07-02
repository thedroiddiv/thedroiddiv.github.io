import { Navbar } from "./sections/header/Header";
import { Home } from "./sections/home/Home";
import ThemeContext from "./theme/ThemeContext";
import useDarkMode from "./theme/useDarkMode";

function App() {

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkMode,
        setDarkMode: setDarkMode,
      }}
    >
      <main className="w-screen bg-[#F6F4F6] text-[#252326] dark:bg-[#252326] dark:text-[#F6F4F6]">
        <Navbar />
        <div className="w-screen md:px-32 flex flex-col items-center">
          <Home />
        </div>
      </main>
    </ThemeContext.Provider>

  )
}

export default App
