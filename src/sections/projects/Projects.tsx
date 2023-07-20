import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="px-8 py-32 bg-[#A990D6] dark:bg-[#43335C] flex justify-center "
    >
      <div className="max-w-screen-lg">
        <h1 className="text-6xl font-bold">Projects.</h1>
        <div className="grid gap-6 md:grid-cols-3 mt-16">
          <ProjectCard
            title="WallpaperX: Unsplash powered wallpaper app"
            desc="A simple wallpaper application. WallpaperX brings cool and fresh wallpapers just to you from unsplash.com. Set wallpapers for your home and lock screen, download and share"
            tech_stack={[]}
            preview={[
              'Preview',
              'https://play.google.com/store/apps/details?id=com.dxn.wallpaperx.ui&pli=1',
            ]}
            github={['GitHub', 'https://github.com/thedroiddiv/WallpaperX']}
          />
          <ProjectCard
            title="RawAudioRecorder"
            desc="A lightweight audio recording library that records in .wav format"
            tech_stack={[]}
            preview={[
              'Preview',
              'https://github.com/thedroiddiv/RawAudioRecorder',
            ]}
            github={[
              'GitHub',
              'https://github.com/thedroiddiv/RawAudioRecorder',
            ]}
          />
          <ProjectCard
            title="Social-IIITNR: Social media for college"
            desc="Social-IIITNR is a social media platform geared towards solving these problems by connecting the members of the IIIT-NR family. It relies heavily on databases to store, filter search, and retrieve categorized information and provides well-structured interfaces in the form of a WebApp and Android App."
            tech_stack={[]}
            preview={[
              'Preview',
              'https://github.com/thedroiddiv/Social_IIITNR',
            ]}
            github={['GitHub', 'https://github.com/thedroiddiv/Social_IIITNR']}
          />
        </div>
      </div>
    </section>
  );
};
