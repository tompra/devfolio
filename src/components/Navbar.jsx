import { BsFillMoonStarsFill } from 'react-icons/bs';
import { links } from '../data';
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
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 128 128'
                        width='90'
                        height='90'
                        className='h-20 md:h-30 ml-4 '
                    >
                        <g fill={`${darkMode ? '#fff' : 'text-gray-900'}`}>
                            <path d='M80.139,103.801H47.715V55.703H30.227V23.282h67.4v32.421H80.139V103.801zM51.715,99.801h24.424V51.703h17.488V27.282h-59.4v24.421h17.488V99.801z' />
                            <rect y='23.279' width='5.362' height='4' />
                            <rect
                                x='9.901'
                                y='23.279'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='19.799'
                                y='23.279'
                                width='5.364'
                                height='4'
                            />
                            <rect
                                x='102.838'
                                y='23.279'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='112.736'
                                y='23.279'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='122.637'
                                y='23.279'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='76.139'
                                y='3.551'
                                width='4'
                                height='5.363'
                            />
                            <rect
                                x='76.139'
                                y='13.452'
                                width='4'
                                height='5.364'
                            />
                            <rect
                                x='47.715'
                                y='3.551'
                                width='4'
                                height='5.363'
                            />
                            <rect
                                x='47.715'
                                y='13.452'
                                width='4'
                                height='5.364'
                            />
                            <rect
                                x='76.139'
                                y='109.186'
                                width='4'
                                height='5.365'
                            />
                            <rect
                                x='76.139'
                                y='119.086'
                                width='4'
                                height='5.363'
                            />
                            <rect
                                x='47.715'
                                y='109.186'
                                width='4'
                                height='5.365'
                            />
                            <rect
                                x='47.715'
                                y='119.086'
                                width='4'
                                height='5.363'
                            />
                            <rect y='51.703' width='5.362' height='4' />
                            <rect
                                x='9.901'
                                y='51.703'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='19.799'
                                y='51.703'
                                width='5.364'
                                height='4'
                            />
                            <rect
                                x='102.838'
                                y='51.703'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='112.736'
                                y='51.703'
                                width='5.363'
                                height='4'
                            />
                            <rect
                                x='122.637'
                                y='51.703'
                                width='5.363'
                                height='4'
                            />
                        </g>
                    </svg>
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
