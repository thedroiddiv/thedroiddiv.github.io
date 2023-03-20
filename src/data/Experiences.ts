export type Experience = {
  thumbnail: string;
  title: string;
  duration: string;
  desc: string[];
  url: string;
  organisation: string;

  about?: string;
};

export const myExperiences: Experience[] = [
  {
    thumbnail: 'assets/karya.svg',
    title: 'Android Intern',
    duration: 'Sept 2022 - Present',
    desc: [
      'Currently I am working on this project as an Intern through Karya and my contribution varies over a range of bug fixes, feature addition and migration to newer technologies',
    ],
    organisation: 'Karya',
    url: 'https://github.com/microsoft/rural-crowdsourcing-toolkit-client',
    about:
      "Karya is the world's first data cooperative to bring dignified, digital work to economically disadvantaged Indians, giving them a pathway out of poverty. As a worker-first organisation, we ensure that our tasks pay significantly higher wages than the minimum wage, offering individuals the opportunity to build their economic foundation in a flexible and novel way.",
  },
  {
    thumbnail: 'assets/gsoc.png',
    title: 'GSoC 2022 Contributor',
    duration: 'May 2022 - Sept 2022',
    desc: [
      'During summer 2022, I worked as a Google Summer of Code contributor at AnkiDroid. My project was to migrate the codebase from AsyncTask (a deprecated api) to Kotlin Coroutines',
    ],
    organisation: 'AnkiDroid',
    url: 'https://github.com/AnkiDroid',
  },
  {
    thumbnail: 'assets/android_intern.svg',
    title: 'Android Intern',
    duration: 'Jan 2022 - Feb 2022',
    desc: [
      'As an Android Intern at cureya, I worked on their android app and developed a social media kind feature for the app.',
    ],
    organisation: 'Cureya',
    url: 'https://drive.google.com/file/d/1lZEzYAxTtyCLEzFDdZUwI0gh_9t-YIiS/view',
  },
  // {
  //   thumbnail: 'assets/android_intern.svg',
  //   title: 'Android Intern',
  //   duration: 'Mar 2022 - May 2022',
  //   desc: 'Modified open source codebase and improved user experience by enhancing UI of app. Bridged the app to the open source app and enhanced the performance of the app. Provided a feature on the top for profile switching.\nTech Stack: Android, Kotlin, Java, RoomDb, HTML, CSS',
  //   organisation: 'Nestor Analytics',
  //   url: 'http://www.nestoranalytics.com/home.php',
  // },
];
