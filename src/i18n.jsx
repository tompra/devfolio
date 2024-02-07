import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                navItem1: 'Home',
                navItem2: 'About',
                navItem3: 'Skills',
                navItem4: 'Projects',
                navItem5: 'Contact',
                homeTitle: 'Hello there ',
                homeSubTitle1: "I'm ",
                homeSubTitle2:
                    ', a certified full-stack JavaScript web developer.',
                homeParagraph1:
                    "I'm a passionate human that enjoys communicating with computers. My diverse background includes roles in marketing adminstration, catering event organization, online supermarket operations, and tattoo artistry as a hobby.",
                homeParagraph2:
                    'My experience as a multimedia designer student, I bring a blend of design skills and technical proficiency to web development. Proficient in JavaScript, specializing in React for front-end and Node.js for backend, I excel at creating integrated, responsive and fully functional full-stack applications.',
                homeIndustryText: 'Passionate about industries like: ',
                homeIndustry1: 'Climbing',
                homeIndustry2: 'Design',
                homeIndustry3: 'Sustainability',
                homeIndustry4: 'Education',
                homeIndustry5: 'Wellness',
                homeIndustry6: 'Sports',
                homeIndustry7: 'Productivity',
                homeMessage:
                    'Currently seeking a full-time web developer role.',
                aboutTitle: 'About me',
                aboutParagraph1:
                    'Hey there, I’m Thomas, a full-stack web developer with a diverse background that complements my skill set. In my previous positions, I refined my problem-solving skills, especially through hands-on experience with low-code tools like Excel. Crafting bike reports and managing account sheets were just a couple of the challenges I tackled.',
                aboutWhyCoding: 'Why coding?',
                aboutParagraph2:
                    'To me, coding represents endless possibilities. It’s about embracing challenges and continuous learning. The thrill of problem-solving and the satisfaction of seeing solutions come to life are what drive me. With each new project, I’ve pushed myself to learn and grow.',
                aboutBeyond: 'Beyond interacting with computers,',
                aboutParagraph3:
                    'I’m passionate about gravity - climbing is my primary hobby but I also find joy in drawing, tattooing, yoga, cycling, and nature strolls. Movement, both physical and mental, fuels my drive.',
                aboutAsDeveloper: 'As a web developer,',
                aboutParagraph4:
                    'I strive to create responsive web apps with clean layouts that function seamlessly across all devices. I prioritise designing intuitive interfaces that are easy to navigate and accessible to all users, ensuring usability for everyone.',
                aboutParagraph5:
                    'While my background may not scream ‘tech’, I eagerly embrace new technologies and documentation.',
                aboutSeeking: "I'm seeking",
                aboutParagraph6:
                    'a role as a Junior Web Developer or collaboration opportunities in Climbing, Design, Education, Productivity, Wellness, Sport, Gastronomy, or Sustainability.',
                aboutParagraph7:
                    'I’m captivated by collaborative projects and problem-solving challenges, motivated by overcoming obstacles and continuous improvement. If you’re interested in collaborating, feel free to reach out through this',
                aboutContact: 'form',
                aboutParagraph8: 'or explore my profiles on various platforms.',
                aboutLastSentence: 'Let’s create something amazing together!',
                aboutFutureTitle: 'Future Plans',
                aboutFuturePlan: 'Climbing Route Tracker',
                aboutFutureParagraph:
                    'Create a web application that allows climbers to track and share their climbing routes, log their climbing achievements, and discover new climbing spots.',
                aboutCVButton: 'Download CV',
                aboutCheckWork: 'Check my work',
                aboutConnectTitle: "Let's Connect",
                skillsTitle: 'Skills',
                skillsParagraph:
                    'I possess the ability to create websites and applications, starting from the conceptualization phase through the design of user interfaces and interactive components.',
                'Programming Languages': 'Programming Languages',
                'Front-End & Frameworks': 'Front-End & Frameworks',
                'Back-End & Libraries': 'Back-End & Libraries',
                'Web Services & Database': 'Web Services & Database',
                'Mobile Apps': 'Mobile Apps',
                Testing: 'Testing',
                Design: 'Design',
                Tools: 'Tools',
                projectTitle: 'Projects',
                projectBtnMore: 'See more',
                projectBtnWeb: 'Website',
                projectBtnDiscover: 'Discover & Build',
                projectBtnCase: 'Case Study',
                filmifyText:
                    'Immerse yourself one more time in this Angular single page and responsive application rooted in existing RESTfulAPI and database using Angular-Material components.',
                chatAppText:
                    'Build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.',
                meetConnectText:
                    'A serverless, progressive web application using React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
                cinematixText:
                    'Immerse in a yourself in this single-page, responsive web application with React for an application called PopcornHub. Create an account and navigate through this user-friendly interace application and discover more about movies.',
                popcornhubText:
                    'Explore the world of movies with this RESTfulAPI, this backend application was crafted with Node.js, Express and MongoDB.',
                pokedexText:
                    'Embark on a journey through the world of Pokemon with this small application crafted using HTML, CSS and Javascript.',
                descriptionModal: 'Description',
                userStories: 'User Stories',
                keyFeatures: 'Key Features',
                technologies: 'Technologies',
                filmifyDescription:
                    'This Angular application using Angular Material interface for the PopcornHub REST API. Navigation allows user to manage profile, sort and set favorite movies. Designed for compatibility across devices.',
                chatAppDescription:
                    'Crafted with React Native, I built a chat app using React Native. This mobile app it’ dynamic platform that offers a chat interface using Gifted Chat, image sharing and location-sharing capabilities. Diving into mobile development with React Native, along with Expo and Google Firebase, we say goodbye to maintaing separate codebases for iOS and Android.',
                meetConnectDescription:
                    'This PWA application display events in different cities which are fetch from Google Calendar API. The whole idea of this project is to learn TTD (Test-Driven-Development), serverless function using AWS Lambda, how PWAs work and how to draw chart with Recharts.',
                cinematixDescription:
                    'Experience movie browsing in this intuitive, visually stunning and accessible across all devices. As a user you can unlock the following features: favorite movies, update your profile, and sorting and searching through the movie collection. Navigate with ease using our handy navigation bar, and the search input to find your desired movie.',
                popcornhubDescription:
                    'Use this RESTful API where you can discover information on movies, directors, genres and actors. As a user you can create your porfile to curate your favorite movies, add or remove them from your list, and explore detailed insights. PopcornhubAPI counts with a detailed documentation where you can check the endpoints from movie retrievals to user managment.',
                pokedexDescription:
                    'Using the power of the PokeAPI, the project loads a delightful list of Pokemon into your screen. You can explore the list of Pokemon, each Pokemon has detailed information awaiting for you to click. Clicking on the Pokemon will unfold a modal window revealing a picture and detail description of the choosen Pokemon. If you want to look for a specific Pokemon then you can use the handy search input field. Simply type the name of the Pokemon you seek and the application will guide you to your desired Pokemon. This application is the front-row seat to discover your favorite Pokemons.',
                filmifyUserStories: [
                    'As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.',
                    'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
                ],
                chatAppUserStories: [
                    'As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.',
                    'As a user, I want to be able to send messages to my friends and family members to exchange the latest news.',
                    'As a user, I want to send images to my friends to show them what I’m currently doing.',
                    'As a user, I want to share my location with my friends to show them where I am',
                    'As a user, I want to be able to read my messages offline so I can reread conversations at any time.',
                    'As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.',
                ],
                meetConnectUserStories: [
                    'As a user, I want to effortlessly access upcoming events.',
                ],
                cinematixUserStories: [
                    'As a user, I want to be able to access information about movies so that I can learn more about movies I’ve watched or am interested in.',
                    'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
                ],
                popcornhubUserStories: [
                    'As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I habve watched or am interested in.',
                    'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
                ],
                pokedexUserStories: [
                    'As a user, I want to be able to view a list of data, so I can quickly browse through the available information.',
                    'As a user, I want the option to see more details on demand, enabling me to access additional information about a specific item when I need it.',
                    'As a user, I want the ability to search for a specific pokemon, so I can easily find and access detailed information about a particular pokemon of interest.',
                ],
                filmifyKeyFeatures: [
                    'Welcome view where users will be able to either login or register an account.',
                    'Once authenticated, the user should view all movies.',
                    'Upon clicking on a particular movie, users will be taken to a single movie view, where additional movie details will be displayed.',
                    'The single movie view will contain a button when clicked takes the user to the director view, where detials about the director of that particular movie will be displayed',
                    'The single movie view will contain a button when clicked takes the user to the genre view, where detials about the genre of that particular movie will be displayed',
                ],
                chatAppKeyFeatures: [
                    'A page where users can enter their name and choose a background color for the chat screen before joining the chat.',
                    'A page displaying the conversation, as well as an input field and submit button.',
                    'The chat must provide users with two additional communication features: sending images and location data.',
                    'Data gets stored online and offline.',
                ],
                meetConnectKeyFeatures: [
                    'Filter events by city.',
                    'Show/hide event details.',
                    'Specify number of events.',
                    'Use the app when offline.',
                    'Add an app shortcut to the Home Screen.',
                    'Display chart visualizing event details.',
                ],
                cinematixKeyFeatures: [
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
                popcornhubKeyFeatures: [
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
                pokedexKeyFeatures: [
                    'Load data from an external source API',
                    'View a list of items',
                    'On user action, view details for that item.',
                ],
                caseStudy: 'Case Study:',
                overview: 'Overview',
                purpose: 'Purpose & Objective',
                duration: 'Duration',
                credits: 'Credits',
                tools: 'Tools',
                approach: 'Approach',
                improvements: 'Possible Improvements',
                conclusion: 'Conclusion',
                popcornhubOverview:
                    'Popcornhub is a RESTful API designed to integrate with Node.js, Express and MongoDB. Its primary functionality includes providing backend support for retrieving user data and movie information. The backend system operates on a database infrastructure, facilitating users to personalize their accounts by adding favorite movies and updating profile details such as username, password, email and birthday. This project is driven by the ambition to implement the complete MERN stack, thereby developing a comprehensive user interface and user experience. This will enable users to browse through movies, access detailed information about their selections.',
                popcornhubPurpose:
                    'Popcornhub is a project developed during the Career Foundry’s Full-Stack Web Development program. The objective was to create a dynamic, responsive, and immersive web application from the ground up, employing React for the frontend and constructing an API with Node.js, Express and MongoDB for the backend. This project served as an opportunity to showcase my skills and expertise, while also familiarizing myself with essential project requirements such as user stories and user flows.',
                popcornhubDuration:
                    'Popcornhub was developed over the course of one month, demanding signifcant time and attention to detail. This project presented challenges in mastering  various technologies, including Node.js, Express and MongoDB, as well as essential tools such as CORS, brcypt, passport.js, morgan, body-parser, and JSONWebToken.',
                popcornhubCredits:
                    'I developed this RESTful API as a foundation for future enhancements, enabling comprehensive display of movie information and user data. Throughout this project, I collaborated closely with my mentor and tutor from Career Foundry, leveraging their guidance and expertise.',
                popcornhubBackend:
                    'On the server side, I crafted a RESTful API using Node.js and Express, integrating with MongoDB, a non-relational database. The API’s HTTP endpoints leverage CRUD methods to efficiently retrieve movie and user data through standard HTTP requests, delivering results in JSON format. This integration is facilitated by Mongoose, ensuring through the business logic layer. Authentication and authorization are implemented through HTTP and JWT based protocols, an authorization JWT token is returned to the client. This process validates registered users and grants them Read, Delete, and Update permissions. While initially challenging, with persistence, mastering authorization mechanisms became clear. Prior to deployment, testing of API endpoints using API endpoints using Postman and documentation for a smooth deployment process. The RESTful API was successfully deployed using OnRender.',
                popcornhubFrontend:
                    'In the client-side development of the MERN stack project, following the backend construction, I proceeded to build the user interface, completing the project’s full functionality. Using the React library, I created a responsive single-page website, guided by the MVC design pattern. The interface encompasses distinct views, including login, signup, main, movie, profile view. The login and signup view feature user-friendly forms for registration and login, while the main view showcases a list of available movies. Additionally, the single movie view provides detailed information about the user-selected movie, enhancing the user experience. Transitioning to React presented initial challenges in understanding state management and comprehending data traversal across components, especially compared to traditional HTML, CSS and VanillaJS. To overcome this learning curve, I dedicated considerable effort to thoroughly studying React documentation. In my effort to understand the data flow throughout components, I implemented React context, with a specific focus on user authentication and movie data. This allowed for efficient management and sharing of data across various parts of the application.',
                popcornhubImprovements: [
                    'Enhance the user profile by integrating user photos and personalized recommendations based on liked movies.',
                    'Improve the registration and profile editing forms: incorporate a secondary password input to confirm accuracy and prevent typos. Implement a username availability check to ensure uniqueness.',
                    'Introduce a confirmation dialog prompt prior to account deletion for added security.',
                    'Upgrade movie filtering capabilities with advanced options, allowing users to filter by genre, actor, and director.',
                    'Integrate actor and director profiles, showcasing their respective filmography and the various movies they have been involved in.',
                ],
                popcornhubConclusion:
                    'Crafting this project was quite a testament to my journey as a Web Developer, making my first full-stack application. From conceptualizing abstract server code to crafting the database structures and materializing a user interface.One of my primary challenges I counter was mastering state management and navigating component data flow. This required understanding React’s state management and the intricacies of passing data between components. Through dedicated study and hands-on practice, I gradually developed in these areas, enabling me to build robust and responsive user interfaces. Another significant issue was implementing user authorization and authentication mechanisms. Understanding the complexities of securing user data and managing access rights. However, with perseverance and guidance from my tutor. I dedicated myself to the relevant documentation. Whenever I encounter obstacles beyond my expertise, I seek assistance from my mentor. Additionally, I recognized the critical importance of optimizing API calls for efficient data retrieval and user experience. Balancing performance and functionality, I improved my approach to API integration and prioritizing responsiveness. Ultimately, I successfully navigated these challenges and emerged with a fully functional web application that stands as a testament to my growth and proficiency as a Web Developer.',
                cinematixOverview:
                    'Cinematix is a web application crafted with the MERN stack (MongoDB, Express, React, and Node.js), crafted to enrich the user experience. It features both backend and frontend components, with the frontend leveraging React to deliver an interface for essential functionality like login, registration, account management, movie details, and search input. The backend hosts a database where movies are stored, empowering users to personalize their account by adding favorite movies and updating profile details such as username, password, email, and birthday. The culmination of these efforts is a refined interface that allows users to browse movies and access specific details about their selections, culminating in an immersive experience. Cinematix is the ideal app for movie enthusiasts.',
                cinematixPurpose:
                    'Cinematix is a project developed during the Career Foundry’s Full-Stack Web Development program. The objective was to create a dynamic, responsive, and immersive web application from the ground up, employing React for the frontend and constructing an API with Node.js, Express and MongoDB for the backend. This project served as an opportunity to showcase my skills and expertise, while also familiarizing myself with essential project requirements such as user stories and user flows. Through Cinematix, I not only demonstrated my expertise in web development but also my ability to meet the project expectations.',
                cinematixDuration:
                    'Cinematix was crafted over the course of one month, a project that demanded significant time and attention. The complexity for mastering technologies like React Hooks, Redux and Context, required dedicated effort to ensure integration and functionality. ',
                cinematixCredits:
                    'I created a React application that interacts with a movie API (Popcornhub API) I had previously developed, enabling the display of comprehensive movie information and user data. Throughout this project, I engaged in collaborative efforts with my mentor and tutor from CareerFoundry.',
                cinematixBackend:
                    'On the server side, I crafted a RESTful API using Node.js and Express, integrating with MongoDB, a non-relational database. The API’s HTTP endpoints leverage CRUD methods to efficiently retrieve movie and user data through standard HTTP requests, delivering results in JSON format. This integration is facilitated by Mongoose, ensuring through the business logic layer. Authentication and authorization are implemented through HTTP and JWT based protocols, an authorization JWT token is returned to the client. This process validates registered users and grants them Read, Delete, and Update permissions. While initially challenging, with persistence, mastering authorization mechanisms became clear. Prior to deployment, testing of API endpoints using API endpoints using Postman and documentation for a smooth deployment process. The RESTful API was successfully deployed using OnRender.',
                cinematixFrontend:
                    'In the client-side development of the MERN stack project, following the backend construction, I proceeded to build the user interface, completing the project’s full functionality. Using the React library, I created a responsive single-page website, guided by the MVC design pattern. The interface encompasses distinct views, including login, signup, main, movie, profile view. The login and signup view feature user-friendly forms for registration and login, while the main view showcases a list of available movies. Additionally, the single movie view provides detailed information about the user-selected movie, enhancing the user experience. Transitioning to React presented initial challenges in understanding state management and comprehending data traversal across components, especially compared to traditional HTML, CSS and VanillaJS. To overcome this learning curve, I dedicated considerable effort to thoroughly studying React documentation. In my effort to understand the data flow throughout components, I implemented React context, with a specific focus on user authentication and movie data. This allowed for efficient management and sharing of data across various parts of the application.',
                cinematixImprovements: [
                    'Enhance the user profile by integrating user photos and personalized recommendations based on liked movies.',
                    'Improve the registration and profile editing forms: incorporate a secondary password input to confirm accuracy and prevent typos. Implement a username availability check to ensure uniqueness.',
                    'Introduce a confirmation dialog prompt prior to account deletion for added security.',
                    'Upgrade movie filtering capabilities with advanced options, allowing users to filter by genre, actor, and director.',
                    'Integrate actor and director profiles, showcasing their respective filmography and the various movies they have been involved in.',
                ],
                cinematixConclusion:
                    'Crafting this project was quite a testament to my journey as a Web Developer, making my first full-stack application. From conceptualizing abstract server code to crafting the database structures and materializing a user interface.One of my primary challenges I counter was mastering state management and navigating component data flow. This required understanding React’s state management and the intricacies of passing data between components. Through dedicated study and hands-on practice, I gradually developed in these areas, enabling me to build robust and responsive user interfaces. Another significant issue was implementing user authorization and authentication mechanisms. Understanding the complexities of securing user data and managing access rights. However, with perseverance and guidance from my tutor. I dedicated myself to the relevant documentation. Whenever I encounter obstacles beyond my expertise, I seek assistance from my mentor. Additionally, I recognized the critical importance of optimizing API calls for efficient data retrieval and user experience. Balancing performance and functionality, I improved my approach to API integration and prioritizing responsiveness. Ultimately, I successfully navigated these challenges and emerged with a fully functional web application that stands as a testament to my growth and proficiency as a Web Developer. ',
                filmifyOverview:
                    'Filmify is a web application built with the MEAN stack (MongoDB, Express, Angular and Node,js) engineered to elevate the user experience. Integrating both backend and frontend components. On the front end, using Angular crafted functionalities such as login, registration, account management, and access to comprehensive movie details. The backend hosts a dynamic database with a vast collection of movies. This empowers users to curate their personal space within Filmify by adding favorite movies and updating profile details, including username, password, email and birthday. Filmify combines the latest tech with user-friendly design, offering a personalized cinematic experience.',
                filmifyPurpose:
                    'I developed this personal project as part of a CareerFoundry course to specialize in full-stack web development, with a focus on Angular. The objective was to build a responsive and captivating web application that provides users with inspiration and comprehensive details about various movements. The challenge centered around creating a RESTful API from scratch, establishing and linking a database, and unleashing the power of Angular to craft interactive interfaces. The project aimed to serve as an example for my portfolio and familiarize me with standard project requisites such as user stories and user flows.',
                filmifyDuration:
                    'Cinematix was crafted over the course of one month, a project that demanded significant time and attention. The complexity for mastering technologies like React Hooks, Redux and Context, required dedicated effort to ensure integration and functionality. ',
                filmifyCredits:
                    'Filmify took approximately a month and a half of my time, much more than my expectations. Navigating through Angular and TypeScript, both were new technologies for me, which required dedicated effort and a learning curve. Immersing myself in understanding Angular’s mechanics and TypeScript.',
                filmifyBackend:
                    'On the server side, I crafted a RESTful API using Node.js and Express, integrating with MongoDB, a non-relational database. The API’s HTTP endpoints leverage CRUD methods to efficiently retrieve movie and user data through standard HTTP requests, delivering results in JSON format. This integration is facilitated by Mongoose, ensuring through the business logic layer. Authentication and authorization are implemented through HTTP and JWT based protocols, an authorization JWT token is returned to the client. This process validates registered users and grants them Read, Delete, and Update permissions. While initially challenging, with persistence, mastering authorization mechanisms became clear. Prior to deployment, testing of API endpoints using API endpoints using Postman and documentation for a smooth deployment process. The RESTful API was successfully deployed using OnRender.',
                filmifyFrontend:
                    'Similar to the React client, I developed another client accessing the same API and database, this time utilizing Angular. This is a single-page, responsive web application with mostly identical functionality. In this version upon registration/login, there is a display of all the movies. Modal windows can be opened from this view to display details about a specific movie, such as description, actors, genre, and director, as well as to edit the user profile. Transitioning to Angular was quite a journey. Unlike React, Angular is a comprehensive framework rather than just a library, offering a plethora of pre-defined structures and built-in functionalities. However, as I delved deeper into its basic structure, it gradually became more comprehensible, facilitating a swift recreation of the client with a similar layout.',
                filmifyImprovements: [
                    'Enhance the user profile by integrating user photos and personalized recommendations based on liked movies.',
                    'Improve the registration and profile editing forms: incorporate a secondary password input to confirm accuracy and prevent typos. Implement a username availability check to ensure uniqueness.',
                    'Introduce a confirmation dialog prompt prior to account deletion for added security.',
                    'Upgrade movie filtering capabilities with advanced options, allowing users to filter by genre, actor, and director.',
                    'Integrate actor and director profiles, showcasing their respective filmography and the various movies they have been involved in.',
                ],
                filmifyConclusion:
                    'Concluding the Filmify project, transitioning from server code to polished user interfaces has been a satisfying achievement. Exploring React and Angular provided valuable learning experiences, with Angular being a new learning curve. Despite its complexity compared to React, delving into Angula’s structured framework was enlightening. Adopting Material design principles added complexity but clarity to layout creation. While I’m still learning Angular, its organized structure and workflow are promising. Moving forward, the lessons from Filmofy will guide future projects. This journey highlights the importance of adaptability, continuous learning, and thoughtful tool selection for effective project realization.',
                contactTitle: 'Drop me a message',
                contactParagraph1:
                    'I’m interested in new opportunities - especially in large projects. If you have a question or a request, just contact me using the form below. - or just send me an email to:',
                contactParagraph2:
                    '. I’m open for remote, freelance and full time roles.',
                footerTitle: 'Let’s connect',
                nameForm: 'Name',
                formMail: 'Email',
                formSubject: 'Subject',
                formMessage: 'Message',
            },
        },
        es: {
            translation: {
                navItem1: 'Inicio',
                navItem2: 'Sobre mi',
                navItem3: 'Destrezas',
                navItem4: 'Proyectos',
                navItem5: 'Contacto',
                homeTitle: 'Hola por ahí ',
                homeSubTitle1: 'Soy ',
                homeSubTitle2: ', desarrollador web certificado en JavaScript.',
                homeParagraph1:
                    'Soy una persona apasionada a la que le gusta comunicarse con las computadoras. Mi variada experiencia incluye puestos en administración de marketing, organización de eventos de catering, operaciones de supermercado en línea y arte del tatuaje como hobby.',
                homeParagraph2:
                    'Mi experiencia como estudiante de diseño multimedia, aporto una mezcla de habilidades de diseño y competencia técnica para el desarrollo web. Competente en JavaScript, especializado en React para front-end y Node.js para back-end, me destaco en la creación de integrado, sensible y totalmente funcional full-stack completamente funcionales.',
                homeIndustryText: 'Apasionado en industrias como: ',
                homeIndustry1: 'Escalar',
                homeIndustry2: 'Diseño',
                homeIndustry3: 'Sostenibilidad',
                homeIndustry4: 'Educación',
                homeIndustry5: 'Salud',
                homeIndustry6: 'Deporte',
                homeIndustry7: 'Productividad',
                homeMessage:
                    'busco trabajo de desarrollador web de tiempo completo.',
                aboutTitle: 'Sobre mi',
                aboutParagraph1:
                    'Hola, soy Thomas, un desarrollador web full-stack con una formación diversa que complementa mi conjunto de habilidades. En mis puestos anteriores, perfeccioné mis habilidades de resolución de problemas, especialmente a través de la experiencia práctica con herramientas como Excel. La elaboración de informes sobre bicicletas y la gestión de hojas de cuentas fueron sólo algunos de los retos que afronté.',
                aboutWhyCoding: '¿Porque programación?',
                aboutParagraph2:
                    'Para mí, la codificación representa posibilidades infinitas. Se trata de aceptar retos y el aprendizaje continuo. La emoción de resolver problemas y la satisfacción de ver cómo las soluciones cobran vida son lo que me motiva. Con cada nuevo proyecto, me empujo a aprender y crecer. a aprender y crecer.',
                aboutBeyond: 'Más allá de la interacción con las computadoras,',
                aboutParagraph3:
                    'Me apasiona la gravedad: escalar es mi principal afición, pero también me divierten el dibujo, los tatuajes, el yoga el ciclismo y los paseos por la naturaleza. El movimiento, tanto físico como mental, alimenta mi impulso.',
                aboutAsDeveloper: 'Como desarrollador web, ',
                aboutParagraph4:
                    'Me esfuerzo por crear aplicaciones web responsivas con diseños limpios que funcionen a la perfección en todos los dispositivos. Doy prioridad al diseño de interfaces intuitivas que sean fáciles de navegar y accesibles para todos los usuarios, garantizando todos.',
                aboutParagraph5:
                    'Aunque mi formación no sea "tecnológica", acepto con entusiasmo las nuevas tecnologías y la documentación.',
                aboutSeeking: 'Estoy buscando',
                aboutParagraph6:
                    'a role as a Junior Web Developer or collaboration opportunities in Climbing, Design, Education, Productivity, Wellness, Sport, Gastronomy, or Sustainability.',
                aboutParagraph7:
                    'Me cautivan los proyectos colaborativos y los retos de resolución de problemas, me motiva la superación de obstáculos y la mejora continua. Si estás interesado en colaborar, no dudes en ponerte en contacto conmigo a través de este',
                aboutContact: 'formulario',
                aboutParagraph8:
                    'o explore mis perfiles en varias plataformas.',
                aboutLastSentence: '¡Creemos algo juntos!',
                aboutFutureTitle: 'Planes futuros',
                aboutFuturePlan: 'Rastreador de vías de escalada',
                aboutFutureParagraph:
                    'Crear una aplicación web que permita a los escaladores seguir y compartir sus rutas de escalada, registrar sus logros y descubrir nuevos lugares de escalada',
                aboutCVButton: 'Descarga mi CV',
                aboutCheckWork: 'Revisa mi trabajo',
                aboutConnectTitle: 'Conectémonos',
                skillsTitle: 'Destrezas',
                skillsParagraph:
                    'Poseo la capacidad de crear sitios web y aplicaciones desde la fase de conceptualización hasta el diseño de interfaces de usuario y componentes interactivos.',
                'Programming Languages': 'Lenguajes de programación',
                'Front-End & Frameworks': 'Front-End & Frameworks',
                'Back-End & Libraries': 'Back-End & Libraries',
                'Web Services & Database': 'Servicios web y bases de datos',
                'Mobile Apps': 'Aplicaciones móviles',
                Testing: 'Testing',
                Design: 'Diseño',
                Tools: 'Herramientas',
                projectTitle: 'Proyectos',
                projectBtnMore: 'Ver más',
                projectBtnWeb: 'Sitio Web',
                projectBtnDiscover: 'Descubre y construye',
                projectBtnCase: 'Estudio de caso',
                filmifyText:
                    'Sumérgete una vez más en esta aplicación Angular de una sola página y responsive enraizada en RESTfulAPI y base de datos existentes usando componentes Angular-Material.',
                chatAppText:
                    'Construye una app de chat para dispositivos móviles usando React Native. La aplicación proporcionará a los usuarios una interfaz de chat y opciones para compartir imágenes y su ubicación',
                meetConnectText:
                    'Una aplicación web progresiva sin servidor utilizando React usando una técnica de desarrollo dirigido por pruebas (TDD). La aplicación utiliza la API de Google Calendar para obtener los próximos eventos.',
                cinematixText:
                    'Sumérgete en una tú mismo en esta aplicación web responsive de una sola página con React para una aplicación llamada PopcornHub. Crea una cuenta y navega a través de esta aplicación interace fácil de usar y descubre más sobre películas.',
                popcornhubText:
                    'Explora el mundo de las películas con esta RESTfulAPI, esta aplicación backend fue elaborada con Node.js, Express y MongoDB.',
                pokedexText:
                    'Embárcate en un viaje por el mundo de Pokemon con esta pequeña aplicación creada con HTML, CSS y Javascript',
                descriptionModal: 'Descripción',
                userStories: 'Historia de Usuario',
                keyFeatures: 'Características principales',
                technologies: 'Tecnologías',
                filmifyDescription:
                    'Esta aplicación Angular usando Angular Material interfaz para la API REST PopcornHub. La navegación permite al usuario gestionar el perfil, ordenar y establecer películas favoritas. Diseñado para la compatibilidad a través de dispositivos.',
                chatAppDescription:
                    'Crafted with React Native, construí una aplicación de chat usando React Native. Esta aplicación móvil es una plataforma dinámica que ofrece una interfaz de chat utilizando Gifted Chat, intercambio de imágenes y capacidades para compartir la ubicación. Al sumergirnos en el desarrollo móvil con React Native, junto con Expo y Google Firebase, decimos adiós a mantener bases de código separadas para iOS y Android',
                meetConnectDescription:
                    'Esta aplicación PWA muestra eventos en diferentes ciudades que son fetch de Google Calendar API. La idea de este proyecto es aprender TTD (Test-Driven-Development), funciones sin servidor usando AWS Lambda, cómo funcionan las PWAs y cómo dibujar gráficos con Recharts.',
                cinematixDescription:
                    'La experiencia de navegación de películas en este intuitivo, visualmente impresionante y accesible a través de todos los dispositivos. Como usuario puedes desbloquear las siguientes funciones: películas favoritas, actualizar tu perfil y ordenar y buscar en la colección de películas. Navega con facilidad utilizando nuestra práctica barra de navegación, y la entrada de búsqueda para encontrar la película deseada',
                popcornhubDescription:
                    'Utiliza esta API RESTful donde podrás descubrir información sobre películas, directores, géneros y actores. Como usuario puedes crear tu porfile para conservar tus películas favoritas, añadirlas o eliminarlas de tu lista y explorar información detallada. PopcornhubAPI cuenta con una documentación detallada donde puedes consultar los endpoints desde la recuperación de películas hasta la gestión de usuarios',
                pokedexDescription:
                    'Usando el poder de la PokeAPI, el proyecto carga una deliciosa lista de Pokemon en tu pantalla. Puedes explorar la lista de Pokemon, cada Pokemon tiene información detallada esperando a que hagas clic. Al hacer clic en el Pokemon se desplegará una ventana modal que revela una imagen y una descripción detallada del Pokemon elegido. Si quieres buscar un Pokemon en concreto, puedes utilizar el práctico campo de búsqueda. Simplemente escribe el nombre del Pokemon que buscas y la aplicación te guiará hasta el Pokemon deseado. Esta aplicación es el asiento de primera fila para descubrir tus Pokemons favoritos',
                filmifyUserStories: [
                    'Como usuario, quiero poder recibir información sobre películas, directores y géneros para poder aprender más sobre las películas que he visto o me interesan',
                    'Como usuario, quiero poder crear un perfil para poder guardar datos sobre mis películas favoritas',
                ],
                chatAppUserStories: [
                    'Como nuevo usuario, quiero poder entrar fácilmente en una sala de chat para poder empezar a hablar rápidamente con mis amigos y familiares.',
                    'Como usuario, quiero poder enviar mensajes a mis amigos y familiares para intercambiar las últimas noticias',
                    'Como usuario, quiero enviar imágenes a mis amigos para mostrarles lo que estoy haciendo',
                    'Como usuario, quiero compartir mi ubicación con mis amigos para mostrarles dónde estoy',
                    'Como usuario, quiero poder leer mis mensajes sin conexión para poder releer las conversaciones en cualquier momento',
                    'Como usuario con discapacidad visual, quiero utilizar una aplicación de chat que sea compatible con un lector de pantalla para poder interactuar con una interfaz de chat',
                ],
                meetConnectUserStories: [
                    'Como usuario, quiero acceder sin esfuerzo a los próximos eventos',
                ],
                cinematixUserStories: [
                    'Como usuario, quiero poder acceder a información sobre películas para saber más sobre las películas que he visto o me interesan',
                    'Como usuario, quiero poder crear un perfil para poder guardar datos sobre mis películas favoritas',
                ],
                popcornhubUserStories: [
                    'Como usuario, quiero poder recibir información sobre películas, directores y géneros para saber más sobre las películas que he visto o me interesan',
                    'Como usuario, quiero poder crear un perfil para poder guardar datos sobre mis películas favoritas.',
                ],
                pokedexUserStories: [
                    'Como usuario, quiero poder ver una lista de datos, para poder navegar rápidamente por la información disponible',
                    'Como usuario, quiero tener la opción de ver más detalles bajo demanda, lo que me permite acceder a información adicional sobre un elemento específico cuando lo necesito.',
                    'Como usuario, quiero tener la posibilidad de buscar un pokémon específico, para poder encontrar y acceder fácilmente a información detallada sobre un pokémon concreto que me interese',
                ],
                filmifyKeyFeatures: [
                    'Vista de bienvenida donde los usuarios podrán iniciar sesión o registrar una cuenta',
                    'Una vez autenticado, el usuario podrá ver todas las películas',
                    'Al hacer clic en una película en particular, los usuarios serán llevados a una vista de película única, donde se mostrarán detalles adicionales de la película',
                    'La vista de una sola película contendrá un botón que, al pulsarlo, llevará al usuario a la vista del director, donde se mostrarán datos sobre el director de esa película en particular',
                    'La vista de una sola película contendrá un botón que al pulsarlo llevará al usuario a la vista de género, donde se mostrarán detalles sobre el género de esa película en particular',
                ],
                chatAppKeyFeatures: [
                    'Una página en la que los usuarios pueden introducir su nombre y elegir un color de fondo para la pantalla de chat antes de unirse a la conversación.',
                    'Una página que muestra la conversación, así como un campo de entrada y un botón de envío.',
                    'El chat debe proporcionar a los usuarios dos funciones de comunicación adicionales: envío de imágenes y datos de localización.',
                    'Los datos se almacenan online y offline.',
                ],
                meetConnectKeyFeatures: [
                    'Filtrar eventos por ciudad.',
                    'Mostrar/ocultar detalles del evento.',
                    'Especificar el número de eventos.',
                    'Usar la aplicación sin conexión.',
                    'Añadir un acceso directo a la aplicación en la pantalla de inicio.',
                    'Mostrar un gráfico con los detalles del evento.',
                ],
                cinematixKeyFeatures: [
                    'Vista principal: Devuelve TODAS las películas al usuario',
                    'Vista principal: Filtrar la lista de películas con una función de búsqueda.',
                    'Vista principal: Posibilidad de seleccionar una película para ver los detalles',
                    'Vista principal: Posibilidad de cerrar sesión',
                    'Vista principal: Posibilidad de navegar al perfil',
                    'Vista de una sola película: Devuelve al usuario los datos de una sola película',
                    'Vista de una película: Permite a los usuarios añadir una película a su lista de favoritos.',
                    'Vista de inicio de sesión: Permite a los usuarios iniciar sesión con un nombre de usuario y una contraseña',
                    'Vista de registro: Permite a los nuevos usuarios registrarse',
                    'Vista de perfil: Muestra los detalles de registro del usuario',
                    'Vista de perfil: Permite a los usuarios actualizar su información',
                    'Vista de perfil: Muestra las películas favoritas',
                    'Vista de perfil: Permite a los usuarios eliminar una película de su lista de favoritos.',
                    'Vista del perfil: Permite a los usuarios existentes darse de baja.',
                ],
                popcornhubKeyFeatures: [
                    'Devolver una lista de todas las películas al usuario',
                    'Devuelve al usuario datos (descripción, género, director, imageURL) sobre una película por título.',
                    'Devuelve datos sobre un género (descripción) por nombre/título (por ejemplo: Thriller)',
                    'Devuelve datos sobre un director (biografía, año de nacimiento, año de fallecimiento) por nombre',
                    'Permitir el registro de nuevos usuarios',
                    'Permitir a los usuarios actualizar su información de usuario (nombre de usuario, contraseña, correo electrónico, fecha de nacimiento)',
                    'Permitir a los usuarios añadir una película a su lista de favoritos',
                    'Permitir a los usuarios eliminar una película de su lista de favoritos',
                    'Permitir que los usuarios se den de baja',
                ],
                pokedexKeyFeatures: [
                    'Cargar datos de una fuente externa API',
                    'Ver una lista de elementos',
                    'En la acción del usuario, ver los detalles de ese elemento',
                ],
                caseStudy: 'Estudio de Caso:',
                overview: 'Resumen',
                purpose: 'Propósito y objetivo',
                duration: 'Duración',
                tools: 'Herramientas',
                credits: 'Créditos',
                approach: 'Enfoque',
                improvements: 'Posibles mejoras',
                conclusion: 'Conclusión',
                popcornhubOverview:
                    'Popcornhub es una RESTful API diseñada para integrarse con Node.js, Express y MongoDB. Su funcionalidad principal incluye proporcionar soporte backend para recuperar datos de usuario e información de películas. El sistema backend opera sobre una infraestructura de base de datos, facilitando a los usuarios personalizar sus cuentas añadiendo películas favoritas y actualizando detalles del perfil como el nombre de usuario, la contraseña, el correo electrónico y la fecha de cumpleaños. Este proyecto está impulsado por la ambición de implantar la pila MERN completa, desarrollando así una interfaz de usuario y una experiencia de usuario integrales. Esto permitirá a los usuarios navegar por las películas, acceder a información detallada sobre sus selecciones',
                popcornhubPurpose:
                    'Popcornhub es un proyecto desarrollado durante el programa de Desarrollo Web Full-Stack de Career Foundry. El objetivo era crear una aplicación web dinámica, responsive e inmersiva desde cero, empleando React para el frontend y construyendo una API con Node.js, Express y MongoDB para el backend. Este proyecto sirvió como una oportunidad para mostrar mis habilidades y experiencia, mientras que también me familiarizo con los requisitos esenciales del proyecto, tales como historias de usuario y flujos de usuario.',
                popcornhubDuration:
                    'Popcornhub se desarrolló a lo largo de un mes, lo que exigió mucho tiempo y atención al detalle. Este proyecto presentó retos en el dominio de varias tecnologías, incluyendo Node.js, Express y MongoDB, así como herramientas esenciales como CORS, brcypt, passport.js, morgan, body-parser, y JSONWebToken',
                popcornhubCredits:
                    'Desarrollé esta API RESTful como base para futuras mejoras, permitiendo una visualización completa de la información de la película y los datos del usuario. A lo largo de este proyecto, colaboré estrechamente con mi mentor y tutor de Career Foundry, aprovechando su orientación y experiencia.',
                popcornhubBackend:
                    'En cuanto al servidor, he creado una API RESTful con Node.js y Express, que se integra con MongoDB, una base de datos no relacional. Los puntos finales HTTP de la API aprovechan los métodos CRUD para recuperar eficazmente los datos de las películas y de los usuarios a través de peticiones HTTP estándar, entregando los resultados en formato JSON. Esta integración es facilitada por Mongoose, asegurando a través de la capa de lógica de negocio. La autenticación y autorización se implementan a través de protocolos basados en HTTP y JWT, un token JWT de autorización se devuelve al cliente. Este proceso valida a los usuarios registrados y les otorga permisos de Lectura, Borrado y Actualización. Aunque al principio supuso un reto, con la persistencia se hizo evidente el dominio de los mecanismos de autorización. Antes del despliegue, se probaron los puntos finales de la API utilizando Postman y documentación para un proceso de despliegue sin problemas. La API RESTful se desplegó con éxito utilizando OnRender',
                popcornhubFrontend:
                    'En el desarrollo del lado del cliente del proyecto MERN stack, tras la construcción del backend, procedí a construir la interfaz de usuario, completando toda la funcionalidad del proyecto. Utilizando la biblioteca React, creé un sitio web responsivo de una sola página, guiado por el patrón de diseño MVC. La interfaz abarca distintas vistas, incluyendo login, signup, main, movie, profile view. Las vistas de inicio de sesión y registro incluyen formularios fáciles de usar para registrarse e iniciar sesión, mientras que la vista principal muestra una lista de las películas disponibles. Además, la vista de película individual proporciona información detallada sobre la película seleccionada por el usuario, lo que mejora su experiencia. La transición a React presentó desafíos iniciales en la comprensión de la gestión de estados y la comprensión de datos a través de componentes, especialmente en comparación con HTML tradicional, CSS y VanillaJS. Para superar esta curva de aprendizaje, dediqué un esfuerzo considerable a estudiar a fondo la documentación de React. En mi esfuerzo por comprender el flujo de datos a través de los componentes, implementé React context, con un enfoque específico en la autenticación de usuarios y los datos de películas. Esto permitió una gestión eficiente y el intercambio de datos a través de diversas partes de la aplicación',
                popcornhubImprovements: [
                    'Mejorar el perfil del usuario integrando sus fotos y recomendaciones personalizadas basadas en las películas que le gustan',
                    'Mejorar los formularios de registro y edición de perfil: incorporar una contraseña secundaria para confirmar la exactitud y evitar errores tipográficos. Implementar una comprobación de la disponibilidad del nombre de usuario para garantizar su unicidad',
                    'Introducir un diálogo de confirmación antes de eliminar una cuenta para mayor seguridad',
                    'Actualizar las capacidades de filtrado de películas con opciones avanzadas, permitiendo a los usuarios filtrar por género, actor y director',
                    'Integrar perfiles de actores y directores, mostrando su respectiva filmografía y las diversas películas en las que han participado',
                ],
                popcornhubConclusion:
                    'La creación de este proyecto ha sido todo un testimonio de mi trayectoria como desarrollador web al crear mi primera aplicación completa. Desde la conceptualización del código abstracto del servidor hasta la elaboración de las estructuras de la base de datos y la materialización de una interfaz de usuario. Esto requería entender la gestión de estados de React y las complejidades de pasar datos entre componentes. A través del estudio dedicado y la práctica, me desarrollé gradualmente en estas áreas, lo que me permitió construir interfaces de usuario robustas y sensibles. Otra cuestión importante fue la implementación de mecanismos de autorización y autenticación de usuarios. Comprendí la complejidad de proteger los datos de los usuarios y gestionar los derechos de acceso. Sin embargo, con perseverancia y la orientación de mi tutor. Me dediqué a estudiar la documentación pertinente. Siempre que encuentro obstáculos que van más allá de mis conocimientos, busco la ayuda de mi tutor. Además, reconocí la importancia crítica de optimizar las llamadas a la API para una recuperación de datos y una experiencia de usuario eficientes. Al equilibrar rendimiento y funcionalidad, mejoré mi enfoque de la integración de API y di prioridad a la capacidad de respuesta. Al final, superé con éxito estos retos y conseguí una aplicación web totalmente funcional que es testimonio de mi crecimiento y competencia como desarrollador web.',
                cinematixOverview:
                    'Cinematix es una aplicación web creada con la pila MERN (MongoDB, Express, React y Node.js), diseñada para enriquecer la experiencia del usuario. Cuenta con componentes de backend y frontend, con el frontend aprovechando React para ofrecer una interfaz para la funcionalidad esencial como inicio de sesión, registro, gestión de cuentas, detalles de la película, y la entrada de búsqueda. El backend alberga una base de datos donde se almacenan las películas, lo que permite a los usuarios personalizar su cuenta añadiendo sus películas favoritas y actualizando los datos de su perfil, como el nombre de usuario, la contraseña, el correo electrónico y la fecha de cumpleaños. La culminación de estos esfuerzos es una interfaz refinada que permite a los usuarios navegar por las películas y acceder a detalles específicos sobre sus selecciones, culminando en una experiencia inmersiva. Cinematix es la aplicación ideal para los aficionados al cine.',
                cinematixPurpose:
                    'Cinematix es un proyecto desarrollado durante el programa de Desarrollo Web Full-Stack de Career Foundry. El objetivo era crear una aplicación web dinámica, responsive e inmersiva desde cero, empleando React para el frontend y construyendo una API con Node.js, Express y MongoDB para el backend. Este proyecto sirvió como una oportunidad para mostrar mis habilidades y experiencia, mientras que también me familiaricé con los requisitos esenciales del proyecto, tales como historias de usuarios y flujos de usuarios. A través de Cinematix, no solo demostré mi experiencia en desarrollo web, sino también mi capacidad para cumplir las expectativas del proyecto',
                cinematixDuration:
                    'Cinematix se creó en el transcurso de un mes, un proyecto que exigió mucho tiempo y atención. La complejidad para dominar tecnologías como React Hooks, Redux y Context, requirió un esfuerzo dedicado para garantizar la integración y la funcionalidad.',
                cinematixCredits:
                    'Creé una aplicación React que interactúa con una API de películas (Popcornhub API) que había desarrollado previamente, permitiendo la visualización de información completa de películas y datos de usuario. A lo largo de este proyecto, colaboré con mi mentor y tutor de CareerFoundry',
                cinematixBackend:
                    'En cuanto al servidor, he creado una API RESTful con Node.js y Express, que se integra con MongoDB, una base de datos no relacional. Los puntos finales HTTP de la API aprovechan los métodos CRUD para recuperar eficazmente los datos de las películas y los usuarios a través de solicitudes HTTP estándar, entregando los resultados en formato JSON. Esta integración es facilitada por Mongoose, asegurando a través de la capa de lógica de negocio. La autenticación y autorización se implementan a través de protocolos basados en HTTP y JWT, un token JWT de autorización se devuelve al cliente. Este proceso valida a los usuarios registrados y les otorga permisos de Lectura, Borrado y Actualización. Aunque al principio supuso un reto, con la persistencia se hizo evidente el dominio de los mecanismos de autorización. Antes del despliegue, se probaron los puntos finales de la API utilizando Postman y documentación para un proceso de despliegue sin problemas. La API RESTful se desplegó con éxito utilizando OnRender',
                cinematixFrontend:
                    'En el desarrollo del lado del cliente del proyecto MERN stack, tras la construcción del backend, procedí a construir la interfaz de usuario, completando toda la funcionalidad del proyecto. Utilizando la biblioteca React, creé un sitio web responsivo de una sola página, guiado por el patrón de diseño MVC. La interfaz abarca distintas vistas, incluyendo login, signup, main, movie, profile view. Las vistas de inicio de sesión y registro incluyen formularios fáciles de usar para registrarse e iniciar sesión, mientras que la vista principal muestra una lista de las películas disponibles. Además, la vista de película individual proporciona información detallada sobre la película seleccionada por el usuario, lo que mejora su experiencia. La transición a React presentó desafíos iniciales en la comprensión de la gestión de estados y la comprensión de datos a través de componentes, especialmente en comparación con HTML tradicional, CSS y VanillaJS. Para superar esta curva de aprendizaje, dediqué un esfuerzo considerable a estudiar a fondo la documentación de React. En mi esfuerzo por comprender el flujo de datos a través de los componentes, implementé React context, con un enfoque específico en la autenticación de usuarios y los datos de películas. Esto permitió una gestión eficiente y el intercambio de datos a través de diversas partes de la aplicación',
                cinematixImprovements: [
                    'Mejorar el perfil del usuario integrando sus fotos y recomendaciones personalizadas basadas en las películas que le gustan',
                    'Mejorar los formularios de registro y edición de perfil: incorporar una contraseña secundaria para confirmar la exactitud y evitar errores tipográficos. Implementar una comprobación de la disponibilidad del nombre de usuario para garantizar su unicidad',
                    'Introducir un diálogo de confirmación antes de eliminar una cuenta para mayor seguridad',
                    'Actualizar las capacidades de filtrado de películas con opciones avanzadas, permitiendo a los usuarios filtrar por género, actor y director',
                    'Integrar perfiles de actores y directores, mostrando su respectiva filmografía y las diversas películas en las que han participado',
                ],
                cinematixConclusion:
                    'La creación de este proyecto ha sido todo un testimonio de mi trayectoria como desarrollador web al crear mi primera aplicación completa. Desde la conceptualización del código abstracto del servidor hasta la elaboración de las estructuras de la base de datos y la materialización de una interfaz de usuario. Esto requería entender la gestión de estados de React y las complejidades de pasar datos entre componentes. A través del estudio dedicado y la práctica, me desarrollé gradualmente en estas áreas, lo que me permitió construir interfaces de usuario robustas y sensibles. Otra cuestión importante fue la implementación de mecanismos de autorización y autenticación de usuarios. Comprendí la complejidad de proteger los datos de los usuarios y gestionar los derechos de acceso. Sin embargo, con perseverancia y la orientación de mi tutor. Me dediqué a estudiar la documentación pertinente. Siempre que encuentro obstáculos que van más allá de mis conocimientos, busco la ayuda de mi tutor. Además, reconocí la importancia crítica de optimizar las llamadas a la API para una recuperación de datos y una experiencia de usuario eficientes. Al equilibrar rendimiento y funcionalidad, mejoré mi enfoque de la integración de API y di prioridad a la capacidad de respuesta. Al final, superé con éxito estos retos y conseguí una aplicación web totalmente funcional que es un testimonio de mi crecimiento y competencia como desarrollador web.',
                filmifyOverview:
                    'Filmify es una aplicación web construida con la pila MEAN (MongoDB, Express, Angular y Node,js) diseñada para elevar la experiencia del usuario. Integrando componentes de backend y frontend. En el front-end, mediante Angular, se han creado funcionalidades como el inicio de sesión, el registro, la gestión de cuentas y el acceso a los detalles completos de las películas. El backend alberga una base de datos dinámica con una amplia colección de películas. Esto permite a los usuarios crear su espacio personal en Filmify añadiendo sus películas favoritas y actualizando los datos de su perfil, como el nombre de usuario, la contraseña, el correo electrónico y la fecha de nacimiento. Filmify combina lo último en tecnología con un diseño fácil de usar, ofreciendo una experiencia cinematográfica personalizada',
                filmifyPurpose:
                    'Desarrollé este proyecto personal como parte de un curso de CareerFoundry para especializarme en desarrollo web full-stack, con foco en Angular. El objetivo era construir una aplicación web responsive y cautivadora que proporcionara a los usuarios inspiración y detalles exhaustivos sobre diversos movimientos. El reto se centró en crear una API RESTful desde cero, establecer y vincular una base de datos y dar rienda suelta a la potencia de Angular para crear interfaces interactivas. El proyecto pretendía servir de ejemplo para mi cartera y familiarizarme con los requisitos estándar de los proyectos, como las historias de usuario y los flujos de usuario',
                filmifyCredits:
                    'Creé una aplicación React que interactúa con una API de películas (Popcornhub API) que había desarrollado previamente, permitiendo la visualización de información completa de películas y datos de usuario. A lo largo de este proyecto, colaboré con mi mentor y tutor de CareerFoundry',
                filmifyBackend:
                    'En cuanto al servidor, he creado una API RESTful con Node.js y Express, que se integra con MongoDB, una base de datos no relacional. Los puntos finales HTTP de la API aprovechan los métodos CRUD para recuperar eficazmente los datos de las películas y los usuarios a través de solicitudes HTTP estándar, entregando los resultados en formato JSON. Esta integración es facilitada por Mongoose, asegurando a través de la capa de lógica de negocio. La autenticación y autorización se implementan a través de protocolos basados en HTTP y JWT, un token JWT de autorización se devuelve al cliente. Este proceso valida a los usuarios registrados y les otorga permisos de Lectura, Borrado y Actualización. Aunque al principio supuso un reto, con la persistencia se hizo evidente el dominio de los mecanismos de autorización. Antes del despliegue, se probaron los puntos finales de la API utilizando Postman y documentación para un proceso de despliegue sin problemas. La API RESTful se desplegó con éxito utilizando OnRender',
                filmifyFrontend:
                    'Similar al cliente React, desarrollé otro cliente accediendo a la misma API y base de datos, esta vez utilizando Angular. Se trata de una aplicación web responsiva de una sola página con una funcionalidad prácticamente idéntica. En esta versión, al registrarse o iniciar sesión, se muestran todas las películas. Se pueden abrir ventanas modales desde esta vista para mostrar detalles sobre una película específica, como la descripción, los actores, el género y el director, así como para editar el perfil del usuario. La transición a Angular fue todo un viaje. A diferencia de React, Angular es un framework completo más que una simple librería, que ofrece una plétora de estructuras predefinidas y funcionalidades integradas. Sin embargo, a medida que profundizaba en su estructura básica, poco a poco se fue haciendo más comprensible, facilitando una rápida recreación del cliente con un diseño similar',
                filmifyImprovements: [
                    'Mejorar el perfil del usuario integrando sus fotos y recomendaciones personalizadas basadas en las películas que le gustan',
                    'Mejorar los formularios de registro y edición de perfil: incorporar una contraseña secundaria para confirmar la exactitud y evitar errores tipográficos. Implementar una comprobación de la disponibilidad del nombre de usuario para garantizar su unicidad',
                    'Introducir un diálogo de confirmación antes de eliminar una cuenta para mayor seguridad',
                    'Actualizar las capacidades de filtrado de películas con opciones avanzadas, permitiendo a los usuarios filtrar por género, actor y director',
                    'Integrar perfiles de actores y directores, mostrando sus respectivas filmografías y las diversas películas en las que han participado.',
                ],
                filmifyConclusion:
                    'Concluir el proyecto Filmify, pasando de código de servidor a interfaces de usuario pulidas ha sido un logro satisfactorio. Explorar React y Angular proporcionó valiosas experiencias de aprendizaje, siendo Angular una nueva curva de aprendizaje. A pesar de su complejidad en comparación con React, profundizar en el marco estructurado de Angular fue esclarecedor. Adoptar los principios de diseño Material añadió complejidad pero claridad a la creación de diseños. Aunque todavía estoy aprendiendo Angular, su estructura organizada y flujo de trabajo son prometedores. De cara al futuro, las lecciones de Filmofy servirán de guía para futuros proyectos. Este viaje pone de relieve la importancia de la adaptabilidad, el aprendizaje continuo y la selección meditada de herramientas para la realización eficaz de los proyectos',
                contactTitle: 'Escríbeme un mensaje',
                contactParagraph1:
                    'Estoy interesado en nuevas oportunidades, especialmente en grandes proyectos. Si tienes alguna pregunta o solicitud, ponte en contacto conmigo a través del siguiente formulario. - o envíeme un correo electrónico a:',
                contactParagraph2:
                    '. Estoy abierto a puestos remotos, autónomos y a tiempo completo',
                footerTitle: 'Conectémonos',
                formName: 'Nombre',
                formMail: 'Mail',
                formSubject: 'Tema',
                formMessage: 'Mensaje',
            },
        },
    },
});

export default i18n;
