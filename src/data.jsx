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
        icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'CSS',
        icon: <FaCss3 className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Git',
        icon: <FaGitAlt className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Github',
        icon: <FaGithub className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Node.js',
        icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'npm',
        icon: <FaNpm className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'SASS',
        icon: <FaSass className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Bootstrap',
        icon: <FaBootstrap className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Trello',
        icon: <FaTrello className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Angular',
        icon: <FaAngular className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Express',
        icon: <SiExpress className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'MongoDB',
        icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Mongoose',
        icon: <SiMongoose className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Postgresql',
        icon: <SiPostgresql className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'TailwindCSS',
        icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'TypeScript',
        icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'jQuery',
        icon: <SiJquery className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Jest',
        icon: <SiJest className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Visual Studio Code',
        icon: <SiVisualstudiocode className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Adobe Illustrator',
        icon: <SiAdobeillustrator className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Adobe Photoshop',
        icon: <SiAdobephotoshop className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Cucumber',
        icon: <SiCucumber className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Inkscape',
        icon: <SiInkscape className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'Firebase',
        icon: <SiFirebase className='h-16 w-16 text-emerald-500' />,
    },
    {
        id: nanoid(),
        title: 'AWS Lambda',
        icon: <SiAwslambda className='h-16 w-16 text-emerald-500' />,
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'first project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'second project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'third project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
];
