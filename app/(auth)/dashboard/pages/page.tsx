import { prisma } from '@/lib/db'
import Link from 'next/link'
import PageList from '@/components/dashboard/PageList'
import CreatePageButton from '@/components/dashboard/CreatePageButton'

export default async function PagesPage() {
  const pages = await prisma.page.findMany({
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pages</h1>
        <CreatePageButton />
      </div>

      <PageList pages={pages} />
    </div>
  )
}