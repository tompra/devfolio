import Map from './Map';
const Contact = () => {
    return (
        <section
            className='bg-slate-200 align-element py-16 grid grid-cols-1 md:grid-cols-2'
            id='contact'
        >
            <div className='px-8'>
                <h1 className='text-3xl font-bold text-center sm:text-start'>
                    Drop me a message
                </h1>
                <p className='my-5'>
                    I&apos;m interested in new opportunities - especially in
                    large projects. If you have a question or a request, just
                    contact me using the form below.{' '}
                </p>
                <form className='mx-auto max-w-md space-y-4 my-10'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]'
                    />
                    <textarea
                        placeholder='Message'
                        rows='6'
                        className='w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]'
                    ></textarea>
                    <div className='flex justify-center'>
                        <button
                            type='button'
                            className='text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-24'
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <div className='bg-sky-700 py-3 xs:px-5 sm:px-5 md:px-0 rounded'>
                <Map />
            </div>
        </section>
    );
};
export default Contact;
