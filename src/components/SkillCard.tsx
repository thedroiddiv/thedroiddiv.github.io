import { Skill } from '../data/Skill';
import Chip from './Chip';

type Props = {
  skill: Skill;
};
export const SkillCard = ({ skill }: Props) => {
  const { title, subtitle, desc, image } = skill;
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg 
        shadow-lg hover:shadow-green-400/100 text-center border border-green-900 w-96 p-8 transition-shadow duration-200"
    >
      {/* <div className="w-32 h-32"> */}
      <img src={image} alt={title} width="144" />
      {/* </div> */}
      <h3 className="text-2xl font-bold mt-12">{title}</h3>
      <h5 className="text-xl">{subtitle}</h5>
      <p>{desc}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {skill.tech?.map((t, i) => (
          <Chip className='mt-4' key={i} text={t} />
        ))}
      </div>
    </div>
  );
};
