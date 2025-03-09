'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreatePageButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)

    try {
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Page',
          content: '',
          slug: 'new-page',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create page')
      }

      const page = await response.json()
      router.push(`/dashboard/pages/${page.id}`)
    } catch (error) {
      alert('Failed to create page')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {loading ? 'Creating...' : 'Create Page'}
    </button>
  )
} 