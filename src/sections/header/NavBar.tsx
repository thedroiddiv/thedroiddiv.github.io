import { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import { ThemeSwitch } from './ToggleButton';
import { NavItem } from './NavItem';
import { DivyanshSVG } from './HeroImage';

export const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="absolute z-20 top-0 bg-transparent p-8 w-full">
      <div className="flex justify-between items-center">
        <a href="#">
          <DivyanshSVG />
        </a>
        <nav className="flex">
          <ul className="hidden md:flex mr-16">
            <NavItem>me</NavItem>
            <NavItem>experience</NavItem>
            <NavItem>projects</NavItem>
            <NavItem>github</NavItem>
          </ul>
          <ThemeSwitch isDarkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
