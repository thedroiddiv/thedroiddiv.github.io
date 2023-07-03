import { ExperienceCard } from "./ExperienceCard"
import me from "../../assets/me.png"

export const Experience = () => {
    return <section className="p-8 md:py-32  bg-[#FDF8BB] dark:bg-[#252326] flex justify-center">
        <div className="max-w-screen-lg">
            <div className="flex flex-col md:flex-row pb-24 items-center">
                <div className="md:w-2/3">
                    <h1 className="text-6xl font-bold">About me.</h1>
                    <p className="mt-12 md:mr-16">Hello, I'm Divyansh, a passionate and self-driven Native Android Developer currently pursuing Bachelor of Technology in Electronics and Communication Engineering at IIIT Naya Raipur, India 🇮🇳. Along with my expertise in Android development, I actively contribute to open-source projects.</p>
                    <p className="mt-6 md:mr-16">Currently, I'm focused on building an awesome platform for rural employment in India at Karya Inc.</p>
                    <ul className="flex flex-row flex-wrap mt-12 gap-2 md:w-3/4">
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
                    <img className="rounded-3xl border-2 border-[#252326] dark:border-white" src={me} />
                </div>
            </div>

            <div className=" w-fit">
                <h3 className="text-3xl font-bold mb-16 relative
                md:after:absolute md:after:top-1/2 md:after:right-[-10rem]
                md:after:w-32 md:after:h-[2px]
                 md:after:bg-[#252326] md:after:dark:bg-white 
                ">My professional experience </h3>
            </div>

            <ExperienceCard
                organization="01. At Karya"
                title="I am currently working as an SDE at Karya Inc"
                desc="At Karya, I am working on the development of the Karya Mobile app where users can do dataset collection and labeling of images, text, audio, and video via a WhatsApp-like chat-based UI. Tasks include annotating, labeling, and classifying images; converting text-to-speech and speech-to-text; collecting the image, audio, and video dataset; etc via phone. "
                tech_stack={["Android", "Kotlin", "Jetpack Compose", "Dagger-Hilt", "AndroidX Libraries", "KoaJS", "PostgreSQL"]}
                duration={"October 2022 - Present"}
            />
            <br />
            <br />
            <ExperienceCard
                organization="01. At Google Summer of Code"
                title="Last summer, I worked as GSoC contributor at AnkiDroid"
                desc="During my Google Summer of Code journey, I worked on migrating the AnkiDroid android app codebase from AsyncTask(deprecated) to Kotlin Coroutines. My work was extensively around replacing the underlying architecture of Asynchronous operations to use the newer and better Kotlin Coroutines. I also wrote a bash script to automate the set up of the testing environment on Unix Environment, it proved to be a very useful tool for folks around the community as it was really hard for new contributors to set up."
                tech_stack={["Android", "Kotlin", "Coroutines", "AsyncTask", "XML", "Linux", "SQLite"]}
                duration={"October 2022 - Present"}
            />
        </div>
    </section>
}