import Chip from '../components/Chip'
import { skills } from '../data/models/skill'
import { motion } from 'framer-motion';


function Skills() {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{}}
            transition={{ duration: 0.3 }}
        >
            <div className="flex flex-wrap md:p-10 items-center justify-center ">
                {skills.map((skill, index) => (
                    <a className="transform hover:scale-110 duration-100  " key={index} href={skill.url} target="blank">
                        <Chip className="m-4 space-x-4 " >
                            <p className="text-xl bg-gradient-to-r hover:text-transparent bg-clip-text  from-pink-500 to-yellow-400">{skill.name}</p>
                            <skill.icon /></Chip>
                    </a>
                ))}
            </div>
        </motion.div>
    )
}

export default Skills
