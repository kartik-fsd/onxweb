import pool from '@/lib/db';
import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const body = await request.json();
    const { fullName, phoneNumber, email, company, companyWebsite, projectDetails, acceptedPrivacyPolicy } = body;

    // Save to MySQL database
    try {
        await pool.execute(
            'INSERT INTO inquiries (fullName, phoneNumber, email, company, companyWebsite, projectDetails, acceptedPrivacyPolicy) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [fullName, phoneNumber, email, company, companyWebsite, projectDetails, acceptedPrivacyPolicy]
        );
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ message: 'Error saving to database' }, { status: 500 });
    }

    // Send email
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'New Inquiry Received',
            text: `
          New inquiry received:
          
          Full Name: ${fullName}
          Phone Number: ${phoneNumber}
          Email: ${email}
          Company: ${company}
          Company Website: ${companyWebsite}
          Project Details: ${projectDetails}
        `,
        });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Form submitted successfully' });
}