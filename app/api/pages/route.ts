import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getServerSession } from 'next-auth/next'

export async function GET() {
    try {
        const pages = await prisma.page.findMany({
            orderBy: { updatedAt: 'desc' },
        })
        return NextResponse.json(pages)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch pages' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    const session = await getServerSession()

    if (!session) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        )
    }

    try {
        const json = await request.json()
        const page = await prisma.page.create({
            data: {
                title: json.title,
                content: json.content,
                slug: json.slug,
            },
        })
        return NextResponse.json(page)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create page' },
            { status: 500 }
        )
    }
}