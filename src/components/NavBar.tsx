import { ReactNode, useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Button } from 'react-scroll';
import { Link } from 'react-scroll';
import ThemeContext from '../theme/ThemeContext';
import { SocialHandles } from './SocialHandles';

interface Props {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: Props) => (
  <Link
    className={`block dark:hover:text-green-400 hover:text-green-600 transition cursor-pointer`}
    activeClass="active"
    smooth
    spy
    to={to}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!isVisible);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <nav
      className={`
        sticky top-0 z-40 w-full backdrop-blur transition-all md:transition-none ease-in-out p-4 flex
        supports-backdrop-blur:bg-white/95`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <div
        className={`md:hidden cursor-pointer`}
        onClick={(_e) => {
          toggleVisibility();
        }}
        id="menu-button"
      >
        {isVisible ? <AiOutlineClose size={24} /> : <HiMenu size={24} />}
      </div>

      <div
        className={`${
          isVisible ? 'h-48' : 'h-0'
        } md:h-6 overflow-hidden w-full md:flex flex-wrap md:justify-between justify-between px-8 transition-all md:transition-none ease-in-out`}
        id="menu"
      >
        <ul className="text-base md:flex gap-4 md:justify-between">
          <NavLink to={'home'}>HOME</NavLink>
          <NavLink to={'about'}>ABOUT</NavLink>
          <NavLink to={'skills'}>SKILLS</NavLink>
          <NavLink to={'projects'}>PROJECTS</NavLink>
          <NavLink to={'experiences'}>EXPERIENCES</NavLink>
          <NavLink to={'contact'}>CONTACT ME</NavLink>
        </ul>
        <SocialHandles />
      </div>
      <div
        className="cursor-pointer"
        onClick={(e) => {
          setDarkMode(!darkMode);
        }}
      >
        {' '}
        {!darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
      </div>
    </nav>
  );
};
