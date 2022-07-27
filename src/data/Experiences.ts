export type Experience = {
  thumbnail: string;
  title: string;
  duration: string;
  desc: string;
  url: string;
  organisation: string;
};

export const myExperiences: Experience[] = [
  {
    thumbnail: 'assets/gsoc.png',
    title: 'GSoC 2022 Contributor',
    duration: 'May 2022 - Present',
    desc: 'I am currently working as a Google Summer of Code contributor at AnkiDroid. My task is to migrate the codebase from AsyncTask (a deprecated api) to Kotlin Coroutines',
    organisation: 'AnkiDroid',
    url: 'https://github.com/AnkiDroid',
  },
  {
    thumbnail: 'assets/pull_request.svg',
    title: 'Open Source Contributor',
    duration: 'Feb 2022 - Present',
    desc: 'I stated my open-source contributor journey in February 2022. Click below to view my contributions.',
    organisation: 'Github',
    url: 'https://github.com/pulls?q=is%3Apr+author%3Adivyansh-dxn+archived%3Afalse+',
  },
  {
    thumbnail: 'assets/android_intern.svg',
    title: 'Android Intern',
    duration: 'Jan 2022 - Feb 2022',
    desc: 'As an Android Intern at cureya, I worked on their android app and developed a social media kind feature for the app.',
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
