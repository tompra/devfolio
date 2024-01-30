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
        caseStudy: [
            {
                overview:
                    'Cinematix is a web application crafted with the MERN stack (MongoDB, Express, React, and Node.js), crafted to enrich the user experience. It features both backend and frontend components, with the frontend leveraging React to deliver an interface for essential functionality like login, registration, account management, movie details, and search input. The backend hosts a database where movies are stored, empowering users to personalize their account by adding favorite movies and updating profile details such as username, password, email, and birthday. The culmination of these efforts is a refined interface that allows users to browse movies and access specific details about their selections, culminating in an immersive experience. Cinematix is the ideal app for movie enthusiasts.',
                purpose:
                    'Cinematix is a project developed during the Career Foundry’s Full-Stack Web Development program. The objective was to create a dynamic, responsive, and immersive web application from the ground up, employing React for the frontend and constructing an API with Node.js, Express and MongoDB for the backend. This project served as an opportunity to showcase my skills and expertise, while also familiarizing myself with essential project requirements such as user stories and user flows. Through Cinematix, I not only demonstrated my expertise in web development but also my ability to meet the project expectations.',
                duration:
                    'Cinematix was crafted over the course of one month, a project that demanded significant time and attention. The complexity for mastering technologies like React Hooks, Redux and Context, required dedicated effort to ensure integration and functionality. ',
                credits:
                    'I created a React application that interacts with a movie API (Popcornhub API) I had previously developed, enabling the display of comprehensive movie information and user data. Throughout this project, I engaged in collaborative efforts with my mentor and tutor from CareerFoundry.',
                toolsFront:
                    'React, Vite, ESLint, React-Router, React Bootstrap, React-Icons, React-Toastify, React-Animated-Hear, SASS.',
                toolsBack:
                    'Node.js, Express, MongoDB, Morgan, bodyParser, mongoose, CORS, Passport, bcrypt, Postman, OnRender.',

                backend:
                    'On the server side, I crafted a RESTful API using Node.js and Express, integrating with MongoDB, a non-relational database. The API’s HTTP endpoints leverage CRUD methods to efficiently retrieve movie and user data through standard HTTP requests, delivering results in JSON format. This integration is facilitated by Mongoose, ensuring through the business logic layer. Authentication and authorization are implemented through HTTP and JWT based protocols, an authorization JWT token is returned to the client. This process validates registered users and grants them Read, Delete, and Update permissions. While initially challenging, with persistence, mastering authorization mechanisms became clear. Prior to deployment, testing of API endpoints using API endpoints using Postman and documentation for a smooth deployment process. The RESTful API was successfully deployed using OnRender.',
                frontend:
                    'In the client-side development of the MERN stack project, following the backend construction, I proceeded to build the user interface, completing the project’s full functionality. Using the React library, I created a responsive single-page website, guided by the MVC design pattern. The interface encompasses distinct views, including login, signup, main, movie, profile view. The login and signup view feature user-friendly forms for registration and login, while the main view showcases a list of available movies. Additionally, the single movie view provides detailed information about the user-selected movie, enhancing the user experience. Transitioning to React presented initial challenges in understanding state management and comprehending data traversal across components, especially compared to traditional HTML, CSS and VanillaJS. To overcome this learning curve, I dedicated considerable effort to thoroughly studying React documentation. In my effort to understand the data flow throughout components, I implemented React context, with a specific focus on user authentication and movie data. This allowed for efficient management and sharing of data across various parts of the application.',
                improvements: [
                    'Enhance the user profile by integrating user photos and personalized recommendations based on liked movies.',
                    'Improve the registration and profile editing forms: incorporate a secondary password input to confirm accuracy and prevent typos. Implement a username availability check to ensure uniqueness.',
                    'Introduce a confirmation dialog prompt prior to account deletion for added security.',
                    'Upgrade movie filtering capabilities with advanced options, allowing users to filter by genre, actor, and director.',
                    'Integrate actor and director profiles, showcasing their respective filmography and the various movies they have been involved in.',
                ],
                conclusion:
                    'Crafting this project was quite a testament to my journey as a Web Developer, making my first full-stack application. From conceptualizing abstract server code to crafting the database structures and materializing a user interface.One of my primary challenges I counter was mastering state management and navigating component data flow. This required understanding React’s state management and the intricacies of passing data between components. Through dedicated study and hands-on practice, I gradually developed in these areas, enabling me to build robust and responsive user interfaces. Another significant issue was implementing user authorization and authentication mechanisms. Understanding the complexities of securing user data and managing access rights. However, with perseverance and guidance from my tutor. I dedicated myself to the relevant documentation. Whenever I encounter obstacles beyond my expertise, I seek assistance from my mentor. Additionally, I recognized the critical importance of optimizing API calls for efficient data retrieval and user experience. Balancing performance and functionality, I improved my approach to API integration and prioritizing responsiveness. Ultimately, I successfully navigated these challenges and emerged with a fully functional web application that stands as a testament to my growth and proficiency as a Web Developer. ',
            },
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
        caseStudy: [
            {
                overview:
                    'Popcornhub is a RESTful API designed to integrate with Node.js, Express and MongoDB. Its primary functionality includes providing backend support for retrieving user data and movie information. The backend system operates on a database infrastructure, facilitating users to personalize their accounts by adding favorite movies and updating profile details such as username, password, email and birthday. This project is driven by the ambition to implement the complete MERN stack, thereby developing a comprehensive user interface and user experience. This will enable users to browse through movies, access detailed information about their selections.',
                purpose:
                    'Popcornhub is a project developed during the Career Foundry’s Full-Stack Web Development program. The objective was to create a dynamic, responsive, and immersive web application from the ground up, employing React for the frontend and constructing an API with Node.js, Express and MongoDB for the backend. This project served as an opportunity to showcase my skills and expertise, while also familiarizing myself with essential project requirements such as user stories and user flows.',
                duration:
                    'Popcornhub was developed over the course of one month, demanding signifcant time and attention to detail. This project presented challenges in mastering  various technologies, including Node.js, Express and MongoDB, as well as essential tools such as CORS, brcypt, passport.js, morgan, body-parser, and JSONWebToken.',
                credits:
                    'I developed this RESTful API as a foundation for future enhancements, enabling comprehensive display of movie information and user data. Throughout this project, I collaborated closely with my mentor and tutor from Career Foundry, leveraging their guidance and expertise.',
                toolsFront:
                    'React, Vite, ESLint, React-Router, React Bootstrap, React-Icons, React-Toastify, React-Animated-Hear, SASS.',
                toolsBack:
                    'Node.js, Express, MongoDB, Morgan, bodyParser, mongoose, CORS, Passport, bcrypt, Postman, OnRender.',

                backend:
                    'On the server side, I crafted a RESTful API using Node.js and Express, integrating with MongoDB, a non-relational database. The API’s HTTP endpoints leverage CRUD methods to efficiently retrieve movie and user data through standard HTTP requests, delivering results in JSON format. This integration is facilitated by Mongoose, ensuring through the business logic layer. Authentication and authorization are implemented through HTTP and JWT based protocols, an authorization JWT token is returned to the client. This process validates registered users and grants them Read, Delete, and Update permissions. While initially challenging, with persistence, mastering authorization mechanisms became clear. Prior to deployment, testing of API endpoints using API endpoints using Postman and documentation for a smooth deployment process. The RESTful API was successfully deployed using OnRender.',
                frontend:
                    'In the client-side development of the MERN stack project, following the backend construction, I proceeded to build the user interface, completing the project’s full functionality. Using the React library, I created a responsive single-page website, guided by the MVC design pattern. The interface encompasses distinct views, including login, signup, main, movie, profile view. The login and signup view feature user-friendly forms for registration and login, while the main view showcases a list of available movies. Additionally, the single movie view provides detailed information about the user-selected movie, enhancing the user experience. Transitioning to React presented initial challenges in understanding state management and comprehending data traversal across components, especially compared to traditional HTML, CSS and VanillaJS. To overcome this learning curve, I dedicated considerable effort to thoroughly studying React documentation. In my effort to understand the data flow throughout components, I implemented React context, with a specific focus on user authentication and movie data. This allowed for efficient management and sharing of data across various parts of the application.',
                improvements: [
                    'Enhance the user profile by integrating user photos and personalized recommendations based on liked movies.',
                    'Improve the registration and profile editing forms: incorporate a secondary password input to confirm accuracy and prevent typos. Implement a username availability check to ensure uniqueness.',
                    'Introduce a confirmation dialog prompt prior to account deletion for added security.',
                    'Upgrade movie filtering capabilities with advanced options, allowing users to filter by genre, actor, and director.',
                    'Integrate actor and director profiles, showcasing their respective filmography and the various movies they have been involved in.',
                ],
                conclusion:
                    'Crafting this project was quite a testament to my journey as a Web Developer, making my first full-stack application. From conceptualizing abstract server code to crafting the database structures and materializing a user interface.One of my primary challenges I counter was mastering state management and navigating component data flow. This required understanding React’s state management and the intricacies of passing data between components. Through dedicated study and hands-on practice, I gradually developed in these areas, enabling me to build robust and responsive user interfaces. Another significant issue was implementing user authorization and authentication mechanisms. Understanding the complexities of securing user data and managing access rights. However, with perseverance and guidance from my tutor. I dedicated myself to the relevant documentation. Whenever I encounter obstacles beyond my expertise, I seek assistance from my mentor. Additionally, I recognized the critical importance of optimizing API calls for efficient data retrieval and user experience. Balancing performance and functionality, I improved my approach to API integration and prioritizing responsiveness. Ultimately, I successfully navigated these challenges and emerged with a fully functional web application that stands as a testament to my growth and proficiency as a Web Developer. ',
            },
        ],
    },
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
