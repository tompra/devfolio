import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Img1 from '../assets/photos/portrait-picture.jpeg';
const Home = () => {
    return (
        <section
            className='bg-slate-200 align-element grid md:grid-cols-2 items center gap-8 border-b-2 border-gray-400 py-24 h'
            id='home'
        >
            <article className='mt-5 flex flex-col justify-center md:justify-start'>
                <h1 className='text-2xl'>Hello there👋 ,</h1>
                <h1 className='text-3xl'>
                    I&apos;m{' '}
                    <span className=' text-sky-500 font-extrabold text-4xl'>
                        Thomas
                    </span>
                    , a web developer.
                </h1>
                <p className=' capitalize'>
                    Scaling heights in code and on rocks
                </p>
                <div className='flex gap-x-4 mt-4 items-center'>
                    <a
                        href='https://github.com/tompra'
                        className='hover:opacity-80'
                    >
                        <FaGithubSquare className='h-10 w-10 text-slate-600 hover:text-sky-500' />
                    </a>
                    <a
                        href='www.linkedin.com/in/thom-prayon'
                        className='hover:opacity-80'
                    >
                        <FaLinkedin className='h-10 w-10 text-slate-600 hover:text-sky-500 duration-300' />
                    </a>
                    <a
                        href='https://twitter.com/TPrayon'
                        className='hover:opacity-80'
                    >
                        <FaTwitterSquare className='h-10 w-10 text-slate-600 hover:text-sky-500 duration-300' />
                    </a>
                </div>
            </article>
            <article className='flex justify-center'>
                <div className='relative w-full max-w-[80vw] h-80 max-h-[80vw] overflow-hidden rounded-full border-4 border-sky-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] hover:border-sky-400 transform  hover:shadow-xl transition duration-300 '>
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
export default Home;
