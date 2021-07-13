import { nanoid } from 'nanoid';

export const headData = {
  title: ' ABC Drywall | Welcome!  ',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to ABC Drywall Webpage! Follow our content here!',
};

// HERO DATA
export const heroData = {
  title: 'ABC',
  name: 'Drywall Inc',
  subtitle: '',
  cta: 'Contact',
  // img: 'josh.jpg'
};

// ABOUT DATA
export const aboutData = {
  img: 'abcdrywall.png',
  paragraphOne: 'Somos un gran y divertido equipo de construcción en general, especializados en instalación de Paredes y Pintura.',
  paragraphTwo: 'Reparamos, construimos, solucionamos tu problema...',
  paragraphThree: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'brett.jpg',
    title: 'Titulos Projeto 1',
    info: 'Info lorem ipsum. Paragraph stories created, started at 21th no if craten criatus forem.',
    info2:
      'Info lorem ipsum. Paragraph stories created, started at 21th no if craten criatus forem.',
    url: 'www.github.com/iagokrt',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'josh.jpg',
    title: 'Titulos Projeto 2',
    info: 'Info lorem ipsum. Paragraph stories created, started at 21th no if craten criatus forem.',
    info2: 'Info lorem ipsum. Paragraph stories created, started at 21th no if craten criatus forem.',
    url: 'www.github.com/iagokrt',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'henry.jpg',
    title: 'Titulos Projeto 3',
    info: 'Info lorem ipsum. Paragraph stories created, started at 21th no if craten criatus forem.',
    info2: 'Info lorem ipsum. Paragraph stories created, started at 21th no if craten criatus forem',
    url: 'www.github.com/iagokrt',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '🚧 Trabalhe Conosco 🚧',
  btn: 'abcdrywallimc@hotmail.com',
  email: 'james@abcdrywall.com'
};
