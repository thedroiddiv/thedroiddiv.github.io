class Project {
  title: string;
  desc: string;
  link: string;
  image: string;
  constructor(title: string, desc: string, link: string, image: string) {
    this.title = title;
    this.desc = desc;
    this.link = link;
    this.image = image;
  }
}

export const projectList: Project[] = [
  new Project("AnkiDroid", "Open Source Contrinutor at AnkiDroid",
  "https://github.com/ankidroid", 
  `${process.env.PUBLIC_URL}/projects/ankidroid.png`),

  new Project("WallpaperX", "An android wallpaper application", 
  "https://github.com/divyansh-dxn/wallpaperx", 
  `${process.env.PUBLIC_URL}/projects/wallpaperx.png`),

  new Project("Notes", `A simple and awesome notepad app. It gives you a quick and
   simple notepad editing experience when you write notes, memos, e-mails, messages, shopping lists and to-do lists.`,
   "https://github.com/divyansh-dxn/notes", 
  `${process.env.PUBLIC_URL}/projects/notes.png`),

  new Project("MLKit-Analyzer", "A simple application based on Google MLKit", 
  "https://github.com/divyansh-dxn/mlkit-analyzer", 
  `${process.env.PUBLIC_URL}/projects/mlkit.png`),

  new Project("Shoponn", "A simple online shopping website with different versions for users and admin", "https://github.com/divyansh-dxn/shoponn", 
  `${process.env.PUBLIC_URL}/projects/shoponn.png`),
]


export default Project;
