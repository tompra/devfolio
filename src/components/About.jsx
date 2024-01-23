import Img2 from '../assets/photos/climb.jpeg';

const About = () => {
    return (
        <section
            className='bg-white align-element sm:py-20 border-b-2 border-gray-700 xs:py-12 dark:bg-gray-600 animate-fade-left animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 xs:p-8 dark:text-white'>
                <div className='md:order-2 xs:flex xs:flex-col xs:justify-center animate-fade-down animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                    <h1 className='text-3xl font-bold xs:text-center sm:text-start xs:mb-5 sm:mb-3'>
                        About me
                    </h1>
                    <p className='py-3 leading-7'>
                        Hi there, I am a versatile professional with a
                        background in economics, multimedia design, and
                        currently excelling as a web developer. My journey
                        started with roles ranging from junior administrative to
                        event coordination, cultivating strong communication,
                        problem-solving, organizational, and flexibility skills.
                        As a creative and detail-oriented person, I find joy in
                        tackling challenges and continuously expanding my
                        knowledge.
                    </p>
                </div>
                <div className='xs:hidden sm:flex sm:items-center md:w-80 md:h-80 overflow-hidden rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] mx-auto border-4 border-sky-500 hover:shadow-none animate-fade-up animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out'>
                    <img
                        src={Img2}
                        alt='Me climbing a boulder'
                        className='object-cover w-full h-full hover:opacity-90 '
                    />
                </div>
            </div>
        </section>
    );
};
export default About;
