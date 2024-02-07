import { useTranslation } from 'react-i18next';
import Img2 from '../assets/photos/climb.jpeg';
import { futurePlanStack } from '../data';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const About = () => {
    const downloadCV = () => {
        fetch('CVThomasPrayon.pdf').then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let anchorLink = document.createElement('a');
                anchorLink.href = fileURL;
                anchorLink.download = 'CVThomasPrayon.pdf';
                anchorLink.click();
            });
        });
    };
    const { t } = useTranslation();

    return (
        <section
            className='bg-white align-element sm:py-20 border-b-2 border-gray-700 xs:py-12 dark:bg-gray-600 animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out font-lato'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 xs:p-8 dark:text-white'>
                <div className='md:order-2 xs:flex xs:flex-col xs:justify-center md:justify-start animate-fade-down animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                    <h1 className='text-3xl xs:text-center sm:text-start xs:mb-5 sm:mb-3 font-lato font-bold'>
                        {t('aboutTitle')}
                    </h1>
                    <p className='py-3 leading-7 font-lato'>
                        {t('aboutParagraph1')}
                    </p>
                    <p className='py-3 leading-7'>
                        <strong>{t('aboutWhyCoding')}</strong>{' '}
                        {t('aboutParagraph2')}
                    </p>{' '}
                    <p className='py-3 leading-7'>
                        <strong>{t('aboutBeyond')}</strong>{' '}
                        {t('aboutParagraph3')}
                    </p>{' '}
                    <p className='py-3 leading-7'>
                        <strong>{t('aboutAsDeveloper')}</strong>{' '}
                        {t('aboutParagraph4')}
                    </p>
                    <p className='py-3 leading-7'>
                        {t('aboutParagraph5')}
                        <strong> {t('aboutSeeking')}</strong>{' '}
                        {t('aboutParagraph6')}
                    </p>
                    <p className='py-3 leading-7'>
                        {t('aboutParagraph7')}{' '}
                        <a
                            href='#contact'
                            className='text-sky-500 font-bold underline'
                        >
                            {t('aboutContact')}
                        </a>{' '}
                        {t('aboutParagraph8')}
                    </p>
                    <strong> {t('aboutLastSentence')}</strong>
                </div>
                <div className='flex flex-col xs:items-center sm:justify-between h-full w-full xs:pt-2 sm:pt-0 px-5'>
                    <div className=' xs:h-52 h-72 lg:h-96 xs:my-5 sm:my-0 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] border-4 border-sky-500 hover:shadow-none animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                        <img
                            src={Img2}
                            alt='Me climbing a boulder'
                            className='object-cover w-full h-full rounded-lg hover:opacity-95'
                        />
                    </div>

                    <div className='xs:w-95 sm:flex sm:w-90  lg:w-96 animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                        <div className='mt-5 sm:mt-10 p-5 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.5)] bg-slate-200 dark:bg-slate-500'>
                            <h1 className='text-2xl text-center font-bold'>
                                {t('aboutFutureTitle')}
                            </h1>
                            <h1 className='text-xl text-center mt-2 font-semibold'>
                                {t('aboutFuturePlan')}
                            </h1>
                            <p className='sm:text-sm md:text-base my-5'>
                                {t('aboutFutureParagraph')}
                            </p>
                            <p className='sm:text-base md:text-lg my-2 text-center font-semibold'>
                                Tech Stack
                            </p>
                            <ul className='flex flex-wrap justify-center'>
                                {futurePlanStack.map((stack) => {
                                    const { id, tool } = stack;
                                    return (
                                        <li key={id} className='mx-4'>
                                            {tool}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='xs:flex xs:flex-col xs:items-center xs:justify-center xs:gap-y-4 sm:flex sm:flex-row sm:justify-center sm:items-center xs:py-5 '>
                        <button
                            onClick={downloadCV}
                            className='cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                            role='button'
                        >
                            <span className=' relative px-4 text-center py-2.5 transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                {t('aboutCVButton')}
                            </span>
                        </button>
                        <a
                            href='#projects'
                            className='cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                            aria-label='Check my work'
                        >
                            <span className=' relative px-4 text-center py-2.5 transition-all ease-in duration-75  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                {t('aboutCheckWork')}
                            </span>
                        </a>
                    </div>
                    <div className='flex flex-col gap-x-4 mt-5 items-center xs:flex xs:justify-center sm:justify-start'>
                        <h1 className='text-xl xs:text-center sm:text-start xs:mb-5 sm:mb-3 font-lato font-bold'>
                            {t('aboutConnectTitle')}
                        </h1>
                        <div className='flex'>
                            <a
                                href='https://github.com/tompra'
                                className='hover:opacity-80'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='Github Profile'
                            >
                                <FaGithubSquare className='mr-3 h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1100ms] animate-ease-out hover:text-slate-600 dark:text-sky-200' />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/thom-prayon'
                                className='hover:opacity-80'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='LinkedIn Profile'
                            >
                                <FaLinkedin className='h-10 w-10 text-slate-800 animate-fade animate-once animate-duration-1000 animate-delay-[1200ms] animate-ease-out hover:text-slate-600  dark:text-sky-200' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
