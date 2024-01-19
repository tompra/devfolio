import { nanoid } from 'nanoid';
import {
    FaHtml5,
    FaJs,
    FaReact,
    FaCss3,
    FaGitAlt,
    FaGithub,
    FaNode,
    FaNpm,
    FaSass,
    FaBootstrap,
    FaTrello,
    FaAngular,
    FaTwitter,
} from 'react-icons/fa';
import {
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiPostgresql,
    SiJquery,
    SiTailwindcss,
    SiJest,
    SiTypescript,
    SiVisualstudiocode,
    SiCucumber,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiInkscape,
    SiFirebase,
    SiAwslambda,
    SiGmail,
} from 'react-icons/si';
import pokedexImage from './assets/proyects/pokedex.png';
import popcornhubImage from './assets/proyects/popcornhub.png';
import cinematixImage from './assets/proyects/cinematix.png';
import chatAppImage from './assets/proyects/chat-app.png';
import meetConnectImage from './assets/proyects/meetConnect.png';
import filmifyImage from './assets/proyects/filmifyAngular.png';

export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#projects', text: 'projects' },
    { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'HTML',
        icon: <FaHtml5 className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'CSS',
        icon: <FaCss3 className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Git',
        icon: <FaGitAlt className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Github',
        icon: <FaGithub className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Node.js',
        icon: <FaNode className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'npm',
        icon: <FaNpm className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'SASS',
        icon: <FaSass className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Bootstrap',
        icon: <FaBootstrap className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Trello',
        icon: <FaTrello className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Angular',
        icon: <FaAngular className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Express',
        icon: <SiExpress className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'MongoDB',
        icon: <SiMongodb className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Mongoose',
        icon: <SiMongoose className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Postgresql',
        icon: <SiPostgresql className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'TailwindCSS',
        icon: <SiTailwindcss className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'TypeScript',
        icon: <SiTypescript className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'jQuery',
        icon: <SiJquery className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Jest',
        icon: <SiJest className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Visual Studio Code',
        icon: <SiVisualstudiocode className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Adobe Illustrator',
        icon: <SiAdobeillustrator className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Adobe Photoshop',
        icon: <SiAdobephotoshop className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Cucumber',
        icon: <SiCucumber className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Inkscape',
        icon: <SiInkscape className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'Firebase',
        icon: <SiFirebase className='h-16 w-16 text-sky-500' />,
    },
    {
        id: nanoid(),
        title: 'AWS Lambda',
        icon: <SiAwslambda className='h-16 w-16 text-sky-500' />,
    },
];

export const projects = [
    {
        id: nanoid(),
        img: pokedexImage,
        url: 'https://tompra.github.io/pokedex/',
        github: 'https://github.com/tompra/pokedex',
        title: 'Pokédex',
        text: 'Small application build with HTML, CSS and JavaScript that loads data from an external API and retrieves the viewing data points in detail.',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'Popper',
            'Promise-Polyfill',
            'Fetch',
            'PokeAPI',
        ],
    },
    {
        id: nanoid(),
        img: popcornhubImage,
        url: 'https://popcornhub-api.onrender.com/index.html',
        github: 'https://github.com/tompra/popcornHub',
        title: 'Popcornhub',
        text: 'An API able to receive information on movies, directors, and genres so that anyone can learn more about movies. It allows users to create profiles to save data about their favorite movies.',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
            'Postman',
        ],
    },
    {
        id: nanoid(),
        img: cinematixImage,
        url: 'https://cinematix.netlify.app/login',
        github: 'https://github.com/tompra/cinematix',
        title: 'Cinematix',
        text: 'Using React, build the client-side for an app called popcornHub based on its existing server-side code (REST API and database).',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'React Boostrap',
            'Axios',
            'Vite',
            'PropTypes',
        ],
    },
    {
        id: nanoid(),
        img: meetConnectImage,
        url: 'https://tompra.github.io/MeetConnect/',
        github: 'https://github.com/tompra/meet_connect',
        title: 'MeetConnect',
        text: 'A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'AWS Lambda',
            'Google OAuth',
            'TDD',
            'Jest',
            'Cucumber',
            'Puppeteer',
            'Atatus',
            'Recharts',
        ],
    },
    {
        id: nanoid(),
        img: chatAppImage,
        url: '',
        github: 'https://github.com/tompra/chat_app',
        title: 'ChatApp',
        text: 'Build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.',
        tools: [
            'JavaScript',
            'React Native',
            'Android Studio',
            'Google Firebase',
            'Expo',
            'Gifted Chat',
        ],
    },
    {
        id: nanoid(),
        img: filmifyImage,
        url: 'https://tompra.github.io/filmify/welcome',
        github: 'https://github.com/tompra/filmify',
        title: 'Filmify',
        text: 'Build the client-side for an Angular application based on its existing server-side code (REST API and database) with supporting documentation.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
        tools: ['Angular', 'TypeScript', 'Angular-Material', 'SASS', 'TypeDoc'],
    },
];

export const toolbelt = [
    {
        id: nanoid(),
        title: 'Programming Languages',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
        id: nanoid(),
        title: 'Front-End & Frameworks',
        items: [
            'React',
            'jQuery',
            'Angular',
            'Bootstrap',
            'Angular Material',
            'TailwindCSS',
            'SASS',
        ],
    },
    {
        id: nanoid(),
        title: 'Back-End & Libraries',
        items: [
            'Node.js',
            'Express',
            'CORS',
            'Axios',
            'Vite',
            'Parcel',
            'Morgan',
        ],
    },
    {
        id: nanoid(),
        title: 'Web Services & Database',
        items: [
            'MongoDB',
            'Mongoose',
            'PostgreSQL',
            'Firebase',
            'AWS Lambda',
            'Github',
            'Netlify',
            'OnRender',
        ],
    },
    {
        id: nanoid(),
        title: 'Mobile Apps',
        items: ['React Native', 'Android Studio', 'PWA', 'Expo'],
    },
    {
        id: nanoid(),
        title: 'Testing',
        items: ['Jest', 'Cucumber', 'Puppeteer', 'Postman'],
    },

    {
        id: nanoid(),
        title: 'Design',
        items: ['Adobe Photoshop', 'Adobe Illustrator', 'Inkscape', 'Figma'],
    },
    {
        id: nanoid(),
        title: 'Tools',
        items: ['Git', 'Github', 'VSCode', 'Trello', 'Android Studio'],
    },
];
export const connectLogos = [
    {
        id: nanoid(),
        logo: (
            <FaGithub className='h-8 w-8 text-slate-600 hover:text-sky-500' />
        ),
    },
    {
        id: nanoid(),
        logo: (
            <FaTwitter className='h-8 w-8 text-slate-600 hover:text-sky-500' />
        ),
    },
    {
        id: nanoid(),
        logo: <SiGmail className='h-8 w-8 text-slate-600 hover:text-sky-500' />,
    },
];
