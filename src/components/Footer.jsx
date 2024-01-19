import { connectLogos } from '../data';

const Footer = () => {
    return (
        <footer className='bg-white align-element'>
            <h1 className='text-3xl font-bold text-center'>
                Let&apos;s connect
            </h1>
            <div className='flex flex-row justify-center my-5'>
                {connectLogos.map((logos) => {
                    const { id, logo } = logos;
                    return (
                        <div key={id}>
                            <button
                                type='button'
                                className='mx-5 border border-slate-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500'
                            >
                                {logo}
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center my-2'>
                <p className='font-bold'>2023&copy; Thomas Prayon</p>
            </div>
        </footer>
    );
};
export default Footer;
