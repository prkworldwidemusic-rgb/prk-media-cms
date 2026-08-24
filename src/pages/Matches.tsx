import React from 'react'
import { Search, Filter, Download } from 'lucide-react'

const Matches: React.FC = () => {
  // Mock matches data
  const matches = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      referenceTitle: 'Summer Breeze - Original',
      confidence: 94.5,
      matchType: 'audio',
      status: 'new',
      createdAt: '2024-01-22',
    },
    {
      id: '2',
      assetTitle: 'Live Concert - Full Version',
      referenceTitle: 'Concert Recording v2',
      confidence: 87.2,
      matchType: 'video',
      status: 'reviewed',
      createdAt: '2024-01-21',
    },
    {
      id: '3',
      assetTitle: 'Acoustic Sessions',
      referenceTitle: 'Acoustic Sessions - Studio',
      confidence: 91.8,
      matchType: 'audio',
      status: 'resolved',
      createdAt: '2024-01-20',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-900 text-blue-300',
      reviewed: 'bg-yellow-900 text-yellow-300',
      resolved: 'bg-green-900 text-green-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-500'
    if (confidence >= 80) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Match Detection</h1>
        <p className="text-dark-200">Monitor content matches and fingerprint results</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search matches..."
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

      {/* Matches Table */}
      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Your Asset
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {matches.map((match) => (
                <tr key={match.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{match.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{match.referenceTitle}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={getConfidenceColor(match.confidence)}>
                      {match.confidence}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{match.matchType}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(match.status)}`}>
                      {match.status}
                    </span>
                  </td>
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
          <strong>Note:</strong> This module displays data from existing Supabase 'matches' and 'reference_files' tables.
        </p>
      </div>
    </div>
  )
}

export default Matches
