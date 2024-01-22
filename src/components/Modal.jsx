const Modal = ({ toggleModal, content }) => {
    console.log('project', content);
    if (!content) {
        return null;
    }
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center '>
            <div className='bg-white p-8 rounded-md relative w-full max-w-3xl h-full overflow-y-auto dark:bg-gray-600 dark:text-white'>
                <div className='flex items-center justify-between py-4 md:py-5 border-b rounded-t dark:border-gray-600'>
                    <h1 className='text-2xl font-bold'>{content.title}</h1>
                    <button
                        type='button'
                        onClick={toggleModal}
                        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                        <svg
                            className='w-3 h-3'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 14 14'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                            />
                        </svg>
                        <span class='sr-only'>Close modal</span>
                    </button>
                </div>
                <div>
                    <img
                        src={content.img}
                        alt={content.title}
                        className='max-w-full'
                    />
                </div>
                <div className='pt-2'>
                    <p className='font-bold text-xl py-2'>Description</p>{' '}
                    <p className='mb-3 font-normal my-1'>
                        {content.description}
                    </p>
                    <p className='font-bold text-xl py-2'>User Stories</p>{' '}
                    <ul>
                        {content.userStories.map((story, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {story}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2'>Key Features</p>
                    <ul>
                        {content.keyFeatures.map((feature, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {feature}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2'>Technologies</p>{' '}
                    <p className='my-1'>{content.tools.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};
export default Modal;
