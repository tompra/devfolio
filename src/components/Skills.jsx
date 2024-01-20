import Slider from './Slider';
import Toolbelt from './Toolbelt';

const Skills = () => {
    return (
        <section
            className=' bg-slate-200 align-element py-16 xs:py-12 xs:p-8'
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
