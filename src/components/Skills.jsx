import Slider from './Slider';
import Toolbelt from './Toolbelt';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { animateVisibility } = useAppContext();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const { t } = useTranslation();

    const skillsAnimation = animateVisibility(
        inView,
        'animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-in'
    );

    return (
        <section
            ref={ref}
            className='bg-slate-200 align-element sm:py-20 xs:py-12 xs:p-8 dark:bg-gray-800 dark:text-white font-lato'
            id='skills'
        >
            <div className={skillsAnimation}>
                <h1 className='text-3xl font-bold text-center sm:text-start'>
                    {t('skillsTitle')}
                </h1>
                <p className='py-5 leading-7'>{t('skillsParagraph')}</p>
            </div>
            <Slider />
            <Toolbelt />
        </section>
    );
};

Skills.propTypes = {
    animateVisibility: PropTypes.func.isRequired,
};
export default Skills;
