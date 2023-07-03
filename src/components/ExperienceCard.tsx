import { Experience } from '../data/Experiences';
import Chip from './Chip';

type Props = {
  experience: Experience;
};
export const ExperienceCard = ({ experience }: Props) => {
  const { thumbnail, title, duration, desc, url, organisation } = experience;
  return (
    <div className="w-80 md:w-96 rounded-lg bg-white/40 dark:bg-black/40 border border-green-600 dark:border-green-900">
      <img className="rounded-t-lg h-48 w-80 md:w-96 object-cover" src={thumbnail} alt="project" />
      <div className="p-4 h-56 overflow-scroll">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-sm">
          {`${duration} | `}
          <span className="text-green-500 font-bold">{organisation}</span>
        </h4>
        <p className="text-light mt-6">{desc}</p>
      </div>
      <Chip className='m-4' href={url} text="Read More" />
    </div>
  );
};
