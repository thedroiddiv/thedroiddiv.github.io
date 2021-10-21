import NavLink from "./NavLink";
import { Link, withRouter } from "react-router-dom";
import { FaHamburger, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { History } from "history";

interface Props {
  history: History;
}
function Navbar({ history }: Props) {
  const currentTab = (path: String) => {
    if (history.location.pathname === path) {
      return " bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400";
    }
  };

  return (
    <header className={`flex justify-between items-center `}>
      <Link
        to={`/`}
        className="text-2xl md:text-4xl font-Poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  cursor-pointer"
      >
        div.dxn
      </Link>
      <nav>
        <ul className="md:flex hidden space-x-4 items-center justify-center">
          <NavLink to="/" className={currentTab("/")}>
            About
          </NavLink>
          <NavLink to="/skills" className={currentTab("/skills")}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={currentTab("/projects")}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={currentTab("/contact")}>
            Contact Me
          </NavLink>
        </ul>
        <div className="flex md:hidden flex-1 justify-end">
          <FaHamburger />
        </div>
      </nav>

      <div className="md:flex hidden space-x-3 items-center justify-center">
        <a target="blank" href="https://www.github.com/divyansh-dxn">
          <FaGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/divyansh-kushwaha-b44004202/"
        >
          <FaLinkedin />
        </a>
        <a target="blank" href="https://www.instagram.com/divyansh.dxn">
          <FaInstagram />
        </a>
      </div>
    </header>
  );
}

export default withRouter(Navbar);
