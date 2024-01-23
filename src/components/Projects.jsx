import { projects } from '../data';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Projects = ({ toggleModal, animateVisibility }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const animateCards = animateVisibility(
        inView,
        'animate-fade-left animate-once animate-duration-800 animate-delay-[800ms] animate-ease-in'
    );

    const animateTitle = animateVisibility(
        inView,
        'animate-fade-right animate-once animate-duration-300 animate-delay-0 animate-ease-in'
    );

    return (
        <section
            ref={ref}
            className='bg-white align-element xs:py-12 xs:p-4 dark:bg-gray-600'
            id='projects'
        >
            <h1
                className={`text-3xl font-bold text-center sm:text-start xs:text-center sm:pl-5 xs:py-5 dark:text-white ${animateTitle}`}
            >
                Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8'>
                {projects.map((project) => {
                    const { id, img, url, github, title, text, tools } =
                        project;
                    const toolList =
                        tools &&
                        tools.map((tool, index) => {
                            return (
                                <span
                                    key={index}
                                    className='relative inline-flex items-center justify-center p-2 mb-2 me-2 overflow-hidden xs:text-xs md:text-sm font-medium text-slate-100 rounded-lg group bg-gradient-to-br from-purple-600 to-sky-600 group-hover:from-purple-600 group-hover:to-sky-600 hover:text-slate-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mr-3 '
                                >
                                    {tool}
                                </span>
                            );
                        });

                    return (
                        <div
                            key={id}
                            className={`bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-200 rounded-lg my-5 xs:shadow-[rgba(3,105,161)_0px_3px_8px] xs:mx-5  sm:shadow-[12px_12px_0px_0px_rgba(3,105,161)] dark:sm:shadow-[12px_12px_0px_0px_rgba(56, 189, 233)]  transition-all duration-300 transform hover:shadow-[0px_0px_0px_0px_rgba(3,105,161)] hover:border-2 hover:border-sky-700 ${animateCards}`}
                        >
                            <img
                                className='rounded-t-lg w-full h-auto object-cover'
                                src={img}
                                alt={title}
                            />

                            <div className='flex flex-col p-5'>
                                <h1 className='text-2xl my-3 font-bold'>
                                    {title}
                                </h1>
                                <div className='my-5'>{toolList}</div>
                                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                                    {text}
                                </p>
                                <div className='flex flex-wrap gap-3 xs:justify-center sm:justify-start '>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                                        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                            <a
                                                href={github}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Github
                                            </a>
                                        </span>
                                    </button>
                                    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                                        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                            {url ? (
                                                <a
                                                    href={url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Website
                                                </a>
                                            ) : (
                                                <>
                                                    <a
                                                        href='https://github.com/tompra/chat_app?tab=readme-ov-file#how-to-get-the-project-running'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Find how to build
                                                    </a>
                                                </>
                                            )}
                                        </span>
                                    </button>
                                    {/* MODAL */}
                                    <button
                                        onClick={() => toggleModal(project)}
                                        className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                                    >
                                        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                            See more
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

Projects.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    animateVisibility: PropTypes.func.isRequired,
};
export default Projects;
