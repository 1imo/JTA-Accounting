import { prisma } from '@/lib/db'
import { hash } from 'bcryptjs'
import { logger } from '@/lib/utils/logger'

export async function createDefaultAdminIfNotExists() {
    logger.info('Starting admin initialization check...')

    const defaultUsername = process.env.DEFAULT_ADMIN_USERNAME
    const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD

    if (!defaultUsername || !defaultPassword) {
        logger.error('Missing environment variables:', {
            username: defaultUsername,
            hasPassword: !!defaultPassword
        })
        throw new Error('Default admin credentials not found in environment variables')
    }

    logger.info('Environment variables found:', { username: defaultUsername })

    try {
        // Test database connection
        await prisma.$connect()
        logger.info('Database connected successfully')

        // Check if any user exists
        const userCount = await prisma.user.count()
        logger.info('Current user count:', userCount)

        if (userCount === 0) {
            logger.info('No users found, creating default admin...')

            // Create default admin
            const hashedPassword = await hash(defaultPassword, 12)

            const newUser = await prisma.user.create({
                data: {
                    username: defaultUsername,
                    password: hashedPassword,
                    role: 'ADMIN'
                }
            })

            logger.info('Default admin user created successfully:', {
                id: newUser.id,
                username: newUser.username,
                role: newUser.role
            })

            return newUser
        } else {
            logger.info('Users already exist, skipping default admin creation')
            return null
        }
    } catch (error) {
        logger.error('Error during admin initialization:', error)
        throw error
    } finally {
        await prisma.$disconnect()
        logger.info('Database disconnected')
    }
} 