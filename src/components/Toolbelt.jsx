import { toolbelt } from '../data';

const Toolbelt = () => {
    return (
        <section className='bg-orange-600 w-full min-h-80 flex items-center'>
            <div className='container mx-auto flex flex-wrap items-start p-2'>
                {toolbelt.map((tool) => {
                    const { id, title, items } = tool;
                    return (
                        <div
                            key={id}
                            className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:px-2 lg:mb-0'
                        >
                            <div className='rounded-lg  bg-purple-700'>
                                <div className='border-b-2 bg-white rounded-t-lg'>
                                    <h5 className='text-black text-2xl font-bold leading-none p-3'>
                                        {title}
                                    </h5>
                                </div>
                                <div className='flex flex-col p-2'>
                                    <p className='text-lg text-white font-light mb-2'>
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
