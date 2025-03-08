import { PrismaClient } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()

async function main() {



    const userWithPost = await prisma.user.findMany({
        include: {
            posts: true,
        }
    })

    console.dir(userWithPost, { depth: null });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })