import Img2 from '../assets/photos/climb.jpeg';
import { futurePlanStack } from '../data';

const About = () => {
    const downloadCV = () => {
        fetch('CVThomasPrayon.pdf').then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let anchorLink = document.createElement('a');
                anchorLink.href = fileURL;
                anchorLink.download = 'CVThomasPrayon.pdf';
                anchorLink.click();
            });
        });
    };

    return (
        <section
            className='bg-white align-element sm:py-20 border-b-2 border-gray-700 xs:py-12 dark:bg-gray-600 animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out font-roboto'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 xs:p-8 dark:text-white'>
                <div className='md:order-2 xs:flex xs:flex-col xs:justify-center md:justify-start animate-fade-down animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                    <h1 className='text-3xl font-bold xs:text-center sm:text-start xs:mb-5 sm:mb-3 font-mono'>
                        About me
                    </h1>
                    <p className='py-3 leading-7'>
                        Hi! I’m Thomas, a full-stack web developer with skills
                        cultivated throughout diverse experience in economics,
                        multimedia design, and even tattooing. Now I’m eagerly
                        seeking my inaugural role in web development. My journey
                        started as a junior administrator role, manager of a
                        catering service, and overseeing delivery riders for an
                        online supermarket chain.
                    </p>
                    <p className='py-3 leading-7'>
                        These experiences have shaped me into a dynamic
                        problem-solver, capable of navigating different
                        challenges. Beyond talking to computers, my passion
                        involves gravity and the vertical realm. Climbing is my
                        main hobby from bouldering to rope ascents. I find equal
                        joy by drawing and tattooing, complemented by yoga,
                        cycling and nature strolls. I thrive on movement, not
                        just physically but also mentally – a quality that
                        aligns with web development.
                    </p>
                    <p className='py-3 leading-7'>
                        While my background may not scream ‘tech’, I’m quite
                        enthusiastic for the digital realm. I embrace new
                        technologies, applications, and their documentation. The
                        world of programming, with its collaborative projects
                        and problem-solving efforts, captivates me. The
                        satisfaction for overcoming challenges fuels my drive to
                        improve. If you are keen on working together, feel free
                        to reach out through this{' '}
                        <a
                            href='#contact'
                            className='text-sky-500 font-bold underline'
                        >
                            form
                        </a>{' '}
                        or explore my profiles on various platforms.
                    </p>
                </div>
                <div className='sm:flex sm:flex-col sm:justify-start sm:items-center h-full w-full pt-2 px-5'>
                    <div className='xs:hidden sm:flex sm:w-90 sm:h-96 lg:w-96 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] border-4 border-sky-500 hover:shadow-none  animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                        <img
                            src={Img2}
                            alt='Me climbing a boulder'
                            className='object-cover w-full h-full rounded-lg hover:opacity-95'
                        />
                    </div>
                    <div className='flex justify-center  pt-10'>
                        <button
                            onClick={downloadCV}
                            className=' relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                        >
                            <span className='xs:text-xs sm:text-base relative px-4 text-center xs:py-3.5 sm:py-2.5  transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Download CV
                            </span>
                        </button>
                        <a
                            href='#projects'
                            className='  relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                        >
                            <span className='xs:text-xs sm:text-base relative px-4 text-center xs:py-3.5 sm:py-2.5 transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Check my work
                            </span>
                        </a>
                    </div>
                    <div className='sm:flex sm:w-90 lg:w-96 animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                        <div className='mt-5 sm:mt-10 p-5 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.5)] bg-slate-200 dark:bg-slate-500'>
                            <h1 className='text-2xl text-center'>
                                Future Plans
                            </h1>
                            <h1 className='text-xl text-center mt-2'>
                                Climbing Route Tracker
                            </h1>
                            <p className='sm:text-sm md:text-base my-5'>
                                Create a web application that allows climbers to
                                track and share their climbing routes, log their
                                climbing achievements, and discover new climbing
                                spots.
                            </p>
                            <p className='sm:text-base md:text-lg my-2 text-center'>
                                Tech Stack
                            </p>
                            <ul className='flex flex-wrap justify-center'>
                                {futurePlanStack.map((stack) => {
                                    const { id, tool } = stack;
                                    return (
                                        <li key={id} className='mx-4'>
                                            {tool}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
