import { ReactNode } from 'react';

interface Props {
  organization: ReactNode;
  title: ReactNode;
  desc: string;
  tech_stack: string[];
  duration: string;
  children?: ReactNode;
}

export const ExperienceCard: React.FC<Props> = ({
  organization,
  title,
  desc,
  tech_stack,
  duration,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 ">
      <div className="md:w-1/5 font-pacifico text-xl">{organization}</div>
      <div className="md:w-4/5">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="mt-8 font-light leading-normal">{desc}</div>
        <ul className="flex flex-row flex-wrap gap-2 mt-4">
          {tech_stack.map((t, i) => (
            <li
              key={i}
              className="px-4 py-2 rounded-lg border border-black dark:border-white"
            >
              {t}
            </li>
          ))}
        </ul>
        <h4 className="mt-5 font-semibold text-xl">{duration}</h4>
        {children}
      </div>
    </div>
  );
};
