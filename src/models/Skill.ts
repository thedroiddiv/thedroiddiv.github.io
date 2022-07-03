export type Skill = {
    title?: string
    subtitle?: string
    desc?: string
    image?: string
    tech?:string[]
}

export const mySkills: Skill[] = [
    {
        title: "Android Development",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, consequuntur.",
        image: "assets/android.svg",
        tech : ["Java","Kotlin","XML","Firebase","Android-Jetpack","RoomDB","Retrofit","Dagger-Hilt"]
    },
    {
        title: "Frontend Development",
        subtitle: "",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, consequuntur.",
        image: "assets/frontend.svg",
        tech:["JavaScript", "HTML", "CSS", "TypeScript", "ReactJS", "NodeJS"]
    },
    {
        title: "Backend Development",
        subtitle: "",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, consequuntur.",
        image: "assets/backend.svg",
        tech:["TypeScript", "NodeJS", "ExpressJS","MongoDB","PostgreSQL","Firebase","OAuth"]
    }
]