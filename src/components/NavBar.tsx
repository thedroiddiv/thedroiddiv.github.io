import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";


export const NavBar = () => {

    const [visibility, setVisibility] = useState("hidden")
    const toggleVisibility = () => { visibility ? setVisibility("") : setVisibility("hidden") }


    return (
        <nav className={`
        sticky top-0 z-40 w-full backdrop-blur flex-none transition-all ease-out duration-500 duration-500 p-4 md:p-0
        lg:z-50 supports-backdrop-blur:bg-white/95`}
            style={{ backdropFilter: "blur(20px)" }}
        >
            <div className="invisible"></div>
            <div className={`md:hidden`} onClick={_e => { toggleVisibility() }} id="menu-button" >
               {visibility==="hidden" ? <HiMenu/> : <AiOutlineClose/>}
            </div>


            <div className={`${visibility} w-full md:flex md:items-center md:w-auto`} id="menu">
                <ul className="text-base md:flex md:justify-between  duration-300 ease-out  md:pt-0">
                    <Link className={`md:m-4 my-2 block hover:text-green-400  transition`}
                        activeClass="active" smooth spy to="home">
                        HOME
                    </Link>
                    <Link className={`md:m-4 my-2 block hover:text-green-400  transition`}
                        activeClass="active" smooth spy to="about">
                        ABOUT
                    </Link><Link className={`md:m-4 my-2 block hover:text-green-400  transition`}
                        activeClass="active" smooth spy to="skills">
                        SKILLS
                    </Link><Link className={`md:m-4 my-2 block hover:text-green-400  transition`}
                        activeClass="active" smooth spy to="projects">
                        PROJECTS
                    </Link><Link className={`md:m-4 my-2 block hover:text-green-400  transition`}
                        activeClass="active" smooth spy to="contact">
                        CONTACT
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
