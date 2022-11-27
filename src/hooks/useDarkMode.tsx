import { useEffect, useState } from "react";

const useDarkMode = (): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] => {
    const defaultTheme =
      localStorage.getItem('color-theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [darkMode, setDarkMode] = useState(defaultTheme);
  
    useEffect(() => {
      if (darkMode) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }, [darkMode]);
  
    return [darkMode, setDarkMode];
  };
  
  export default useDarkMode;
  