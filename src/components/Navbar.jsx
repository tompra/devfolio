import { BsFillMoonStarsFill } from 'react-icons/bs';
import { links } from '../data';
import Logo from '../assets/logo/tp-short-logo.svg';

const Navbar = () => {
    return (
        <nav className='align-element py-6 md:py-10 bg-white'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-x-16 items-center justify-between'>
                <img
                    src={Logo}
                    alt='Logo with my name'
                    className='h-20 md:h-30 float-left sm:float-none'
                />
                <ul className='flex md:flex-row gap-4 md:gap-x-3 justify-center md:justify-end items-center md:flex-grow relative'>
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <li
                                key={id}
                                className='relative-group md:mb-0 mb-3 '
                            >
                                <a
                                    href={href}
                                    className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-sky-500'
                                >
                                    <span className='text-xs sm:text-base'>
                                        {text}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                    <li className='md:ml-auto hidden sm:inline-block'>
                        <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
