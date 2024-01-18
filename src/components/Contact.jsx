import Map from './Map';
const Contact = () => {
    return (
        <section className='align-element  bg-amber-500'>
            <h1 className='text-3xl text-cyan-400'>Drop me a message</h1>
            <p className='my-2'>
                I&apos;m interested in ew opportunities - especially in large
                projects. If you have a question or a request, just contact me
                using the form below.{' '}
            </p>
            <form className='max-w-md mx-auto'>
                <div className='grid md:grid-cols-2 md:gap-6 py-3'>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            name='floating_first_name'
                            id='floating_first_name'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_first_name'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            First name
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            name='floating_last_name'
                            id='floating_last_name'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_last_name'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Last name
                        </label>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:gap-6'>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='tel'
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                            name='floating_phone'
                            id='floating_phone'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_phone'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Phone number
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            name='floating_email'
                            id='floating_email'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_email'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Email
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <label
                            htmlFor='message'
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Your message
                        </label>
                        <textarea
                            id='message'
                            rows='4'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Leave a comment...'
                        ></textarea>
                    </div>
                </div>
            </form>
            <div className=' bg-pink-400'>
                <Map />
            </div>
        </section>
    );
};
export default Contact;
