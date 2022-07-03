import React from 'react'
import { Section } from '../components/Section'

type Skill = {
    title?: string
    subtitle?: string
    desc?: string
    image?: string
}
type Props = {
    skill: Skill
}

const SkillCard = ({ skill }: Props) => {
    const { title, subtitle, desc, image } = skill
    return (
        <div className="flex flex-col items-center text-center border w-96 p-8">
            <img src={image} alt="" width={96} />
            <h3 className="text-2xl font-bold mt-4">{title}</h3>
            <h5 className="text-xl">{subtitle}</h5>
            <p>{desc}</p>
        </div>
    )
}

const fakeSkill: Skill = {
    title: "Android dev",
    subtitle: "",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, consequuntur.",
    image: "/skills/android.svg"
}

const skillList = [fakeSkill, fakeSkill, fakeSkill, fakeSkill, fakeSkill, fakeSkill]

const Skills = () => {
    return (
        <Section>
            <h3 className='text-center text-4xl font-bold'>MY <span className='text-green-600'>SKILLS</span></h3>
            <div className="flex flex-wrap justify-center gap-4 mt-24">
                {skillList.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </Section>
    )
}

export default Skills