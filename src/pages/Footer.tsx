import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-screen flex flex-col text-center items-center  text-gray-400 iiems-center py-24">
        <h2 className="text-xl">Designed and Developed by</h2>
        {/* <hr className='w-96' /> */}
        <p className="text-block mt-">DIVYANSH KUSHWAHA</p>
        <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/divyansh.dxn/" rel="noreferrer" target="_blank"><FaInstagram /></a>
              <a href="https://www.twitter.com/divyanshdxn/" rel="noreferrer" target="_blank"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/divyanshdxn/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
              <a href="https://www.github.com/divyansh-dxn/" rel="noreferrer" target="_blank"><FaGithub /></a>
        </div>
    </div>
  )
}

export default Footer