import Img2 from '../assets/photos/climb.jpeg';
const About = () => {
    return (
        <section
            className='bg-white align-element py-16 border-b-2 border-gray-400'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='md:order-2'>
                    <h1 className='text-3xl font-bold'>About me</h1>
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
                <div className='relative w-full max-w-[80vw] h-80 max-h-[80vw] overflow-hidden rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] mx-auto'>
                    <img
                        src={Img2}
                        alt='Me climbing a boulder'
                        className='object-cover w-full h-full '
                    />
                </div>
            </div>
        </section>
    );
};
export default About;
