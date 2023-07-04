import React from 'react';

interface Props {
  title: string;
  desc: string;
  tech_stack: string[];
  preview: string[]; // [name, url]
  github: string[]; // [name, url]
}

export const ProjectCard: React.FC<Props> = ({
  title,
  desc,
  preview,
  github,
}) => {
  return (
    <div className="h-min w-full rounded-2xl border-2 border-[#252326] dark:border-white bg-white dark:bg-transparent">
      <div className="flex flex-row gap-x-2 p-2">
        <div className="w-4 h-4 rounded-full bg-[#252326] dark:bg-white"></div>
        <div className="w-4 h-4 rounded-full bg-[#252326] dark:bg-white"></div>
        <div className="w-4 h-4 rounded-full bg-[#252326] dark:bg-white"></div>
      </div>

      <hr className="bg-white border border-[#252326] dark:border-white" />
      <div className="px-4 py-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 font-light leading-normal">{desc}</p>
        <div className="flex flex-row justify-between mt-6">
          <a
            href={preview[1]}
            target="_blank"
            className="text-xl font-semibold"
          >
            {preview[0]}
          </a>
          <a href={github[1]} target="_blank" className="text-xl font-semibold">
            {github[0]}
          </a>
        </div>
      </div>
    </div>
  );
};
