import { connectLogos } from '../data';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const { animateVisibility } = useAppContext();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const animateFooter = animateVisibility(
        inView,
        'animate-fade animate-once animate-duration-500 animate-delay-200 animate-ease-in'
    );

    return (
        <footer
            ref={ref}
            className={`bg-white align-element py-4 dark:bg-gray-900 dark:text-white font-lato flex flex-col justify-around ${animateFooter}`}
            role='content info'
        >
            <h1 className='sm:text-2xl font-bold text-center xs:text-xl'>
                {t('footerTitle')}
            </h1>
            <div className='flex flex-row justify-center my-5'>
                {connectLogos.map((logos) => {
                    const { id, logo, link } = logos;
                    return (
                        <div key={id}>
                            <button
                                type='button'
                                className='mx-5 border border-slate-700 dark:border-slate-300 hover:bg-sky-700 hover:text-white font-medium rounded-full text-base p-2.5 text-center inline-flex items-center'
                            >
                                <a href={link} target='_blank' rel='noreferrer'>
                                    {logo}
                                </a>
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
Footer.propTypes = {
    animateVisibility: PropTypes.func.isRequired,
};
export default Footer;
