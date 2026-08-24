import React from 'react'
import { Search, Filter, Plus } from 'lucide-react'

const Takedowns: React.FC = () => {
  const takedowns = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      platform: 'YouTube',
      reason: 'Copyright claim by Music Rights Corp',
      takedownDate: '2024-01-22',
      status: 'pending',
      appealReason: '',
    },
    {
      id: '2',
      assetTitle: 'Live Concert - Full Version',
      platform: 'Spotify',
      reason: 'Royalty dispute',
      takedownDate: '2024-01-20',
      status: 'completed',
      appealReason: 'License obtained and submitted',
    },
    {
      id: '3',
      assetTitle: 'Acoustic Sessions',
      platform: 'Apple Music',
      reason: 'Metadata conflict',
      takedownDate: '2024-01-18',
      status: 'appealed',
      appealReason: 'Corrected metadata and resubmitted',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-900 text-yellow-300',
      completed: 'bg-green-900 text-green-300',
      appealed: 'bg-blue-900 text-blue-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Takedowns</h1>
          <p className="text-dark-200">Track content takedown requests and appeals</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          Log Takedown
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search takedowns..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {takedowns.map((takedown) => (
                <tr key={takedown.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{takedown.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{takedown.platform}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{takedown.reason}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{takedown.takedownDate}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(takedown.status)}`}>
                      {takedown.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> Track all content takedowns across platforms. Use the appeal feature to dispute incorrect takedowns.
        </p>
      </div>
    </div>
  )
}

export default Takedowns
