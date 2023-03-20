export const About = () => {
  return (
    <section id="about" className="bg-zinc-950 p-6 md:p-32">
      <div className="flex flex flex-col md:flex-row md:gap-12 items-center">
        <div className="md:w-1/3 flex flex-col items-center gap-12">
          <img src="assets/me.png" className="w-64 rounded-full" alt="" />
          <p className="text-2xl invisible md:visible font-semibild">
            Divyansh Kushwaha
          </p>
        </div>
        <div className="md:w-2/3 flex flex-col gap-6 md:p-12">
          <p className="text-4xl font-bold text-center md:text-left">
            About Me
          </p>
          <p className="text-gray-400 text-center md:text-left">
            Hello, I'm Divyansh, a passionate and self-driven Native Android
            Developer currently pursuing Bachelor of Technology in Electronics
            and Communication Engineering at IIIT Naya Raipur. Along with my
            expertise in Android development, I actively contribute to
            open-source projects, and I am always exploring new technologies to
            expand my skill set.
          </p>
          <p className="text-gray-400 text-center md:text-left">
            As a dedicated and driven individual, I am committed to developing
            high-quality projects, and I am constantly seeking new ways to
            improve my skills and knowledge. I also love creating beautiful and
            functional app and website mockups on Figma. With a positive
            attitude and a willingness to learn, I am confident that I can
            tackle any challenge that comes my way.
          </p>
        </div>
      </div>
    </section>
  );
};
