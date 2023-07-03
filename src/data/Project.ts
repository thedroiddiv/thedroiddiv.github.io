export type Project = {
  title: string;
  time: string;
  platform: string;
  desc: string;
  image: string;
  projectUrl: string;
};

export const myProjects: Project[] = [
  {
    title: 'WallpaperX',
    time: 'Oct-Dec, 2021',
    platform: 'Android App',
    desc: 'A simple wallpaper application. WallpaperX brings cool and fresh wallpapers just to you from unsplash.com. Set wallpapers for your home and lock screen, download and share.Topics',
    image:
      'https://raw.githubusercontent.com/divyansh-dxn/WallpaperX/master/assets/samples/preview_all.jpeg',
    projectUrl: 'https://github.com/divyansh-dxn/WallpaperX',
  },
  {
    title: 'Notes',
    time: 'Dec, 2021',
    platform: 'Android App',
    desc: `About
        Notes gives you a quick and simple notepad editing experience when you write notes, memos, e-mails, messages, shopping lists and to-do lists.The app can work both offline as well as online, as the internet gets available to the device ,data gets synced to firestore. Users can login with different google accounts.`,
    image:
      'https://github.com/divyansh-dxn/Notes/raw/master/assets/samples/sample_sm.png',
    projectUrl: 'https://github.com/divyansh-dxn/Notes',
  },
  {
    title: 'Git Repos',
    time: 'July, 2021',
    platform: 'Android App',
    desc: `GitRepos allows you to quickly browse through different repositories hosted by different organisations on github. Read their readme file on the go and get insights`,
    image:
      'https://user-images.githubusercontent.com/69595691/166216882-6550cdf2-4488-4068-9409-d8fdd0b99fa9.jpeg',
    projectUrl: 'https://github.com/divyansh-dxn/GitRepos',
  },
  {
    title: 'Shoponn',
    time: 'September, 2021',
    platform: 'Full Stack MERN',
    desc: 'A simple, full-stack and prototype online shopping website built on ExpressJS and ReactJS',
    image: 'projects/shoponn.png',
    projectUrl: 'https://github.com/divyansh-dxn/shoponn',
  },
  {
    title: 'Social IIITNR',
    time: 'Jan-Apr, 2022',
    platform: 'Full Stack MERN',
    desc: 'Social-IIITNR (InsCon) is a social media platform geared towards solving these problems by connecting the members of the IIIT-NR family. It relies heavily on databases to store, filter search, and retrieve categorized information and provides well-structured interfaces in the form of a WebApp and Android App.',
    image: 'projects/social_iiitnr.png',
    projectUrl: 'https://github.com/divyansh-dxn/SocialMedia_IIITNayaRaipur',
  },
];
