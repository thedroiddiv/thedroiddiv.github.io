import { Project } from '../data/Project';
import Chip from './Chip';

type Props = {
  project: Project;
};
export const ProjectCard = ({ project }: Props) => {
  const { title, time, platform, desc, image, projectUrl } = project;
  return (
    <div className="w-96 rounded-lg bg-white/40 dark:bg-black/40 border border-green-600 dark:border-green-900">
      <img
        className="rounded-t-lg h-48 w-80 md:w-96 object-cover"
        src={image}
        alt="project"
      />
      <div className="p-4 h-64 overflow-scroll">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-sm">
          {time} | <span className="text-green-600">{platform}</span>
        </h4>
        <p className="text-light mt-6">{desc}</p>
      </div>
      <Chip className="m-4" href={projectUrl} text="Read More" />
    </div>
  );
};
