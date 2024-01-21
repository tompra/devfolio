import { BsFillMoonStarsFill } from 'react-icons/bs';
import { links } from '../data';
import Logo from '../assets/logo/tp-short-logo.svg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = ({ setDarkMode, darkMode }) => {
    let [isOpen, setIsOpen] = useState(false);

    const handleClickOnItem = () => {
        setIsOpen(false);
    };

    return (
        <nav className='shadow-md align-element '>
            <div className='md:flex items-center justify-between bg-sky-600 dark:bg-gray-900 dark:xs:bg-gray-900 py-4 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img src={Logo} className='h-20 md:h-30' />{' '}
                </div>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='absolute right-10 top-10 cursor-pointer md:hidden w-7 h-7 text-white dark:xs:text-white'
                >
                    {isOpen ? (
                        <IoCloseSharp className='h-7 w-7' />
                    ) : (
                        <HiMenuAlt1 className='h-7 w-7' />
                    )}
                </div>
                <ul
                    className={`sm:flex-row :xs:flex xs:flex-col xs:justify-center xs:items-center xs:pl-0 md:flex md:items-center md:pb-0 pb-8 absolute md:static md:z-auto md:px-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out  dark:text-white xs:bg-white sm:bg-sky-600 dark:xs:bg-gray-900 dark:sm:bg-gray-900  ${
                        isOpen ? 'top-18 z-10' : 'top-[-490px]'
                    }`}
                >
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <li
                                key={id}
                                className='md:ml-8 md:my-0 my-6 font-semibold xs:pl-10 md:pl-0'
                                onClick={handleClickOnItem}
                            >
                                <a
                                    href={href}
                                    className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-sky-500'
                                >
                                    <span>{text}</span>
                                </a>
                            </li>
                        );
                    })}
                    <li className='md:ml-5 xs:pl-10 md:pl-0'>
                        <BsFillMoonStarsFill
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                            className='cursor-pointer text-2xl'
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
