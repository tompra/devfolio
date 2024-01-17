import { BsFillMoonStarsFill } from 'react-icons/bs';

import { links } from '../data';

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-cyan-500 to-teal-500 py-10 mb-12'>
            <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
                <h1 className='text-xl text-white inline-block'>TP</h1>
                <ul className='flex gap-x-3'>
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <>
                                <li>
                                    <a
                                        key={id}
                                        href={href}
                                        className='capitalize text-lg tracking-wider hover:text-white duration-300'
                                    >
                                        {text}
                                    </a>
                                </li>
                            </>
                        );
                    })}
                    <li className='px-4 '>
                        <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
