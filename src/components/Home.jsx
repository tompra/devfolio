import Img1 from '../assets/photos/portrait.png';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const nameArr = ['T', 'h', 'o', 'm', 'a', 's'];
    const { isOpen } = useAppContext();
    const { t } = useTranslation();

    return (
        <section
            className={`bg-sky-600  dark:bg-gray-700 align-element grid md:grid-cols-2 border-b-2 border-gray-400 dark:border-gray-500 py-12 animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out`}
            id='home'
        >
            <article
                className={`xs:py-8 sm:py-0  dark:text-white sm:z-0 animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-out font-lato xs:mx-3 sm:ml-8 ${
                    isOpen ? 'xs:-z-10' : ''
                }`}
            >
                <h1 className='text-2xl xs:text-center sm:text-start font-medium'>
                    {t('homeTitle')}
                </h1>
                <h1 className='text-3xl xs:text-center sm:text-start font-semibold'>
                    {t('homeSubTitle1')}
                    <span className='font-bold text-slate-200 dark:text-sky-500  text-4xl'>
                        {nameArr.map((letter, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`inline-block tracking-widest cursor-pointer sm:hover:animate-wiggle-more sm:hover:animate-infinite sm:hover:animate-duration-[500ms] sm:hover:animate-delay-100 hover:sm:animate-ease-out `}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                    </span>
                    {t('homeSubTitle2')}
                </h1>
                <p className='pt-3  xs:text-center sm:text-start font-medium leading-7'>
                    {t('homeParagraph1')}
                </p>
                <p className='pt-2  xs:text-center sm:text-start font-medium leading-7'>
                    {t('homeParagraph2')}
                </p>

                <p className='sm:pt-2 xs:pt-4   xs:text-center sm:text-start font-medium leading-7'>
                    {t('homeIndustryText')}{' '}
                    <strong>{t('homeIndustry1')}</strong>,{' '}
                    <strong>{t('homeIndustry2')}</strong>,{' '}
                    <strong>{t('homeIndustry3')}</strong>,{' '}
                    <strong>{t('homeIndustry4')}</strong>,{' '}
                    <strong>{t('homeIndustry5')}</strong>,{' '}
                    <strong>{t('homeIndustry6')}</strong>.
                </p>
            </article>
            <article className='flex flex-col items-center justify-around animate-fade-left animate-once animate-duration-500 animate-delay-[800ms] animate-ease-in xs:mx-3 sm:mx-0 '>
                <div className='xs:w-90 xs:h-96  md:w-80 md:h-96 rounded-2xl overflow-hidden  border-4 border-sky-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] hover:border-sky-400 transform hover:shadow-xl transition duration-300 '>
                    <img
                        src={Img1}
                        alt='Photo of myself'
                        className='object-cover w-full h-full hover:opacity-90'
                    />
                </div>
                <div className='flex justify-center mt-3'>
                    <p className=' pt-2 capitalize xs:text-center sm:text-start text-sm font-semibold dark:text-white'>
                        <span className='animate-pulse animate-duration-700 text-xs'>
                            🟢
                        </span>
                        {'  '}
                        {t('homeMessage')}
                    </p>
                </div>
            </article>
        </section>
    );
};

Home.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
export default Home;
