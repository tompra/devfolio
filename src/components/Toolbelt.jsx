import { toolbelt } from '../data';
import { useInView } from 'react-intersection-observer';

const Toolbelt = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <section ref={ref} className='w-full min-h-80 flex items-center'>
            <div className='container mx-auto flex flex-wrap items-start p-2'>
                {toolbelt.map((tool, index) => {
                    const { id, title, items } = tool;
                    const leftToRightDelay = 300 * index;
                    const rightToLeftDelay =
                        300 * (toolbelt.length - 1 - index);
                    return (
                        <div
                            key={id}
                            className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-5 mb-8 lg:px-2 lg:mb-0 ${
                                inView
                                    ? index < 4
                                        ? `animate-fade-right animate-once animate-duration-1000 animate-delay-[${leftToRightDelay}ms] animate-ease-in`
                                        : `animate-fade-left animate-once animate-duration-1000 animate-delay-[${rightToLeftDelay}ms] animate-ease-in`
                                    : ''
                            }`}
                        >
                            <div className='rounded-lg bg-sky-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex flex-col h-full transform hover:scale-105 hover:shadow-none hover:hue-rotate-15 transition duration-300'>
                                <div className=' h-20 border-b-2 border-gray-500 bg-white rounded-t-lg flex justify-center items-center'>
                                    <h5 className='xs:text-base text-black sm:text-xl font-bold leading-none '>
                                        {title}
                                    </h5>
                                </div>
                                <div className='flex flex-col p-2 flex-1'>
                                    <p className='xs:text-base text-lg text-white font-light mb-2'>
                                        {items.join(' | ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Toolbelt;
