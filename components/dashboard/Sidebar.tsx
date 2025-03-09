import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4">
      <nav className="space-y-2">
        <Link 
          href="/dashboard"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
        >
          Dashboard
        </Link>
        <Link 
          href="/dashboard/pages"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
        >
          Pages
        </Link>
        {/* Add more navigation items as needed */}
      </nav>
    </aside>
  )
} 