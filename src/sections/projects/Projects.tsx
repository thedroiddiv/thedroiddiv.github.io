import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return <div className="p-8 md:p-32  bg-[#A990D6] dark:bg-[#43335C] flex justify-center ">
        <div className="max-w-screen-lg">
            <h1 className="text-6xl font-bold">Projects.</h1>
            <div className="grid gap-6 md:grid-cols-3 mt-16">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    </div>
}