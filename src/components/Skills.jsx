import Slider from './Slider';
import Toolbelt from './Toolbelt';

const Skills = () => {
    return (
        <section className=' bg-indigo-200 align-element py-5'>
            <h1 className='text-3xl'>Skills</h1>
            <p className='py-5'>
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
