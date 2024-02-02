import PropTypes from 'prop-types';
import { useAppContext } from '../context/context';

const CaseStudy = () => {
    const { toggleCaseStudy, isCaseStudyOpen, modalContent } = useAppContext();

    if (!isCaseStudyOpen || !modalContent) {
        return null;
    }

    const [
        {
            overview,
            purpose,
            duration,
            credits,
            toolsFront,
            toolsBack,
            frontend,
            backend,
            improvements,
            conclusion,
        },
    ] = modalContent.caseStudy;

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center py-5 justify-center animate-fade animate-once animate-duration-200 animate-delay-0 animate-ease-in font-lato'>
            <div className='bg-white rounded-md relative w-full max-w-5xl h-full overflow-y-auto dark:bg-gray-600 dark:text-white'>
                <div className='flex items-center justify-between p-4 md:py-5 border-b rounded-t dark:border-gray-600'>
                    <h1 className='text-2xl font-bold'>
                        Case Study: {modalContent.title}
                    </h1>
                    <button
                        type='button'
                        onClick={toggleCaseStudy}
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
                        src={modalContent.img}
                        alt={modalContent.title}
                        className='max-w-full'
                    />
                </div>
                <div className='p-4'>
                    <p className='font-bold text-xl py-2 text-center'>
                        Overview
                    </p>
                    <p className='mb-3 font-normal my-1 leading-8'>
                        {overview}
                    </p>
                    <p className='font-bold text-xl py-2 text-center'>
                        Purpose & Objective
                    </p>
                    <p className='mb-3 font-normal my-1 leading-8'>{purpose}</p>
                    <p className='font-bold text-xl py-2 text-center'>
                        Duration
                    </p>{' '}
                    <p className='mb-3 font-normal my-1 leading-8'>
                        {duration}
                    </p>
                    <p className='font-bold text-xl py-2 text-center'>
                        Credits
                    </p>{' '}
                    <p className='mb-3 font-normal my-1 leading-8'>{credits}</p>
                    <p className='font-bold text-xl py-2 text-center'>
                        Tools
                    </p>{' '}
                    <p className='font-bold text-xl py-2'>Frontend</p>{' '}
                    <p className='mb-3 font-normal my-1'>{toolsFront}</p>
                    <p className='font-bold text-xl py-2'>Backend</p>{' '}
                    <p className='mb-3 font-normal my-1'>{toolsBack}</p>
                    <p className='font-bold text-xl py-2 text-center'>
                        Aproach
                    </p>{' '}
                    <p className='font-bold text-xl py-2'>Frontend</p>{' '}
                    <p className='mb-3 font-normal my-1 leading-8'>
                        {frontend}
                    </p>
                    <p className='font-bold text-xl py-2'>Backend</p>{' '}
                    <p className='mb-3 font-normal my-1 leading-8'>{backend}</p>
                    <p className='font-bold text-xl py-2 text-center'>
                        Possible Improvements
                    </p>{' '}
                    <ul className='list-disc pl-4 mb-3'>
                        {improvements.map((item, index) => {
                            return (
                                <li key={index} className='my-1'>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <p className='font-bold text-xl py-2 text-center'>
                        Conclusion
                    </p>{' '}
                    <p className='my-1 leading-8'>{conclusion}</p>
                </div>
            </div>
        </div>
    );
};

CaseStudy.propTypes = {
    toggleCaseStudy: PropTypes.func.isRequired,
};
export default CaseStudy;
