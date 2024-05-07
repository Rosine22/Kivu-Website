
import nodemailer from 'nodemailer';
import dotenv from "dotenv"; 
dotenv.config();

export const sendEmail = (recipient, subject, body) => {
    console.log(recipient, subject, body);
    console.log(process.env.EMAIL_SERVICE, process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: '"Kivu Shore" <uwinezarosine16@gmail.com>',
        to: recipient,
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
