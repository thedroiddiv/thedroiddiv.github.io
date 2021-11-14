import {
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "@firebase/firestore";

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

// Firestore data converter
const projectConverter = {
  toFirestore: (project: Project) => {
    return {
      title: project.title,
      desc: project.desc,
      link: project.link,
      image: project.image,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return new Project(data.title, data.description, data.project_url, data.image_url);
  },
};

export { projectConverter };
export default Project;
