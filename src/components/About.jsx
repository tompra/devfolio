import Img2 from '../assets/photos/climb.jpeg';
import { futurePlanStack } from '../data';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

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
            className='bg-white align-element sm:py-20 border-b-2 border-gray-700 xs:py-12 dark:bg-gray-600 animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out font-lato'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 xs:p-8 dark:text-white'>
                <div className='md:order-2 xs:flex xs:flex-col xs:justify-center md:justify-start animate-fade-down animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                    <h1 className='text-3xl xs:text-center sm:text-start xs:mb-5 sm:mb-3 font-lato font-bold'>
                        About me
                    </h1>
                    <p className='py-3 leading-7 font-lato'>
                        Hey there, I’m Thomas, a full-stack web developer with a
                        diverse background that complements my skill set. In my
                        previous positions, I refined my problem-solving skills,
                        especially through hands-on experience with low-code
                        tools like Excel. Crafting bike reports and managing
                        account sheets were just a couple of the challenges I
                        tackled.
                    </p>
                    <p className='py-3 leading-7'>
                        <strong>Why coding?</strong> To me, coding represents
                        endless possibilities. It’s about embracing challenges
                        and continuous learning. The thrill of problem-solving
                        and the satisfaction of seeing solutions come to life
                        are what drive me. With each new project, I’ve pushed
                        myself to learn and grow.
                    </p>{' '}
                    <p className='py-3 leading-7'>
                        <strong>Beyond interacting with computers,</strong> I’m
                        passionate about gravity - climbing is my primary hobby
                        but I also find joy in drawing, tattooing, yoga,
                        cycling, and nature strolls. Movement, both physical and
                        mental, fuels my drive.
                    </p>{' '}
                    <p className='py-3 leading-7'>
                        <strong>As a web developer,</strong> I strive to create
                        responsive web apps with clean layouts that function
                        seamlessly across all devices. I prioritize designing
                        intuitive interfaces that are easy to navigate and
                        accessible to all users, ensuring usability for
                        everyone.
                    </p>
                    <p className='py-3 leading-7'>
                        While my background may not scream ‘tech’, I eagerly
                        embrace new technologies and documentation.{' '}
                        <strong> I&apos;m seeking </strong> a role as a Junior
                        Web Developer or collaboration opportunities in
                        Climbing, Design, Education, Productivity, Wellness,
                        Sport, Gastronomy, or Sustainability.
                    </p>
                    <p className='py-3 leading-7'>
                        I&apos;m captivated by collaborative projects and
                        problem-solving challenges, motivated by overcoming
                        obstacles and continuous improvement. If you’re
                        interested in collaborating, feel free to reach out
                        through this{' '}
                        <a
                            href='#contact'
                            className='text-sky-500 font-bold underline'
                        >
                            form
                        </a>{' '}
                        or explore my profiles on various platforms.{' '}
                    </p>
                    <strong> Let’s create something amazing together!</strong>
                </div>
                <div className='flex flex-col xs:items-center sm:justify-between h-full w-full xs:pt-2 sm:pt-0 px-5'>
                    <div className=' xs:h-52 h-72 lg:h-96 xs:my-5 sm:my-0 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] border-4 border-sky-500 hover:shadow-none animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                        <img
                            src={Img2}
                            alt='Me climbing a boulder'
                            className='object-cover w-full h-full rounded-lg hover:opacity-95'
                        />
                    </div>

                    <div className='xs:w-95 sm:flex sm:w-90  lg:w-96 animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                        <div className='mt-5 sm:mt-10 p-5 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.5)] bg-slate-200 dark:bg-slate-500'>
                            <h1 className='text-2xl text-center font-bold'>
                                Future Plans
                            </h1>
                            <h1 className='text-xl text-center mt-2 font-semibold'>
                                Climbing Route Tracker
                            </h1>
                            <p className='sm:text-sm md:text-base my-5'>
                                Create a web application that allows climbers to
                                track and share their climbing routes, log their
                                climbing achievements, and discover new climbing
                                spots.
                            </p>
                            <p className='sm:text-base md:text-lg my-2 text-center font-semibold'>
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
                    <div className='xs:flex xs:flex-col xs:items-center xs:justify-center xs:gap-y-4 sm:flex sm:flex-row sm:justify-center sm:items-center xs:py-5 '>
                        <button
                            onClick={downloadCV}
                            className='cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                            role='button'
                        >
                            <span className=' relative px-4 text-center py-2.5 transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Download CV
                            </span>
                        </button>
                        <a
                            href='#projects'
                            className='cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                            aria-label='Check my work'
                        >
                            <span className=' relative px-4 text-center py-2.5 transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Check my work
                            </span>
                        </a>
                    </div>
                    <div className='flex flex-col gap-x-4 mt-5 items-center xs:flex xs:justify-center sm:justify-start'>
                        <h1 className='text-xl xs:text-center sm:text-start xs:mb-5 sm:mb-3 font-lato font-bold'>
                            Let&apos;s Connect{' '}
                        </h1>
                        <div className='flex'>
                            <a
                                href='https://github.com/tompra'
                                className='hover:opacity-80'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='Github Profile'
                            >
                                <FaGithubSquare className='mr-3 h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1100ms] animate-ease-out hover:text-slate-600 dark:text-sky-200' />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/thom-prayon'
                                className='hover:opacity-80'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='LinkedIn Profile'
                            >
                                <FaLinkedin className='h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1200ms] animate-ease-out hover:text-slate-600  dark:text-sky-200' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
