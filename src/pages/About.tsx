function About() {
    return (
        <div className="flex flex-col-reverse md:flex-row mt-11 md:space-x-20">

        <div className="flex-1 flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-center md:text-left my-10">Hi! I am <span
              className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Divyansh. </span>
            I am an android developer</h1>
          <p className=" my-3 text-justify md:text-left">Lorem psum dolor sit amet, consectetur adipisicing elit. Aliquid,
            deleniti animi illum doloribus iure vero
            ab quasi consectetur possimus magni minus. Excepturi, reprehenderit aliquid? Repellendus saepe ipsa aliquid
            deserunt voluptates?</p>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <img className=" w-48 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQGAhLV72q4ppw/profile-displayphoto-shrink_800_800/0/1634028591265?e=1640217600&v=beta&t=QTx4BldpsMEimIMahQit5l87Pc7cRzrp0igATM3nEXQ" alt=""/>
        </div>

      </div>
    )
}

export default About
