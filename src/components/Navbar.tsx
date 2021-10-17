import NavLink from './NavLink'
import {withRouter} from 'react-router-dom'
import { FaHamburger } from 'react-icons/fa'
import { History } from 'history';

interface Props {
    history: History
};
function Navbar({ history }: Props) {

    const currentTab = (path: String) => {
        if (history.location.pathname === path) {
            return "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400"
        }
    }

    return (
        <header className="flex justify-between">
            <h1
                className="text-4xl font-Poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  cursor-pointer">
                div.dxn</h1>
            <nav>
                <ul className="md:flex hidden space-x-4 items-center">
                    <NavLink to="/" className={currentTab("/")} >About</NavLink>
                    <NavLink to="/skills" className={currentTab("/skills")} >Skills</NavLink>
                    <NavLink to="/projects" className={currentTab("/projects")} >Projects</NavLink>
                    <NavLink to="/contact" className={currentTab("/contact")} >Contact Me</NavLink>
                </ul>
                <div className="flex md:hidden flex-1 justify-end">
                    <FaHamburger size="30" />
                </div>
            </nav>
        </header>
    )
}

export default withRouter(Navbar)
