import { ExperienceCard } from "./ExperienceCard"
import me from "../../assets/me.png"

export const Experience = () => {
    return <section className="p-8 md:p-32 bg-[#FDF8BB] dark:bg-[#252326] flex justify-center">

        <div className="max-w-screen-lg">

            <div className="flex flex-col md:flex-row pb-24 items-center">
                <div className="md:w-2/3">
                    <h1 className="text-6xl font-bold">About me.</h1>
                    <p className="mt-12 md:mr-16">The first time I got asked to speak at a conference, my gut reaction was"heck no. That sounds terrifying".</p>
                    <p className="mt-6 md:mr-16">So naturally I said yes. Since then I've spoken at conferences and meet-ups all over the world. It still terrifies me.</p>
                    <ul className="flex flex-row flex-wrap mt-12 gap-2 w-3/4">
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Android</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Kotlin</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Jetpack Compose</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Room DB</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Retofit</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">SQLite</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Dagger-Hilt</li>
                        <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">Android</li>
                    </ul>
                </div>
                <div className="mt-16 md:mt-0 md:w-1/3 rounded-lg">
                    <p className="absolute translate-x-12 -translate-y-6 bg-white px-4 py-2 border-[#8BDAC0] text-[#252326] border-2 rounded-lg">Yupp! it's me 🙃</p>
                    <img className="rounded-3xl border-2 border-black dark:border-white" src={me} />
                </div>
            </div>

            <div className=" w-fit">
                <h3 className="text-3xl font-bold mb-16 dash ">My professional experience </h3>
            </div>

            <ExperienceCard />
            <br />
            <br />
            <ExperienceCard />
        </div>



    </section>
}