import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Modal = () => {
    const { toggleModal, isModalOpen, modalContent } = useAppContext();
    if (!isModalOpen || !modalContent) {
        return null;
    }
    return (
        <div
            className='fixed inset-0 bg-gray-800 bg-opacity-75 font-lato flex items-center py-5 justify-center animate-fade animate-once animate-duration-200 animate-delay-0 animate-ease-in'
            role='dialog'
        >
            <div className='bg-white rounded-md relative w-full max-w-5xl h-full overflow-y-auto dark:bg-gray-600 dark:text-white'>
                <div className='flex items-center justify-between p-4 md:py-5 border-b rounded-t dark:border-gray-600'>
                    <h1 className='text-2xl font-bold'>{modalContent.title}</h1>
                    <button
                        type='button'
                        onClick={toggleModal}
                        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                        aria-label='Close modal'
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

                <div className='mx-auto'>
                    <Carousel
                        autoPlay={true}
                        showArrows={true}
                        showIndicators={true}
                        useKeyboardArrows={true}
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                    >
                        {modalContent.title === 'ChatApp'
                            ? modalContent.img.slice(1).map((image, index) => {
                                  return (
                                      <div key={index}>
                                          <img
                                              className='mx-auto max-w-full h-96 object-contain'
                                              src={image}
                                              alt={modalContent.title}
                                          />
                                      </div>
                                  );
                              })
                            : modalContent.img.map((image, index) => {
                                  return (
                                      <div key={index}>
                                          <img
                                              className='mx-auto w-full'
                                              src={image}
                                              alt={modalContent.title}
                                          />
                                      </div>
                                  );
                              })}
                    </Carousel>
                </div>

                <div className='p-4'>
                    <p className='font-bold text-xl py-2'>Description</p>{' '}
                    <p className='mb-3 font-normal my-1'>
                        {modalContent.description}
                    </p>
                    <p className='font-bold text-xl py-2'>User Stories</p>{' '}
                    <ul className='list-disc ml-4'>
                        {modalContent.userStories.map((story, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {story}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2'>Key Features</p>
                    <ul className='list-disc ml-4'>
                        {modalContent.keyFeatures.map((feature, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {feature}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2'>Technologies</p>{' '}
                    <p className='my-1'>{modalContent.tools.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    modalContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
        userStories: PropTypes.arrayOf(PropTypes.string).isRequired,
        keyFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
        tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};
export default Modal;
