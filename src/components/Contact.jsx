import Map from './Map';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { sendEmail } from '../sendEmail';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../context/context';

const Contact = () => {
    const { animateVisibility } = useAppContext();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_subject: '',
        user_message: '',
    });

    const handleInputForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevInput) => {
            return {
                ...prevInput,
                [name]: value,
            };
        });
    };

    const handleSendEmail = async (e) => {
        e.preventDefault();
        try {
            sendEmail(formData);
            toast.success('Email was sent successfully!');
        } catch (err) {
            console.error('Error sending mail', err);
            toast.error('Error sending email. Please try again later!');
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const animateForm = animateVisibility(
        inView,
        'animate-fade-right animate-once animate-duration-[600ms] animate-delay-100 animate-ease-in'
    );

    const animateMap = animateVisibility(
        inView,
        'animate-fade-left animate-once animate-duration-[600ms] animate-delay-[800ms] animate-ease-in-out'
    );

    return (
        <section
            ref={ref}
            className='bg-slate-200 dark:bg-gray-700 align-element py-16 grid grid-cols-1 md:grid-cols-2 font-roboto'
            id='contact'
        >
            <div
                className={`px-8 mx-auto max-w-lg dark:text-white ${animateForm}`}
            >
                <h1 className='text-3xl font-bold text-center sm:text-start'>
                    Drop me a message
                </h1>
                <p className='my-5'>
                    I&apos;m interested in new opportunities - especially in
                    large projects. If you have a question or a request, just
                    contact me using the form below.{' '}
                </p>
                <form className='mx-auto space-y-4 my-10'>
                    <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        autoComplete='none'
                        id='name'
                        value={formData.name}
                        onChange={handleInputForm}
                        required
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Email'
                        autoComplete='none'
                        id='email'
                        value={formData.email}
                        onChange={handleInputForm}
                        required
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <input
                        type='text'
                        name='user_subject'
                        placeholder='Subject'
                        id='subject'
                        value={formData.subject}
                        onChange={handleInputForm}
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <textarea
                        placeholder='Message'
                        name='user_message'
                        rows='6'
                        id='email-body'
                        value={formData.message}
                        onChange={handleInputForm}
                        required
                        className='w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]'
                    ></textarea>
                    <div className='flex justify-center'>
                        <button
                            onClick={handleSendEmail}
                            className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                            disabled={
                                !formData.user_name ||
                                !formData.user_email ||
                                !formData.user_message
                            }
                        >
                            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <div
                className={`bg-sky-700 py-3 xs:px-5 sm:px-5 md:px-0 mx-4 rounded ${animateMap}`}
            >
                <Map />
            </div>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};
Contact.propTypes = {
    animateVisibility: PropTypes.func.isRequired,
};
export default Contact;
