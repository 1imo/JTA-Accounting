import { PrismaClient } from '@prisma/client'
import { logger } from './utils/logger'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}

// Test the connection on module load
prisma.$connect()
    .then(() => {
        logger.info('Initial database connection test successful')
        return prisma.$disconnect()
    })
    .then(() => {
        logger.info('Initial database connection closed')
    })
    .catch((error) => {
        logger.error('Initial database connection test failed:', error)
    })