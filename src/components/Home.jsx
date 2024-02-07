import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Img1 from '../assets/photos/portrait.png';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';

const Home = () => {
    const nameArr = ['T', 'h', 'o', 'm', 'a', 's'];
    const industries = [
        'Climbing',
        'Design',
        'Education',
        'Productivity',
        'Wellness',
        'Sport',
        ' Gastronomy',
        'Sustainability',
    ];
    const formattedIndustries = industries.map((industry, index) => {
        return index === industries.length - 1
            ? `and ${industry}`
            : `${industry}`;
    });

    const { isOpen } = useAppContext();
    return (
        <section
            className={`bg-sky-600  dark:bg-gray-700 align-element grid md:grid-cols-2 border-b-2 border-gray-400 dark:border-gray-500 py-12 animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out`}
            id='home'
        >
            <article
                className={`xs:py-8 sm:py-0  dark:text-white sm:z-0 animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-out font-lato xs:mx-3 sm:ml-8 ${
                    isOpen ? 'xs:-z-10' : ''
                }`}
            >
                <h1 className='text-2xl xs:text-center sm:text-start font-medium'>
                    Hello there,
                </h1>
                <h1 className='text-3xl xs:text-center sm:text-start font-semibold'>
                    I&apos;m{' '}
                    <span className='font-bold text-slate-200 dark:text-sky-500  text-4xl'>
                        {nameArr.map((letter, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`inline-block tracking-widest cursor-pointer sm:hover:animate-wiggle-more sm:hover:animate-infinite sm:hover:animate-duration-[500ms] sm:hover:animate-delay-100 hover:sm:animate-ease-out `}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                    </span>
                    , a certified full-stack JavaScript web developer.
                </h1>
                <p className='pt-3  xs:text-center sm:text-start font-medium leading-7'>
                    I&apos;m a passionate human that enjoys communicating with
                    computers. My diverse background includes roles in marketing
                    adminstration, catering event organization, online
                    supermarket operations, and event tattoo artistry as a
                    hobby.
                </p>
                <p className='pt-2  xs:text-center sm:text-start font-medium leading-7'>
                    My experience as a multimedia designer student, I bring a
                    blend of design skills and technical proficiency to web
                    development. Proficient in JavaScript, specializing in React
                    for front-end and Node.js for backend, I excel at creating
                    integrated, responsive and fully functional full-stack
                    applications.
                </p>

                <p className='sm:pt-2 xs:pt-4   xs:text-center sm:text-start font-medium leading-7'>
                    Passionate about industries like{' '}
                    <strong>{formattedIndustries.join(', ')} </strong>.
                </p>
            </article>
            <article className='flex flex-col items-center justify-start animate-fade-left animate-once animate-duration-500 animate-delay-[800ms] animate-ease-in xs:mx-3 sm:mx-0 '>
                <div className='xs:w-90 xs:h-96  md:w-80 md:h-96 rounded-2xl overflow-hidden  border-4 border-sky-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] hover:border-sky-400 transform hover:shadow-xl transition duration-300 '>
                    <img
                        src={Img1}
                        alt='Photo of myself'
                        className='object-cover w-full h-full hover:opacity-90'
                    />
                </div>
                <div className='flex justify-center mt-3'>
                    <p className=' pt-2 capitalize xs:text-center sm:text-start text-sm font-semibold dark:text-white'>
                        <span className='animate-pulse animate-duration-700 text-xs'>
                            🟢
                        </span>
                        {'  '}
                        Currently seeking a full-time web developer role.
                    </p>
                </div>
                <div className='flex gap-x-4 mt-5 items-center xs:flex xs:justify-center sm:justify-start'>
                    <a
                        href='https://github.com/tompra'
                        className='hover:opacity-80'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Github Profile'
                    >
                        <FaGithubSquare className='h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1100ms] animate-ease-out hover:text-slate-600 dark:text-sky-200' />
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
            </article>
        </section>
    );
};

Home.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
export default Home;
