import Map from './Map';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Contact = ({ animateVisibility }) => {
    const publicKey =
        typeof process !== 'undefined'
            ? process.env.REACT_APP_PUBLIC_KEY
            : 'default_PUBLIC_KEY';
    const templateId =
        typeof process !== 'undefined'
            ? process.env.REACT_APP_TEMPLATE_ID
            : 'default_TEMPLATE_ID';
    const serviceId =
        typeof process !== 'undefined'
            ? process.env.REACT_APP_SERVICE_ID
            : 'default_SERVICE_ID';

    const form = useRef();

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log('form');

        const formData = new FormData(form.current);

        try {
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formData,
                publicKey
            );
            console.log('result', result.text);
        } catch (error) {
            console.log('error', error);
            console.log('error.text', error.text);
            toast.error('Error sending email. Please try again!');
        }
    };

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
            className='bg-slate-200 dark:bg-gray-700 align-element py-16 grid grid-cols-1 md:grid-cols-2'
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
                <form ref={form} className='mx-auto space-y-4 my-10'>
                    <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        autoComplete='none'
                        id='name'
                        required
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Email'
                        autoComplete='none'
                        id='email'
                        required
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <input
                        type='text'
                        name='user_subject'
                        placeholder='Subject'
                        id='subject'
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <textarea
                        placeholder='Message'
                        name='user_message'
                        rows='6'
                        id='email-body'
                        required
                        className='w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]'
                    ></textarea>
                    <div className='flex justify-center'>
                        <button
                            onClick={(e) => sendEmail(e)}
                            type='submit'
                            className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                        >
                            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <div
                className={`bg-sky-700 py-3 xs:px-5 sm:px-5 md:px-0 rounded ${animateMap}`}
            >
                <Map />
            </div>
            <ToastContainer
                position='top-center'
                autoClose={5000}
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
