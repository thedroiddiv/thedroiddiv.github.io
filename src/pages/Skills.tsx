import { Section } from '../components/Section'
import { SkillCard } from '../components/SkillCard'
import { mySkills } from '../models/Skill'

const Skills = () => {
    return (
        <Section title='MY 💪🏻 SKILLS'>
            <div className="flex flex-wrap justify-center gap-4 mt-24">
                {mySkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </Section>
    )
}

export default Skills