import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-screen flex flex-col text-center items-center  text-gray-400 iiems-center py-24">
        <h2 className="text-xl">Designed and Developed by</h2>
        {/* <hr className='w-96' /> */}
        <p className="text-block mt-">DIVYANSH KUSHWAHA</p>
        <div className="mt-4 flex gap-4">
              <a href=""><FaInstagram /></a>
              <a href=""><FaTwitter /></a>
              <a href=""><FaLinkedin /></a>
              <a href=""><FaGithub /></a>

        </div>

    </div>
  )
}

export default Footer