import Slider from './Slider';
import Toolbelt from './Toolbelt';
import { useInView } from 'react-intersection-observer';

const Skills = ({ animateVisibility }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const skillsAnimation = animateVisibility(
        inView,
        'animate-fade-down animate-once animate-duration-300 animate-delay-0 animate-ease-in'
    );

    return (
        <section
            ref={ref}
            className={`bg-slate-200 align-element sm:py-20 xs:py-12 xs:p-8 dark:bg-gray-800 dark:text-white ${skillsAnimation}`}
            id='skills'
        >
            <h1 className='text-3xl font-bold text-center sm:text-start'>
                Skills
            </h1>
            <p className='py-5 leading-7'>
                I possess the ability to create websites and applications,
                starting from the conceptualization phase through the design of
                user interfaces and interactive components.{' '}
            </p>
            <Slider />
            <Toolbelt />
        </section>
    );
};
export default Skills;
