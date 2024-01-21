import { connectLogos } from '../data';

const Footer = () => {
    return (
        <footer className='bg-white align-element py-6 dark:bg-gray-900 dark:text-white flex flex-col justify-around'>
            <h1 className='sm:text-3xl font-bold text-center xs:text-xl'>
                Let&apos;s connect
            </h1>
            <div className='flex flex-row justify-center my-5'>
                {connectLogos.map((logos) => {
                    const { id, logo } = logos;
                    return (
                        <div key={id}>
                            <button
                                type='button'
                                className='mx-5 border border-slate-700 dark:border-slate-300 hover:bg-sky-700 hover:text-white  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  '
                            >
                                {logo}
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center my-2'>
                <p className='xs:text-sm sm:text-base font-bold'>
                    2023&copy; Thomas Prayon
                </p>
            </div>
        </footer>
    );
};
export default Footer;
