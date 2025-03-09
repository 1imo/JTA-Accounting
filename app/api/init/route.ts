import { createDefaultAdminIfNotExists } from '@/lib/auth/createDefaultAdmin'
import { logger } from '@/lib/utils/logger'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        logger.info('API: Starting initialization...')
        await createDefaultAdminIfNotExists()
        logger.info('API: Initialization complete')
        return NextResponse.json({ status: 'success' })
    } catch (error) {
        logger.error('API: Initialization failed:', error)
        return NextResponse.json({ status: 'error', message: 'Initialization failed' }, { status: 500 })
    }
} 