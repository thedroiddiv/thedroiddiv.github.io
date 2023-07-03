export type Skill = {
  title?: string;
  subtitle?: string;
  desc?: string;
  image?: string;
  tech?: string[];
};

export const mySkills: Skill[] = [
  {
    title: 'Android Development',
    desc: '',
    image: 'assets/android.svg',
    tech: [
      'Java',
      'Kotlin',
      'XML',
      'Firebase',
      'Android-Jetpack',
      'RoomDB',
      'Retrofit',
      'Dagger-Hilt',
    ],
  },
  {
    title: 'Frontend Development',
    subtitle: '',
    desc: '',
    image: 'assets/frontend.svg',
    tech: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'ReactJS', 'NodeJS'],
  },
  {
    title: 'Backend Development',
    subtitle: '',
    desc: ' ',
    image: 'assets/backend.svg',
    tech: [
      'TypeScript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'OAuth',
    ],
  },
];
