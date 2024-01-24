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
import pokedexImage from './assets/proyects/pokedex.png';
import popcornhubImage from './assets/proyects/popcornhub.png';
import cinematixImage from './assets/proyects/cinematix.png';
import chatAppImage from './assets/proyects/chat-app.png';
import meetConnectImage from './assets/proyects/meetConnect.png';
import filmifyImage from './assets/proyects/filmify.png';

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
        text: 'Embark on a journey through the world of Pokemon with this small application crafted using HTML, CSS and Javascript.',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'Popper',
            'Fetch',
            'PokeAPI',
        ],
        description:
            'Using the power of the PokeAPI, the project loads a delightful list of Pokemon into your screen. You can explore the list of Pokemon, each Pokemon has detailed information awaiting for you to click. Clicking on the Pokemon will unfold a modal window revealing a picture and detail description of the choosen Pokemon. If you want to look for a specific Pokemon then you can use the handy search input field. Simply type the name of the Pokemon you seek and the application will guide you to your desired Pokemon. This application is the front-row seat to discover your favorite Pokemons.',
        userStories: [
            'As a user, I want to be able to view a list of data, so I can quickly browse through the available information.',
            'As a user, I want the option to see more details on demand, enabling me to access additional information about a specific item when I need it.',
            'As a user, I want the ability to search for a specific pokemon, so I can easily find and access detailed information about a particular pokemon of interest.',
        ],
        keyFeatures: [
            'Load data from an external source API',
            'View a list of items',
            'On user action, view details for that item.',
        ],
    },
    {
        id: nanoid(),
        img: popcornhubImage,
        url: 'https://popcornhub-api.onrender.com/index.html',
        github: 'https://github.com/tompra/popcornHub',
        title: 'Popcornhub',
        text: 'Explore the world of movies with this RESTfulAPI, this backend application was crafted with Node.js, Express and MongoDB.',
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
        description:
            'Use this RESTful API where you can discover information on movies, directors, genres and actors. As a user you can create your porfile to curate your favorite movies, add or remove them from your list, and explore detailed insights. PopcornhubAPI counts with a detailed documentation where you can check the endpoints from movie retrievals to user managment.',
        userStories: [
            'As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I habve watched or am interested in.',
            'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
        ],
        keyFeatures: [
            'Return a list of all movies to the user.',
            'Return data (description, genre, director, imageURL) about single movie by a title to the user.',
            'Return data about a genre (description) by name/title (e.g: Thriller).',
            'Return data about a director (bio, birth year, death year) by name.',
            'Allow new users to register.',
            'Allow users to update their user info (username, password, email, date of birth).',
            'Allow users to add a movie to their list of favorites.',
            'Allow users to remove a movie to their list of favorites.',
            'Allow existing users to deregister.',
        ],
    },
    {
        id: nanoid(),
        img: cinematixImage,
        url: 'https://cinematix.netlify.app/login',
        github: 'https://github.com/tompra/cinematix',
        title: 'Cinematix',
        text: 'Immerse in a yourself in this single-page, responsive web application with React for an application called PopcornHub. Create an account and navigate through this user-friendly interace application and discover more about movies.',
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
        description:
            'Experience movie browsing in this intuitive, visually stunning and accessible across all devices. As a user you can unlock the following features: favorite movies, update your profile, and sorting and searching through the movie collection. Navigate with ease using our handy navigation bar, and the search input to find your desired movie.',
        userStories: [
            'As a user, I want to be able to access information about movies so that I can learn more about movies I’ve watched or am interested in.',
            'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
        ],
        keyFeatures: [
            'Main View: Return ALL movies to the user.',
            'Main View: Filtering the list of movies with a search feature.',
            'Main View: Ability to select a movie for details.',
            'Main View: Ability to log out.',
            'Main View: Ability to navigate to Profile.',
            'Single Movie View: Returns data about a single movie to the user.',
            'Single Movie View: Allows users to add a movie to their list of favorites.',
            'Login View: Allows users to log in with a username and password.',
            'Singup View: Allows new users to register.',
            'Profile View: Display user registration details.',
            'Profile View: Allows users to update their info.',
            'Profile View: Displays favorite movies.',
            'Profile View: Allows users to remove a movie from their list of favorites.',
            'Profile View: Allows existing users to deregister.',
        ],
    },
    {
        id: nanoid(),
        img: meetConnectImage,
        url: 'https://tompra.github.io/MeetConnect/',
        github: 'https://github.com/tompra/meet_connect',
        title: 'MeetConnect',
        text: 'A serverless, progressive web application using React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
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
        description:
            'This PWA application display events in different cities which are fetch from Google Calendar API. The whole idea of this project is to learn TTD (Test-Driven-Development), serverless function using AWS Lambda, how PWAs work and how to draw chart with Recharts.',
        userStories: [
            'As a user, I want to effortlessly access upcoming events.',
        ],
        keyFeatures: [
            'Filter events by city.',
            'Show/hide event details.',
            'Specify number of events.',
            'Use the app when offline.',
            'Add an app shortcut to the Home Screen.',
            'Display chart visualizing event details.',
        ],
    },
    {
        id: nanoid(),
        img: filmifyImage,
        url: 'https://tompra.github.io/filmify/welcome',
        github: 'https://github.com/tompra/filmify',
        title: 'Filmify',
        text: 'Immerse yourself one more time in this Angular single page and responsive application rooted in existing RESTfulAPI and database using Angular-Material components.',
        tools: ['Angular', 'TypeScript', 'Angular-Material', 'SASS', 'TypeDoc'],
        description:
            'This Angular application using Angular Material interface for the PopcornHub REST API. Navigation allows user to manage profile, sort and set favorite movies. Designed for compatibility across devices.',
        userStories: [
            'As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.',
            'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
        ],
        keyFeatures: [
            'Welcome view where users will be able to either login or register an account.',
            'Once authenticated, the user should view all movies.',
            'Upon clicking on a particular movie, users will be taken to a single movie view, where additional movie details will be displayed.',
            'The single movie view will contain a button when clicked takes the user to the director view, where detials about the director of that particular movie will be displayed',
            'The single movie view will contain a button when clicked takes the user to the genre view, where detials about the genre of that particular movie will be displayed',
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
            'Gifted Chat',
            'Expo',
        ],
        description:
            'Crafted with React Native, I built a chat app using React Native. This mobile app it’ dynamic platform that offers a chat interface using Gifted Chat, image sharing and location-sharing capabilities. Diving into mobile development with React Native, along with Expo and Google Firebase, we say goodbye to maintaing separate codebases for iOS and Android.',
        userStories: [
            'As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.',
            'As a user, I want to be able to send messages to my friends and family members to exchange the latest news.',
            'As a user, I want to send images to my friends to show them what I’m currently doing.',
            'As a user, I want to share my location with my friends to show them where I am',
            'As a user, I want to be able to read my messages offline so I can reread conversations at any time.',
            'As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.',
        ],
        keyFeatures: [
            'A page where users can enter their name and choose a background color for the chat screen before joining the chat.',
            'A page displaying the conversation, as well as an input field and submit button.',
            'The chat must provide users with two additional communication features: sending images and location data.',
            'Data gets stored online and offline.',
        ],
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
