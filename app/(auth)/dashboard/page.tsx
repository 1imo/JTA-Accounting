import { prisma } from '@/lib/db'
import Link from 'next/link'

interface DashboardStats {
  name: string
  value: number
  change?: string
  trend?: 'up' | 'down'
}

export default async function DashboardPage() {
  const stats = await getStats()
  const recentPages = await getRecentPages()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link
          href="/dashboard/pages/new"
          className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        >
          Create Page
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <p className="text-sm font-medium text-gray-600">{stat.name}</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
            {stat.change && (
              <p className={`mt-2 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Recent Pages */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Recent Pages</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPages.map((page) => (
                <tr key={page.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/dashboard/pages/${page.id}`}
                      className="text-blue-900 hover:text-blue-700"
                    >
                      {page.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/dashboard/pages/${page.id}`}
                      className="text-blue-900 hover:text-blue-700"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

async function getStats(): Promise<DashboardStats[]> {
  const totalPages = await prisma.page.count()
  
  return [
    { name: 'Total Pages', value: totalPages },
    { name: 'Published Pages', value: totalPages },
    { name: 'Draft Pages', value: 0 },
  ]
}

async function getRecentPages() {
  return await prisma.page.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 5,
  })
}