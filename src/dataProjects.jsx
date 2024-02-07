import { nanoid } from 'nanoid';

import pokedexImg1 from './assets/proyects/pokedex/pokedex.png';
import pokedexImg2 from './assets/proyects/pokedex/pokedexCard.png';
import pokedexImg3 from './assets/proyects/pokedex/pokedexSearch.png';

import popcornhubImg1 from './assets/proyects/popcornhubAPI/popcornhub.png';
import popcornhubImg2 from './assets/proyects/popcornhubAPI/popcornCode.png';
import popcornhubImg3 from './assets/proyects/popcornhubAPI/popcornWelcome.png';

import cinematixImg1 from './assets/proyects/cinematix/cinematix.png';
import cinematixImg2 from './assets/proyects/cinematix/cinematixLogin.png';
import cinematixImg3 from './assets/proyects/cinematix/cinematixSignUp.png';
import cinematixImg4 from './assets/proyects/cinematix/cinematixMainView.png';
import cinematixImg5 from './assets/proyects/cinematix/cinematixMovieView.png';
import cinematixImg6 from './assets/proyects/cinematix/cinematixProfile.png';

import chatAppImg1 from './assets/proyects/chatApp/chat-app.png';
import chatAppImg2 from './assets/proyects/chatApp/chatAppInitial.png';
import chatAppImg3 from './assets/proyects/chatApp/chatAppMessage.png';
import chatAppImg4 from './assets/proyects/chatApp/chatAppOptions.png';
import chatAppImg5 from './assets/proyects/chatApp/chatAppMessage.png';
import chatAppImg6 from './assets/proyects/chatApp/chatAppUserName.png';

import meetConnectImg1 from './assets/proyects/meetConnect/meetConnect.png';
import meetConnectImg2 from './assets/proyects/meetConnect/meetConnectLoading.png';
import meetConnectImg3 from './assets/proyects/meetConnect/meetConnectEventDetails.png';
import meetConnectImg4 from './assets/proyects/meetConnect/meetConnectMain.png';
import meetConnectImg5 from './assets/proyects/meetConnect/meetConnectSearch.png';

import filmifyImg1 from './assets/proyects/filmify/filmify.png';
import filmifyImg2 from './assets/proyects/filmify/filmifyWelcome.png';
import filmifyImg3 from './assets/proyects/filmify/filmifyDirector.png';
import filmifyImg4 from './assets/proyects/filmify/filmifyGenre.png';
import filmifyImg5 from './assets/proyects/filmify/filmifyDescription.png';
import filmifyImg6 from './assets/proyects/filmify/filmifyProfile.png';

const pokedexImages = [pokedexImg1, pokedexImg2, pokedexImg3];
const popcornhubImages = [popcornhubImg1, popcornhubImg2, popcornhubImg3];
const cinematixImages = [
    cinematixImg1,
    cinematixImg2,
    cinematixImg3,
    cinematixImg4,
    cinematixImg5,
    cinematixImg6,
];
const chatAppImages = [
    chatAppImg1,
    chatAppImg2,
    chatAppImg3,
    chatAppImg4,
    chatAppImg5,
    chatAppImg6,
];

const meetConnectImages = [
    meetConnectImg1,
    meetConnectImg2,
    meetConnectImg3,
    meetConnectImg4,
    meetConnectImg5,
];
const filmifyImages = [
    filmifyImg1,
    filmifyImg2,
    filmifyImg3,
    filmifyImg4,
    filmifyImg5,
    filmifyImg6,
];

