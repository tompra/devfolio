import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
    return (
        <div className='bg-emerald-200 align-element grid md:grid-cols-2 items center gap-8'>
            <article>
                <h1 className='text-2xl'>Hi there,</h1>
                <h1 className=' text-3xl'>
                    I&apos;m{' '}
                    <span className=' text-amber-500 font-extrabold text-4xl'>
                        Thomas
                    </span>
                    , a web developer.
                </h1>
                <p className=' capitalize'>
                    Scaling heights in code and on rocks
                </p>
                <div className='flex gap-x-4 mt-4  items-center'>
                    <a href='#'>
                        <FaGithubSquare className=' h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href='#'>
                        <FaLinkedin className=' h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href='#'>
                        <FaTwitterSquare className=' h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                </div>
            </article>
            <article className='bg-indigo-400 flex justify-center'>
                <img src='https://placehold.co/300x400' />
            </article>
        </div>
    );
};
export default Hero;
