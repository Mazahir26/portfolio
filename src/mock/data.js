import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'An App Developer, Game Developer and Web Designer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mazahir',
  subtitle: "I'm an App Developer, Game Developer, and a Web Developer ",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'My_profile.jpg',
  paragraphOne:
    'Experienced mobile app developer who has a track record of success creating apps that are both well-received and commercially viable. Skilled with working as a team and incorporating input into projects. Ability to always look for ways to improve upon an already existing app to keep people downloading it and enjoying it. Strong eye for detail and tenacity to never quit on something until it is absolutely perfect.',
  paragraphTwo:
    'Knowledgeable and detail-oriented Game Programmer accustomed to working in fast-paced and deadline-driven environments. I have  extensive expertise in using Unity 3D and Godot.',
  paragraphThree:
    'Strong creative and analytical skills. I am an Experienced Web Developer with an eye for reactjs, javascript and, bootstrap.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_2.png',
    title: 'Harry Potter App',
    info:
      'Its a Simple react-native application where you can find all your favourite Harry Potter characters from books and movies (ad free)',
    info2: 'Its Free and Open Souced',
    url: 'https://github.com/Mazahir26/HarryPotter',
    repo: 'https://github.com/Mazahir26/HarryPotter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_1.png',
    title: 'The Spick Buster',
    info:
      'Its a pretty simple top down game made from godot, it was made within 3 days for a game jam.',
    info2: 'Its Free and Open Souced',
    url: 'https://darkest-lab.itch.io/the-spike-buster',
    repo: 'https://github.com/Mazahir26/The-Spick-Buster', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mazahirnajmi26@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mazahir_najmi?s=09',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Mazahir26',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_._coco_bean_._/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
