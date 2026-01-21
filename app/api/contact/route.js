import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        if (!process.env.SMTP_USERNAME || !process.env.SMTP_PASSWORD) {
            console.error('SMTP Credentials missing: USER=', !!process.env.SMTP_USERNAME, 'PASS=', !!process.env.SMTP_PASSWORD);
            return NextResponse.json(
                { error: 'Server configuration error: Missing SMTP credentials.' },
                { status: 500 }
            );
        }

        const port = parseInt(process.env.SMTP_PORT || '465');

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.hostinger.com',
            port: port,
            secure: port === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USERNAME, // Sender address
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USERNAME, // Receiver address
            cc: process.env.CONTACT_EMAIL_CC, // CC address
            replyTo: email, // Reply to the user's email
            subject: `New Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
