import { Experience } from '../data/Experiences';
import Chip from './Chip';

type Props = {
  experience: Experience;
};
export const ExperienceCard = ({ experience }: Props) => {
  const { thumbnail, title, duration, desc, url, organisation } = experience;
  return (
    <div className="w-96 rounded-lg shadow shadow-green-200/40">
      <img className="rounded-t-lg" src={thumbnail} alt="project" />
      <div className="p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-sm">
          {`${duration} | `}
          <span className="text-green-500 font-bold">{organisation}</span>
        </h4>
        <p className="text-light mt-6">{desc}</p>
        <Chip href={url} text="Read More..." />
      </div>
    </div>
  );
};
