import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getServerSession } from 'next-auth/next'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const page = await prisma.page.findUnique({
            where: { id: params.id },
        })

        if (!page) {
            return NextResponse.json(
                { error: 'Page not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(page)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch page' },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const session = await getServerSession()

    if (!session) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        )
    }

    try {
        const json = await request.json()
        const page = await prisma.page.update({
            where: { id: params.id },
            data: {
                title: json.title,
                content: json.content,
                slug: json.slug,
            },
        })
        return NextResponse.json(page)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update page' },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const session = await getServerSession()

    if (!session) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        )
    }

    try {
        await prisma.page.delete({
            where: { id: params.id },
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete page' },
            { status: 500 }
        )
    }
}