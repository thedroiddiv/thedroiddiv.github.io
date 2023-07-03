import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex flex-col text-center items-center text-gray-400 iiems-center py-24">
      <h2 className="italic">Designed and Developed by</h2>
      {/* <hr className='w-96' /> */}
      <p className="text-block text-3xl mt-">Divyansh Kushwaha</p>
      <br />
      <a
        href="https://github.com/divyanshdxn/divyanshdxn.github.io"
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 items-center hover:text-green-400"
      >
        Source Code
        <FaGithub />
      </a>
    </div>
  );
}

export default Footer;
