import { projects } from '../data';

const Projects = () => {
    return (
        <section className=' bg-pink-600 align-element '>
            <h1 className='text-3xl'>Proyects</h1>
            {projects.map((project) => {
                const { id, img, url, github, title, text, tools } = project;

                const toolList =
                    tools &&
                    tools.map((tool, index) => {
                        return (
                            <span
                                key={index}
                                className='relative inline-flex items-center justify-center p-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  mr-3'
                            >
                                {tool}
                            </span>
                        );
                    });

                return (
                    <div
                        key={id}
                        className=' bg-gray-100 border border-gray-200 rounded-lg my-5 shadow-[10px_10px_0px_0px_rgba(3,105,161)] transition-all duration-300 transform hover:shadow-[5px_5px_0px_0px_rgba(3,105,161)]'
                    >
                        <img className='rounded-t-lg' src={img} alt={title} />

                        <div className='p-5'>
                            <h1 className='text-2xl my-5 font-bold'>{title}</h1>
                            {toolList}
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                                {text}
                            </p>
                            <div>
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
                                <a
                                    href='#'
                                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                >
                                    Read more
                                    <svg
                                        className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 14 10'
                                    >
                                        <path
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M1 5h12m0 0L9 1m4 4L9 9'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
export default Projects;
