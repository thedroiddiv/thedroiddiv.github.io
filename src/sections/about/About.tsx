import me from '../../assets/me.png';

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="px-8 py-32 bg-[#FDF8BB] dark:bg-[#252326] flex flex-col md:flex-row justify-center"
    >
      <div className="max-w-screen-lg flex flex-col md:flex-row items-center self-center	">
        <div className="md:w-2/3">
          <h1 className="text-6xl font-bold">About me.</h1>
          <p className="mt-12 md:mr-16">
            Hi, I'm Divyansh — a passionate Android Engineer with 3+ years of 
            experience building scalable mobile apps using Jetpack Compose, 
            Kotlin, and modern Android tools. I currently lead the Android team 
            at Karya, where we're building inclusive, low-resource technology 
            to support rural employment across India 🇮🇳. I hold a B.Tech in 
            Electronics and Communication Engineering from IIIT Naya Raipur. 
            <br />
            <br />
            Outside of work, I actively contribute to open-source projects 
            and focus on creating accessible, high-performance tools that 
            make a real-world impact.
          </p>
          <ul className="flex flex-row flex-wrap mt-12 gap-2 md:w-3/4">
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Android
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Kotlin
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Jetpack Compose
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Room DB
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Retofit
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              SQLite
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Dagger-Hilt
            </li>
            <li className="px-4 py-2 bg-[#8BDAC0] dark:bg-[#6B375D] border-2 rounded-3xl border-black dark:border-white">
              Android
            </li>
          </ul>
        </div>
        <div className="mt-16 md:mt-0 md:w-1/3 rounded-lg">
          <p className="absolute translate-x-12 -translate-y-6 bg-white px-4 py-2 border-[#8BDAC0] text-[#252326] border-2 rounded-lg">
            Yupp! it's me 🙃
          </p>
          <img
            className="rounded-3xl border-2 border-[#252326] dark:border-white"
            src={me}
          />
        </div>
      </div>
    </section>
  );
};
