import emailjs from 'emailjs-com';

export const sendEmail = (to) => {
    emailjs.send(
        'service_dzd0ref', // Service ID
        'template_mr04hvv', // Template ID
        { to_email:to, message: 'Hello from EmailJS!' }, // Template data
        'G-0HaRjXWRzuSw1GI' // User ID
    )
    .then(response => {
        console.log('Email sent successfully!', response.status, response.text);
    })
    .catch(error => {
        console.error('Failed to send email:', error);
    });
};


