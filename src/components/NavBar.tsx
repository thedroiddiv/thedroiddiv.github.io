import { ReactNode, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-scroll';

interface Props {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: Props) => (
  <Link
    className={`md:m-4 my-2 block hover:text-green-400  transition`}
    activeClass="active"
    smooth
    spy
    to={to}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const [visibility, setVisibility] = useState('hidden');
  const toggleVisibility = () => {
    visibility ? setVisibility('') : setVisibility('hidden');
  };

  return (
    <nav
      className={`
        sticky top-0 z-40 w-full backdrop-blur flex-none transition-all ease-out duration-500 duration-500 p-4 md:p-0
        lg:z-50 supports-backdrop-blur:bg-white/95`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <div className="invisible"></div>
      <div
        className={`md:hidden`}
        onClick={(_e) => {
          toggleVisibility();
        }}
        id="menu-button"
      >
        {visibility === 'hidden' ? <HiMenu /> : <AiOutlineClose />}
      </div>

      <div
        className={`${visibility} w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul className="text-base md:flex md:justify-between  duration-300 ease-out  md:pt-0">
          <NavLink to={'home'}>HOME</NavLink>
          <NavLink to={'about'}>ABOUT</NavLink>
          <NavLink to={'skills'}>SKILLS</NavLink>
          <NavLink to={'projects'}>PROJECTS</NavLink>
          <NavLink to={'experiences'}>EXPERIENCES</NavLink>
          <NavLink to={'contact'}>CONTACT ME</NavLink>
        </ul>
      </div>
    </nav>
  );
};
