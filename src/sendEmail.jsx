import emailjs from '@emailjs/browser';
const sendEmail = (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
    emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                user_name: details.user_name,
                user_email: details.user_email,
                user_subject: details.user_subject,
                message: details.user_message,
            }
        )
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.error('error', error);
        });
};
export { sendEmail };
