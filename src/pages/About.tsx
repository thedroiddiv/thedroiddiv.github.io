import { motion } from 'framer-motion';


function About() {

  const profilePic = process.env.PUBLIC_URL + "/imgme.jpg"

  return (
    <motion.div
    initial={{ scaleX: 0, }}
    animate={{ scaleX: 1 }}
    exit={{ }}
    transition={{ duration: 0.5 }}
    >
      <div className="flex md:flex-row items-center justify-evenly flex-col-reverse  h-5/6 ">

        <div className="md:w-3/5">
          <h1 className="text-3xl font-medium text-center md:text-left my-10">Hello there! <br /> I am <span
            className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Divyansh</span>, proudly an android developer.</h1>
          <p className=" my-3 text-justify md:text-left">Lorem psum dolor sit amet, consectetur adipisicing elit. Aliquid,
            deleniti animi illum doloribus iure vero
            ab quasi consectetur possimus magni minus. Excepturi, reprehenderit aliquid? Repellendus saepe ipsa aliquid
            deserunt voluptates?</p>
        </div>

        <div className="flex justify-center items-center">
          <img className=" rounded-full w-32 md:w-48" src={profilePic} alt="profile" />
        </div>

      </div>
    </motion.div>
  )
}

export default About
