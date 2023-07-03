import { ExperienceCard } from "./ExperienceCard"
import me from "../../assets/me.png"

export const Experience = () => {
    return <div className="p-8 md:p-32 bg-[#FDF8BB] dark:bg-[#252326] ">

        <div className="flex flex-col md:flex-row pb-24">
            <div className="md:w-2/3">
                <h1 className="text-6xl font-bold">Experience.</h1>
                <p className="mt-12 md:mr-16">The first time I got asked to speak at a conference, my gut reaction was"heck no. That sounds terrifying".</p>
                <p className="mt-6 md:mr-16">So naturally I said yes. Since then I've spoken at conferences and meet-ups all over the world. It still terrifies me.</p>

            </div>
            <div className="mt-16 md:mt-0 md:w-1/3 rounded-lg">
                <p className="absolute translate-x-12 -translate-y-6 bg-white px-4 py-2 border-black text-[#252326] border-2 rounded-lg">Yupp! it's me 🙃</p>

                <img className="rounded-lg border-2 border-black" src={me}>
                </img>
            </div>

        </div>


        <ExperienceCard/>
        <br />
        <br />
        <ExperienceCard/>

    </div>
}