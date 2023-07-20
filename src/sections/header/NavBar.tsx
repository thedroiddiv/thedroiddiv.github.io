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
            <NavItem to="about">me</NavItem>
            <NavItem to="experience">experience</NavItem>
            <NavItem to="projects">projects</NavItem>
            <NavItem to="footer">contact</NavItem>
          </ul>
          <ThemeSwitch isDarkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
