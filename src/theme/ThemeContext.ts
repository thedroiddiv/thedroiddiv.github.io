import React, { createContext } from 'react';
export interface ContextValue {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const ThemeContext = createContext<ContextValue>({
  darkMode: false,
  setDarkMode: () => {},
});

export default ThemeContext;