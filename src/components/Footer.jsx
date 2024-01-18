import { connectLogos } from '../data';

const Footer = () => {
    return (
        <footer className='align-element bg-amber-600'>
            <h1 className='text-3xl text-center py'>Let&apos;s connect</h1>
            <div className='flex flex-row justify-center'>
                {connectLogos.map((logos) => {
                    const { id, logo } = logos;
                    return (
                        <>
                            <button
                                key={id}
                                type='button'
                                className='text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500'
                            >
                                {logo}
                            </button>
                        </>
                    );
                })}
            </div>
        </footer>
    );
};
export default Footer;
