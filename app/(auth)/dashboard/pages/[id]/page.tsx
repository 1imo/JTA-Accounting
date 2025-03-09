import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import PageEditor from '@/components/dashboard/PageEditor'

interface PageParams {
  readonly params: {
    readonly id: string
  }
}

export default async function EditPagePage({ params }: PageParams) {
  const page = await prisma.page.findUnique({
    where: { id: params.id },
  })

  if (!page) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Edit Page</h1>
      <PageEditor page={page} />
    </div>
  )
}