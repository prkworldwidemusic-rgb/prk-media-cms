import React from 'react'
import { Search, Filter, Download } from 'lucide-react'

const Claims: React.FC = () => {
  // Mock claims data
  const claims = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      claimantName: 'Music Rights Corp',
      claimType: 'copyright',
      status: 'pending',
      createdAt: '2024-01-20',
    },
    {
      id: '2',
      assetTitle: 'Acoustic Sessions',
      claimantName: 'Artist Management Ltd',
      claimType: 'performance',
      status: 'approved',
      createdAt: '2024-01-18',
    },
    {
      id: '3',
      assetTitle: 'Live Concert - Full Version',
      claimantName: 'Concert Records',
      claimType: 'sync',
      status: 'disputed',
      createdAt: '2024-01-16',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-900 text-yellow-300',
      approved: 'bg-green-900 text-green-300',
      rejected: 'bg-red-900 text-red-300',
      disputed: 'bg-orange-900 text-orange-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Claims Management</h1>
        <p className="text-dark-200">Review and manage copyright claims on your assets</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search claims..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          <span className="hidden sm:inline">Filter</span>
        </button>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={18} />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>

      {/* Claims Table */}
      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Claimant
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{claim.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{claim.claimantName}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{claim.claimType}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(claim.status)}`}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{claim.createdAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> This module displays data from existing Supabase 'claims' table. Verify exact table schema before connecting live data.
        </p>
      </div>
    </div>
  )
}

export default Claims
