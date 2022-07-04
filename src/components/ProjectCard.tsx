import { Project } from "../data/Project"
import Chip from "./Chip"

type Props = {
    project: Project
}
export const ProjectCard = ({ project }: Props) => {
    const { title, time, platform , desc, image } = project
    return (
        <div className="w-96 rounded-lg shadow shadow-green-200/40">
            <img className="rounded-t-lg" src={image} alt="project" />
            <div className="p-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <h4 className="text-sm">{time} | <span className="text-green-600">{platform}</span></h4>
                <p className="text-light mt-6">{desc}</p>
                <Chip text="Read More..."/>
            </div>
        </div>
    )
}
