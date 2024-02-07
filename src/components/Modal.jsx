import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Modal = () => {
    const { t } = useTranslation();
    const { toggleModal, isModalOpen, modalContent } = useAppContext();
    if (!isModalOpen || !modalContent) {
        return null;
    }

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        fontSize: '15px',
        backgroundColor: '#D4DADF',
        borderRadius: '100%',
    };
    const indicatorStyles = {
        background: '#0761BB',
        width: 12,
        height: 12,
        display: 'inline-block',
        borderRadius: '100%',
        margin: '-10px 8px',
        color: '#D4DADF',
    };

    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button
                type='button'
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
            >
                ←
            </button>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button
                type='button'
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
            >
                →
            </button>
        );

    const renderIndicator = (onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li
                    style={{ ...indicatorStyles, background: '#fff' }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                />
            );
        }
        return (
            <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role='button'
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
    };
    const userStories = t(modalContent.userStories, {
        returnObjects: true,
    });

    const keyFeatures = t(modalContent.keyFeatures, {
        returnObjects: true,
    });
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
                <div className='mx-auto w-90 '>
                    <Carousel
                        autoPlay={true}
                        showArrows={true}
                        showIndicators={true}
                        useKeyboardArrows={true}
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        renderArrowNext={renderArrowNext}
                        renderArrowPrev={renderArrowPrev}
                        renderIndicator={renderIndicator}
                    >
                        {modalContent.title === 'ChatApp'
                            ? modalContent.img.slice(1).map((image, index) => {
                                  return (
                                      <div key={index}>
                                          <img
                                              className='mx-auto w-full h-96 object-contain'
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
                                              className='mx-auto w-95'
                                              src={image}
                                              alt={modalContent.title}
                                          />
                                      </div>
                                  );
                              })}
                    </Carousel>
                </div>
                <div className='p-4'>
                    <p className='font-bold text-xl py-2'>
                        {t('descriptionModal')}
                    </p>{' '}
                    <p className='mb-3 font-normal my-1'>
                        {t(modalContent.descriptionKey)}
                    </p>
                    <p className='font-bold text-xl py-2'>{t('userStories')}</p>{' '}
                    <ul className='list-disc ml-4'>
                        {userStories.map((story, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {story}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2'>{t('keyFeatures')}</p>
                    <ul className='list-disc ml-4'>
                        {keyFeatures.map((feature, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {feature}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2'>
                        {t('technologies')}
                    </p>{' '}
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
