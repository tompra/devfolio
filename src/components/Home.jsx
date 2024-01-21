import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Img1 from '../assets/photos/portrait-picture.jpeg';
const Home = () => {
    return (
        <section
            className='bg-sky-600 dark:bg-gray-700 align-element grid md:grid-cols-2 items-center gap-8 border-b-2 border-gray-400 dark:border-gray-500 py-16'
            id='home'
        >
            <article className=' xs:py-8 mt-5 flex flex-col justify-center sm:ml-10 dark:text-white'>
                <h1 className='text-2xl xs:text-center sm:text-start '>
                    Hello there👋 ,
                </h1>
                <h1 className='text-3xl xs:text-center sm:text-start'>
                    I&apos;m{' '}
                    <span className=' text-violet-300 dark:text-sky-500 font-extrabold text-4xl'>
                        Thomas
                    </span>
                    , a web developer.
                </h1>
                <p className='capitalize xs:text-center sm:text-start'>
                    scaling heights in code and on rocks
                </p>
                <div className='flex gap-x-4 mt-4 items-center xs:flex xs:justify-center sm:justify-start '>
                    <a
                        href='https://github.com/tompra'
                        className='hover:opacity-80'
                    >
                        <FaGithubSquare className='h-10 w-10 text-slate-800 hover:text-sky-500 dark:text-sky-200' />
                    </a>
                    <a
                        href='www.linkedin.com/in/thom-prayon'
                        className='hover:opacity-80'
                    >
                        <FaLinkedin className='h-10 w-10 text-slate-800 hover:text-sky-500 duration-300 dark:text-sky-200' />
                    </a>
                    <a
                        href='https://twitter.com/TPrayon'
                        className='hover:opacity-80'
                    >
                        <FaTwitterSquare className='h-10 w-10 text-slate-800 hover:text-sky-500 duration-300 dark:text-sky-200' />
                    </a>
                </div>
            </article>
            <article className='flex justify-center'>
                <div className='xs:w-80 xs:h-80  md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-sky-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] hover:border-sky-400 transform  hover:shadow-xl transition duration-300 '>
                    <img
                        src={Img1}
                        alt='Photo of myself'
                        className='object-cover w-full h-full  hover:opacity-90'
                    />
                </div>
            </article>
        </section>
    );
};
export default Home;
