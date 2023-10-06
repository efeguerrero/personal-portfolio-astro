//Images Import
import toDoApp from '../assets/images/projects/trial2.png';
import musicProducer from '../assets/images/projects/crece.svg';
import stefanos from '../assets/images/projects/trial.png';
import tintsAndShades from '../assets/images/projects/trial.png';

const projects = [
  {
    id: 1,
    name: 'do it',
    img: toDoApp,
    demoURL: 'https://reactjs-project-to-do-list.netlify.app',
    githubURL:
      'https://github.com/efeguerrero/Coder-House--React-Course--Final-Project--ecommerce-site.git',
    technologies: ['react', 'javascript', 'HTML', 'CSS/SASS', 'PWA'],
    description:
      'Fully responsive to-do app built with react. Developed as a Progressive Web App to give mobile users a native experience. ',
  },
  {
    id: 2,
    name: 'Stefanos Deco',
    img: stefanos,
    demoURL: 'https://ecomm-coderh.netlify.app/',
    githubURL:
      'https://github.com/efeguerrero/Coder-House--React-Course--Final-Project--ecommerce-site.git',
    technologies: ['react', 'javascript', 'HTML', 'CSS/SASS', 'firebase'],
    description:
      'E-commerce website developed for React JS course in Coder House (coderhouse.com). Fully responsive site built with React and using Firebase as back-end for databases, order generation and stock management',
  },
  {
    id: 3,
    name: 'Santiago Rey',
    img: musicProducer,
    demoURL: 'https://santiago-rey.netlify.app/',
    githubURL: 'https://github.com/efeguerrero/Productor_Guerrero.git',
    technologies: [
      'javascript',
      'HTML',
      'CSS/SASS',
      'Contentful CMS',
      'Bootstrap',
    ],
    description:
      'Personal site for Argentinean music producer Santiago Rey. Content managment system implemented with Contentful API to give owner content control.',
  },
  {
    id: 4,
    name: 'tints & shades',
    img: tintsAndShades,
    demoURL: 'https://shade-your-color.netlify.app',
    githubURL: 'https://github.com/efeguerrero/shade-your-color.git',
    technologies: ['react', 'javascript', 'HTML', 'CSS'],
    description:
      'Generate tints and shades for any colour to upgrade your palette. Built using Values.js from Noel Delgado.',
  },
];

export default projects;
