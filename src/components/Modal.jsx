import PropTypes from 'prop-types';

const Modal = ({ toggleModal, content }) => {
    if (!content) {
        return null;
    }
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center py-5 justify-center animate-fade animate-once animate-duration-200 animate-delay-0 animate-ease-in'>
            <div className='bg-white rounded-md relative w-full max-w-5xl h-full overflow-y-auto dark:bg-gray-600 dark:text-white'>
                <div className='flex items-center justify-between p-4 md:py-5 border-b rounded-t dark:border-gray-600'>
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
                        <span className='sr-only'>Close modal</span>
                    </button>
                </div>
                <div className='p-4 mt-2'>
                    <img
                        src={content.img}
                        alt={content.title}
                        className='max-w-full'
                    />
                </div>
                <div className='p-4'>
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

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        userStories: PropTypes.arrayOf(PropTypes.string).isRequired,
        keyFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
        tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};
export default Modal;
