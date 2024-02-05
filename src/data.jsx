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
    FaLinkedin,
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
            <FaGithub className='xs:h-5 xs:w-5 sm:h-8 sm:w-8 text-slate-600 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-300' />
        ),
        link: 'https://github.com/tompra',
    },
    {
        id: nanoid(),
        logo: (
            <FaLinkedin className='xs:h-5 xs:w-5 sm:h-8 sm:w-8 text-slate-600 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-300' />
        ),
        link: 'https://www.linkedin.com/in/thom-prayon',
    },
    {
        id: nanoid(),
        logo: (
            <SiGmail className='xs:h-5 xs:w-5 sm:h-8 sm:w-8 text-slate-600 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-300' />
        ),
        link: 'mailto:tomprayon@gmail.com',
    },
];

export const futurePlanStack = [
    {
        id: nanoid(),
        tool: <FaReact className='xs:h-10 xs:w-10 sm:h-12 sm:w-12' />,
    },
    {
        id: nanoid(),
        tool: <FaSass className='xs:h-10 xs:w-10 sm:h-12 sm:w-12' />,
    },
    {
        id: nanoid(),
        tool: <FaNode className='xs:h-10 xs:w-10 sm:h-12 sm:w-12' />,
    },
    {
        id: nanoid(),
        tool: <SiExpress className='xs:h-10 xs:w-10 sm:h-12 sm:w-12' />,
    },
    {
        id: nanoid(),
        tool: <SiPostgresql className='xs:h-10 xs:w-10 sm:h-12 sm:w-12' />,
    },
];
