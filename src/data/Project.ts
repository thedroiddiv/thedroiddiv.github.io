export type Project = {
    title: string
    time: string
    platform: string
    desc: string
    image: string
}

export const myProjects : Project[] = [
    {
        title: "WallpaperX",
        time: "July, 2021",
        platform: "Android App",
        desc: "A simple wallpaper application. WallpaperX brings cool and fresh wallpapers just to you from unsplash.com. Set wallpapers for your home and lock screen, download and share.Topics",
        image: "https://raw.githubusercontent.com/divyansh-dxn/WallpaperX/main/assets/samples/preview_all.jpeg"
    },
    {
        title: "Notes",
        time: "July, 2021",
        platform: "Android App",
        desc: `About
        Notes gives you a quick and simple notepad editing experience when you write notes, memos, e-mails, messages, shopping lists and to-do lists.The app can work both offline as well as online, as the internet gets available to the device ,data gets synced to firestore. Users can login with different google accounts.`,
        image: "https://github.com/divyansh-dxn/Notes/raw/master/assets/samples/sample_sm.png"
    },
    {
        title: "Git Repos",
        time: "July, 2021",
        platform: "Android App",
        desc: `GitRepos allows you to quickly browse through different repositories hosted by different organisations on github. Read their readme file on the go and get insights`,
        image: "https://user-images.githubusercontent.com/69595691/166216882-6550cdf2-4488-4068-9409-d8fdd0b99fa9.jpeg"
    },
    {
        title: "Shoponn",
        time: "July, 2021",
        platform: "Full Stack MERN",
        desc: "A simple, full-stack and prototype online shopping website built on ExpressJS and ReactJS",
        image: "https://github.com/divyansh-dxn/Shoponn/raw/master/samples/sample.jpeg"
    }
]