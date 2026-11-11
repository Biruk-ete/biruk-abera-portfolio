import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function POST(request) {
    try {
        if (
            !process.env.RESEND_API_KEY ||
            !process.env.CONTACT_EMAIL ||
            !process.env.FROM_EMAIL
        ) {
            console.error('Email environment variables are missing.');

            return NextResponse.json(
                { message: 'Email service is not configured.' },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await request.json();

        const name = body.name?.trim();
        const email = body.email?.trim();
        const subject = body.subject?.trim();
        const message = body.message?.trim();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: 'Please complete all fields.' },
                { status: 400 }
            );
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return NextResponse.json(
                { message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        if (
            name.length > 100 ||
            email.length > 254 ||
            subject.length > 150 ||
            message.length > 5000
        ) {
            return NextResponse.json(
                { message: 'One or more fields are too long.' },
                { status: 400 }
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subject);
        const safeMessage = escapeHtml(message);

        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: [process.env.CONTACT_EMAIL],
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,

            text: `
New message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,

            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #202b3c;">
                    <h2 style="color: #4d73ce;">New Portfolio Message</h2>

                    <p>You have received a new message through your portfolio contact form.</p>

                    <div style="padding: 20px; background: #f8faff; border-radius: 10px; margin-top: 20px;">
                        <p><strong>Name:</strong> ${safeName}</p>
                        <p><strong>Email:</strong> ${safeEmail}</p>
                        <p><strong>Subject:</strong> ${safeSubject}</p>

                        <hr style="border: none; border-top: 1px solid #e5eaf3; margin: 20px 0;" />

                        <p><strong>Message:</strong></p>
                        <p style="line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
                    </div>

                    <p style="margin-top: 24px; color: #687386; font-size: 12px;">
                        Sent from your portfolio contact form.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);

            return NextResponse.json(
                { message: 'Unable to send your message. Please try again.' },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                message: 'Your message has been sent successfully!',
                id: data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API error:', error);

        return NextResponse.json(
            { message: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}