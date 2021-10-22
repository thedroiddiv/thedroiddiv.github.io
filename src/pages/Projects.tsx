import { motion } from "framer-motion";
import { projects } from "../data/models/projects";

function Projects() {
  const p = [1, 5, 7, 8, 2, 8, 7, 7, 7];

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{}}
      transition={{ duration: 0.3 }}
    >
      <div className="p-2 grid md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project, i) => (
          <a key={i} target="blank" href={project.link}>
            <div className="my-2 mx-2 rounded-md overflow-hidden bg-black bg-opacity-20">
              <div className="flip-card w-60 h-60">
                <div className="flip  w-full h-full relative ">
                  <div className="front absolute w-full h-full flex flex-col justify-center items-center text-center">
                    <h1 className="m-2 text-xl">{project.title}</h1>
                    <p className="m-2 text-sm">{project.desc}</p>
                  </div>
                  <div className="back absolute h-full w-full  text-white">
                    <img
                      src={project.image}
                      alt="project thumbnail"
                      className="object-cover w-full h-full "
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
