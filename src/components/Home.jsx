import { FaGithubSquare, FaLinkedin, FaMedium } from 'react-icons/fa';
import Img1 from '../assets/photos/portrait.png';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';

const Home = () => {
    const nameArr = ['T', 'h', 'o', 'm', 'a', 's'];
    const { isOpen } = useAppContext();
    return (
        <section
            className={`bg-sky-600 dark:bg-gray-700 align-element grid md:grid-cols-2  border-b-2 border-gray-400 dark:border-gray-500 py-16 animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out`}
            id='home'
        >
            <article
                className={`xs:py-8 sm:ml-10 dark:text-white sm:z-0 animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-out ${
                    isOpen ? 'xs:-z-10' : ''
                }`}
            >
                <h1 className='text-2xl xs:text-center sm:text-start'>
                    Hello there,
                </h1>
                <h1 className='text-3xl xs:text-center sm:text-start'>
                    I&apos;m{' '}
                    <span className='text-slate-200 dark:text-sky-500 font-extrabold text-4xl'>
                        {nameArr.map((letter, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`inline-block tracking-widest cursor-pointer sm:hover:animate-wiggle-more sm:hover:animate-infinite sm:hover:animate-duration-[500ms] sm:hover:animate-delay-100 hover:sm:animate-ease-out`}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                    </span>
                    , a web developer.
                </h1>
                <p className='capitalize xs:text-center sm:text-start'>
                    scaling heights in code and on rocks
                </p>
                <div className='flex gap-x-4 mt-5 items-center xs:flex xs:justify-center sm:justify-start'>
                    <a
                        href='https://github.com/tompra'
                        className='hover:opacity-80'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaGithubSquare className='h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1100ms] animate-ease-out hover:text-slate-600 dark:text-sky-200' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/thom-prayon'
                        className='hover:opacity-80'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaLinkedin className='h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1200ms] animate-ease-out hover:text-slate-600  dark:text-sky-200' />
                    </a>
                    <a
                        href='https://medium.com/@tomprayon'
                        className='hover:opacity-80'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaMedium className='h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1300ms] animate-ease-out  hover:text-slate-600  dark:text-sky-200' />
                    </a>
                </div>
            </article>
            <article className='flex justify-center animate-fade-left animate-once animate-duration-500 animate-delay-[800ms] animate-ease-in'>
                <div className='xs:w-80 xs:h-80  md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-sky-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] hover:border-sky-400 transform hover:shadow-xl transition duration-300 '>
                    <img
                        src={Img1}
                        alt='Photo of myself'
                        className='object-cover w-full h-full hover:opacity-90'
                    />
                </div>
            </article>
        </section>
    );
};

Home.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
export default Home;
