import React from 'react';
import { myProjects } from '../data/Project';

export const Projects = () => {
  return (
    <section
      className={`p-8 md:p-16 flex flex-col gap-16 `}
    >
      {/*Title section*/}
      <div className={`flex flex-wrap gap-4 items-center`}>
        <p className={`text-3xl font-semibold`}>
          <span className={`text-green-300`}></span> Some projects 🪲I've
          built !
        </p>
        <div className={`h-0.5 w-48 bg-slate-600 rounded-lg`} />
      </div>

      {/* All projects list */}
      <div className={`flex gap-4 flex-row flex-wrap `}>

        {myProjects.map((project, idx) => {
          return (
            /**
             * Single prject card
             */
            <div
              key={idx}
              className={`p-4 relative md:p-8 lg:p-16 flex flex-col bg-zinc-900 rounded-3xl md:rounded-[48px] ${
                idx % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >

              <img
                src={project.image}
                className={`w-1/2 h-full object-cover transition rounded-[48px]
                hidden sm:block
                sm:brightness-50 
                sm:hover:brightness-75 
                sm:hover:scale-110 
                sm:hover:z-10 
                sm:grayscale 
                sm:hover:grayscale-0 
                sm:hover:shadow-2xl
                sm:hover:shadow-amber-500
               `
              }
              />

              <div
                className={`flex flex-col ${
                  !(idx % 2 == 0) && 'items-end'
                } gap-4`}
              >
                <p className={`text-2xl font-semibold text-amber-500`}>
                  {project.title}
                </p>
                <div
                  className={`${
                    !(idx % 2 == 0) && 'text-right'
                  } shadow shadow-zinc-900/10  bg-zinc-950 p-8 rounded-[48px] relative text-gray-400 font-light ${
                    !(idx % 2 == 0) ? 'sm:-ml-16' : 'sm:-mr-16'
                  }`}
                >
                  {project.desc}
                  <p className={`text-sm font-bold text-gray-300 mt-4`}>Android Retrofit Jetpack compose RoomDB</p>

                  <div className={`flex flex-row gap-4`}>
                    {/*<MyLink type={'github'} href={project.projectUrl} />*/}
                    {/*<MyLink type={'github'} href={project.projectUrl} />*/}
                    {/*<MyLink type={'github'} href={project.projectUrl} />*/}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>


    </section>
  );
};