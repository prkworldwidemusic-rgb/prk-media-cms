import React from 'react'
import { Download, Filter } from 'lucide-react'

const Revenue: React.FC = () => {
  const revenueRecords = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      source: 'YouTube',
      amount: 1250,
      currency: 'USD',
      period: '2024-01',
      status: 'received',
    },
    {
      id: '2',
      assetTitle: 'Live Concert - Full Version',
      source: 'Spotify',
      amount: 850,
      currency: 'USD',
      period: '2024-01',
      status: 'pending',
    },
    {
      id: '3',
      assetTitle: 'Acoustic Sessions',
      source: 'Apple Music',
      amount: 620,
      currency: 'USD',
      period: '2024-01',
      status: 'reconciled',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-900 text-yellow-300',
      received: 'bg-green-900 text-green-300',
      reconciled: 'bg-blue-900 text-blue-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  const totalRevenue = revenueRecords.reduce((sum, r) => sum + r.amount, 0)

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Revenue</h1>
          <p className="text-dark-200">Track earnings from all platforms and sources</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
          <p className="text-sm text-dark-200 mb-2">Total Revenue (This Month)</p>
          <p className="text-3xl font-bold text-green-400">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
          <p className="text-sm text-dark-200 mb-2">Pending Payments</p>
          <p className="text-3xl font-bold text-yellow-400">$850</p>
        </div>
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
          <p className="text-sm text-dark-200 mb-2">Reconciled Revenue</p>
          <p className="text-3xl font-bold text-blue-400">$620</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search revenue records..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={18} />
          Export
        </button>
      </div>

      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Source</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Period</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {revenueRecords.map((record) => (
                <tr key={record.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{record.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{record.source}</td>
                  <td className="px-6 py-4 text-sm text-green-400 font-medium">${record.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{record.period}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status}
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
          <strong>Note:</strong> Revenue data from existing Supabase 'revenue' table (if exists) will be displayed here.
        </p>
      </div>
    </div>
  )
}

export default Revenue
