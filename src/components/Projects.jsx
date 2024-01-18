import { projects } from '../data';

const Projects = () => {
    return (
        <section className=' bg-pink-600 align-element '>
            <h1 className='text-3xl'>Proyects</h1>
            <div>
                {projects.map((project) => {
                    const { id, img, url, github, title, text, tools } =
                        project;

                    const toolList =
                        tools &&
                        tools.map((tool, index) => {
                            return (
                                <span
                                    key={index}
                                    className='relative inline-flex items-center justify-center p-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mx-2'
                                >
                                    {tool}
                                </span>
                            );
                        });

                    return (
                        <div key={id}>
                            <div>
                                <h1 className='text-2xl my-5 font-bold'>
                                    {title}
                                </h1>
                                <img src={img} alt={title} />
                            </div>
                            <div className='my-5'>{toolList}</div>
                            <div>
                                <div className='my-3'>
                                    <p>{text}</p>
                                </div>
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
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Projects;
