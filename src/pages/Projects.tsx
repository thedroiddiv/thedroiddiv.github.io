import Card from '../components/Card'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'


function Projects() {

    const p = [1, 5, 7, 8, 2, 8, 7, 7, 7, 7, 2, 5, 5]

    return (
        <motion.div
            initial={{ scaleX: 0, }}
            animate={{ scaleX: 1 }}
            exit={{}}
            transition={{ duration: 0.5 }}
        >

            <div className="p-2 grid md:grid-cols-2 lg:grid-cols-3 ">
                {
                    p.map((j, i) => (
                        <div className="p-5 my-2 mx-2 flex flex-col justify-center items-center border">
                            <h2 className="text-xl">Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum officiis a distinctio maxime recusandae ratione porro rerum libero adipisci?</p>
                        </div>
                    ))
                }

            </div>

        </motion.div>
    )
}

export default Projects