export const projects = [
    {
        id: nanoid(),
        img: filmifyImages,
        url: 'https://tompra.github.io/filmify/welcome',
        github: 'https://github.com/tompra/filmify',
        title: 'Filmify',
        textKey: 'filmifyText',
        tools: ['Angular', 'TypeScript', 'Angular-Material', 'SASS', 'TypeDoc'],
        descriptionKey: 'filmifyDescription',
        userStories: 'filmifyUserStories',
        keyFeatures: 'filmifyKeyFeatures',
        caseStudy: [
            {
                overview: 'filmifyOverview',
                purpose: 'filmifyPurpose',
                duration: 'filmifyDuration',
                credits: 'filmifyCredits',
                toolsFront: 'Angular, TypeScript, Angular-Material, SASS',
                toolsBack:
                    'Node.js, Express, MongoDB, Morgan, bodyParser, mongoose, CORS, Passport, bcrypt, Postman, OnRender.',

                backend: 'filmifyBackend',
                frontend: 'filmifyFrontend',
                improvements: 'filmifyImprovements',
                conclusion: 'filmifyConclusion',
            },
        ],
    },
    {
        id: nanoid(),
        img: chatAppImages,
        url: '',
        github: 'https://github.com/tompra/chat_app',
        title: 'ChatApp',
        textKey: 'chatAppText',
        tools: [
            'JavaScript',
            'React Native',
            'Android Studio',
            'Google Firebase',
            'Gifted Chat',
            'Expo',
        ],
        descriptionKey: 'chatAppDescription',
        userStories: 'chatAppUserStories',
        keyFeatures: 'chatAppKeyFeatures',
    },
    {
        id: nanoid(),
        img: meetConnectImages,
        url: 'https://tompra.github.io/MeetConnect/',
        github: 'https://github.com/tompra/meet_connect',
        title: 'MeetConnect',
        textKey: 'meetConnectText',
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
        descriptionKey: 'meetConnectDescription',
        userStories: 'meetConnectUserStories',
        keyFeatures: 'meetConnectKeyFeatures',
    },
    {
        id: nanoid(),
        img: cinematixImages,
        url: 'https://cinematix.netlify.app/',
        github: 'https://github.com/tompra/cinematix',
        title: 'Cinematix',
        textKey: 'cinematixText',
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
        descriptionKey: 'cinematixDescription',
        userStories: 'cinematixUserStories',
        keyFeatures: 'cinematixKeyFeatures',
        caseStudy: [
            {
                overview: 'cinematixOverview',
                purpose: 'cinematixPurpose',
                duration: 'cinematixDuration',
                credits: 'cinematixCredits',
                toolsFront:
                    'React, Vite, ESLint, React-Router, React Bootstrap, React-Icons, React-Toastify, React-Animated-Hear, SASS.',
                toolsBack:
                    'Node.js, Express, MongoDB, Morgan, bodyParser, mongoose, CORS, Passport, bcrypt, Postman, OnRender.',

                backend: 'cinematixBackend',
                frontend: 'cinematixFrontend',
                improvements: 'cinematixImprovements',
                conclusion: 'cinematixConclusion',
            },
        ],
    },
    {
        id: nanoid(),
        img: popcornhubImages,
        url: 'https://popcornhub-api.onrender.com/index.html',
        github: 'https://github.com/tompra/popcornHub',
        title: 'Popcornhub',
        textKey: 'popcornhubText',
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
        descriptionKey: 'popcornhubDescription',
        userStories: 'popcornhubUserStories',
        keyFeatures: 'popcornhubKeyFeatures',
        caseStudy: [
            {
                overview: 'popcornhubOverview',
                purpose: 'popcornhubPurpose',
                duration: 'popcornhubDuration',
                credits: 'popcornhubCredits',
                toolsFront:
                    'React, Vite, ESLint, React-Router, React Bootstrap, React-Icons, React-Toastify, React-Animated-Hear, SASS.',
                toolsBack:
                    'Node.js, Express, MongoDB, Morgan, bodyParser, mongoose, CORS, Passport, bcrypt, Postman, OnRender.',

                backend: 'popcornhubBackend',
                frontend: 'popcornhubFrontend',
                improvements: 'popcornhubImprovements',
                conclusion: 'popcornhubConclusion',
            },
        ],
    },
    {
        id: nanoid(),
        img: pokedexImages,
        url: 'https://tompra.github.io/pokedex/',
        github: 'https://github.com/tompra/pokedex',
        title: 'Pokédex',
        textKey: 'pokedexText',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'Popper',
            'Fetch',
            'PokeAPI',
        ],
        descriptionKey: 'pokedexDescription',
        userStories: 'pokedexUserStories',
        keyFeatures: 'pokedexKeyFeatures',
    },
];
