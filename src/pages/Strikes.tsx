import React from 'react'
import { Search, Filter, AlertTriangle } from 'lucide-react'

const Strikes: React.FC = () => {
  const strikes = [
    {
      id: '1',
      channel: 'PRK Media Official (YouTube)',
      strikeDate: '2024-01-20',
      reason: 'Copyright violation - repeated infringement',
      status: 'active',
      expiryDate: '2024-04-20',
      daysRemaining: 87,
    },
    {
      id: '2',
      channel: 'PRK Music Artist (Spotify)',
      strikeDate: '2023-10-15',
      reason: 'Royalty non-payment',
      status: 'resolved',
      expiryDate: '2024-01-15',
      daysRemaining: 0,
    },
    {
      id: '3',
      channel: 'PRK Productions (Instagram)',
      strikeDate: '2024-01-10',
      reason: 'Multiple claims from different rights holders',
      status: 'active',
      expiryDate: '2024-04-10',
      daysRemaining: 77,
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: 'bg-red-900 text-red-300',
      resolved: 'bg-green-900 text-green-300',
      expired: 'bg-gray-700 text-gray-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <AlertTriangle size={32} className="text-red-500" />
          Channel Strikes
        </h1>
        <p className="text-dark-200">Monitor and manage strikes on your accounts</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-6">
        <p className="text-sm text-red-400">
          <strong>⚠️ Warning:</strong> Multiple strikes can result in channel termination. Address violations immediately to prevent permanent suspension.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search strikes..."
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Channel</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Strike Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Days Remaining</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {strikes.map((strike) => (
                <tr key={strike.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{strike.channel}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{strike.reason}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{strike.strikeDate}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(strike.status)}`}>
                      {strike.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-medium ${
                      strike.daysRemaining > 0 ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {strike.daysRemaining > 0 ? `${strike.daysRemaining}d` : 'Expired'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> Strikes typically expire after 90 days. Monitor expiry dates and take corrective action to avoid account suspension.
        </p>
      </div>
    </div>
  )
}

export default Strikes
