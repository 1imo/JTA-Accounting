import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const json = await request.json()

        // Validate the request
        if (!json.name || !json.email || !json.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Send email notification
        await resend.emails.send({
            from: 'contact@jtaaccountants.co.uk',
            to: 'info@jtaaccountants.co.uk',
            subject: 'New Contact Form Submission',
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${json.name}</p>
        <p><strong>Email:</strong> ${json.email}</p>
        <p><strong>Phone:</strong> ${json.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${json.message}</p>
      `,
        })

        // Store in database (optional)
        await prisma.contact.create({
            data: {
                name: json.name,
                email: json.email,
                phone: json.phone,
                message: json.message,
            },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}