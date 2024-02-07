import { BsFillMoonStarsFill } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { IoSunnySharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';
import { languages } from '../data';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { darkMode, setDarkMode, isOpen, setIsOpen, handleClickOnItem } =
        useAppContext();
    const { i18n, t } = useTranslation();

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <nav className='align-element sm:animate-fade-down sm:animate-once sm:animate-duration-1000 sm:animate-delay-100 sm:animate-ease-in-out '>
            <div className='md:flex items-center justify-between bg-sky-600 dark:bg-gray-900 dark:xs:bg-gray-900 py-10'>
                <div className='cursor-pointer flex items-center gap-1'>
                    <h1 className='text-4xl tracking-wider xs:ml-4 sm:ml-8 animate-fade animate-once animate-duration-500 animate-delay-[1000ms] animate-ease-out hover:opacity-80 dark:text-white font-bebas'>
                        ⦿TP
                    </h1>
                </div>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='absolute right-10  top-12 cursor-pointer md:hidden w-7 h-7 text-black dark:xs:text-white animate-fade animate-once animate-duration-300 animate-delay-300 animate-ease-in'
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? (
                        <IoCloseSharp className='h-7 w-7' />
                    ) : (
                        <HiMenuAlt1 className='h-7 w-7' />
                    )}
                </div>
                <ul
                    className={`sm:flex-row :xs:flex xs:flex-col xs:justify-center xs:items-center xs:pl-0 md:flex md:items-center md:pb-0 pb-5 absolute md:static md:z-auto md:px-10 left-0 w-full md:w-auto md:pl-0 pl-9 animate-fade-left animate-once animate-duration-500 animate-delay-1000 animate-ease-out xs:bg-sky-600 sm:bg-transparent dark:text-white xs:shadow-xl sm:shadow-none dark:xs:bg-gray-900 ${
                        isOpen
                            ? `top-18 z-10 animate-fade-down animate-once animate-duration-500 animate-delay-300 animate-ease-in`
                            : 'top-[-490px]'
                    }`}
                    role='menu'
                >
                    <li
                        className='md:ml-8 md:my-0 my-6 font-semibold xs:pl-10 md:pl-0 font-lato'
                        role='menuitem'
                        onClick={handleClickOnItem}
                    >
                        <a
                            href='#home'
                            className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white dark:after:bg-sky-500 dark:hover:text-sky-500'
                        >
                            <span>{t('navItem1')}</span>
                        </a>
                    </li>
                    <li
                        className='md:ml-8 md:my-0 my-6 font-semibold xs:pl-10 md:pl-0 font-lato'
                        role='menuitem'
                        onClick={handleClickOnItem}
                    >
                        <a
                            href='#about'
                            className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white dark:after:bg-sky-500 dark:hover:text-sky-500'
                        >
                            <span>{t('navItem2')}</span>
                        </a>
                    </li>
                    <li
                        className='md:ml-8 md:my-0 my-6 font-semibold xs:pl-10 md:pl-0 font-lato'
                        role='menuitem'
                        onClick={handleClickOnItem}
                    >
                        <a
                            href='#skills'
                            className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white dark:after:bg-sky-500 dark:hover:text-sky-500'
                        >
                            <span>{t('navItem3')}</span>
                        </a>
                    </li>
                    <li
                        className='md:ml-8 md:my-0 my-6 font-semibold xs:pl-10 md:pl-0 font-lato'
                        role='menuitem'
                        onClick={handleClickOnItem}
                    >
                        <a
                            href='#projects'
                            className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white dark:after:bg-sky-500 dark:hover:text-sky-500'
                        >
                            <span>{t('navItem4')}</span>
                        </a>
                    </li>
                    <li
                        className='md:ml-8 md:my-0 my-6 font-semibold xs:pl-10 md:pl-0 font-lato'
                        role='menuitem'
                        onClick={handleClickOnItem}
                    >
                        <a
                            href='#contact'
                            className='capitalize text-lg tracking-wider relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-white dark:after:bg-sky-500 dark:hover:text-sky-500'
                        >
                            <span>{t('navItem5')}</span>
                        </a>
                    </li>

                    <li className='md:ml-5 xs:pl-10 md:pl-0 animate-fade animate-once animate-duration-300 animate-delay-300 animate-ease-in'>
                        {darkMode ? (
                            <IoSunnySharp
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                }}
                                className='cursor-pointer text-2xl hover:animate-pulse hover:text-white'
                                aria-label='Enable light mode'
                            />
                        ) : (
                            <BsFillMoonStarsFill
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                }}
                                className='cursor-pointer text-2xl hover:animate-pulse hover:text-white'
                                aria-label='Enable dark mode'
                            />
                        )}
                    </li>
                    <select
                        defaultValue={i18n.language}
                        onChange={onChangeLang}
                        className='bg-transparent md:ml-5 xs:pl-7 xs:m-2 md:pl-0 animate-fade animate-once animate-duration-300 animate-delay-300 animate-ease-in'
                    >
                        {languages.map(({ code, label }) => (
                            <option key={code} value={code}>
                                {label}
                            </option>
                        ))}
                    </select>
                </ul>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    handleClickOnItem: PropTypes.func.isRequired,
};
export default Navbar;
