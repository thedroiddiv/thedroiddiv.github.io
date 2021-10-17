import React from 'react'
import Chip from '../components/Chip'
import { skills } from '../data/models/skill'

function Skills() {
    return (
        <div className="flex flex-wrap p-10 items-center justify-center">
            {skills.map(skill => (
                <a href={skill.url} target="blank">
                    <Chip className="m-4 space-x-4" >
                        <p className="text-xl bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">{skill.name}</p>
                        <skill.icon  /></Chip>
                </a>
            ))}
        </div>
    )
}

export default Skills
