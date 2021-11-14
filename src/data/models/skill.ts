import { FaHtml5,FaJava,FaReact,FaNodeJs } from 'react-icons/fa'
import {SiJavascript,SiTypescript,SiCss3,SiExpress ,SiKotlin,SiMongodb,SiFirebase,SiGoland} from 'react-icons/si'
import {AiFillAndroid} from 'react-icons/ai'
// import {
//     QueryDocumentSnapshot,
//     SnapshotOptions,
//   } from "@firebase/firestore";

export interface Skill {
    name: string;
    url: string;
    icon: any;
}

// class Skill {
//     name: string;
//     url: string;
//     icon: any;
//     constructor(name:string,url:string, icon:string)
//      ----> icon???? it's a problem, figured it out?, text me
// }
// const skillConverter = {
//     toFirestore: (project: Skill) => {
//       return {
//         name: project.name,
//         url: project.url,
//         icon: project.icon,
//       };
//     },
//     fromFirestore: (
//       snapshot: QueryDocumentSnapshot,
//       options: SnapshotOptions
//     ) => {
//       const data = snapshot.data(options);
//       return { 
//         name: data.name,
//         url: data.url,
//         icon: data.icon
//        };
//     },
//   };

export const skills: Skill[] = [
    { name: "Android", url: "https://en.wikipedia.org/wiki/Android_(operating_system)", icon: AiFillAndroid },
    { name: "Kotlin", url: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)", icon: SiKotlin },
    { name: "Firebase", url: "https://en.wikipedia.org/wiki/Firebase", icon: SiFirebase },
    { name: "Java", url: "https://en.wikipedia.org/wiki/Java_(programming_language)", icon: FaJava },
    { name: "GoLang", url: "https://en.wikipedia.org/wiki/Go_(programming_language)", icon: SiGoland },
    { name: "HTML", url: "https://en.wikipedia.org/wiki/HTML", icon: FaHtml5 },
    { name: "CSS", url: "https://en.wikipedia.org/wiki/CSS", icon: SiCss3 },
    { name: "JavaScript", url: "https://en.wikipedia.org/wiki/JavaScript", icon: SiJavascript },
    { name: "TypeScript", url: "https://en.wikipedia.org/wiki/TypeScript", icon: SiTypescript },
    { name: "ReactJS", url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)", icon: FaReact },
    { name: "NodeJS", url: "https://en.wikipedia.org/wiki/Node.js", icon: FaNodeJs },
    { name: "ExpressJS", url: "https://en.wikipedia.org/wiki/Express.js", icon: SiExpress },
    { name: "MongoDB", url: "https://en.wikipedia.org/wiki/MongoDB", icon: SiMongodb },
]