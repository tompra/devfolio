import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Img1 from '../assets/photos/portrait-picture.jpeg';
const Hero = () => {
    return (
        <section
            className='bg-slate-200 align-element grid md:grid-cols-2 items center gap-8 border-b-2 border-gray-400 py-4'
            id='home'
        >
            <article className='mt-5 flex flex-col justify-center md:justify-start'>
                <h1 className='text-2xl'>Hi there ,</h1>
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
                <div className='flex gap-x-4 mt-4 items-center justify-center sm:justify-start'>
                    <a href='#'>
                        <FaGithubSquare className='h-10 w-10 text-slate-600 hover:text-sky-500 duration-300' />
                    </a>
                    <a href='#'>
                        <FaLinkedin className='h-10 w-10 text-slate-600 hover:text-sky-500 duration-300' />
                    </a>
                    <a href='#'>
                        <FaTwitterSquare className='h-10 w-10 text-slate-600 hover:text-sky-500 duration-300' />
                    </a>
                </div>
            </article>
            <article className='flex justify-center'>
                <div className='bg-sky-200 relative w-80 h-80 overflow-hidden rounded-full border-4 border-sky-200 shadow-[0_3px_10px_rgb(0,0,0,0.5)]'>
                    <img
                        src={Img1}
                        alt='Photo of myself'
                        className='object-cover w-full h-full'
                    />
                </div>
            </article>
        </section>
    );
};
export default Hero;
