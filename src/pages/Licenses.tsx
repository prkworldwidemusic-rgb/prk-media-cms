import React from 'react'
import { Search, Filter, Plus } from 'lucide-react'

const Licenses: React.FC = () => {
  const licenses = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      licensee: 'Global Streaming Inc',
      type: 'exclusive',
      territory: 'Worldwide',
      status: 'active',
      expiryDate: '2025-12-31',
    },
    {
      id: '2',
      assetTitle: 'Live Concert - Full Version',
      licensee: 'Regional Media Corp',
      type: 'non-exclusive',
      territory: 'Asia Pacific',
      status: 'active',
      expiryDate: '2024-06-30',
    },
    {
      id: '3',
      assetTitle: 'Acoustic Sessions',
      licensee: 'Educational Platform',
      type: 'compulsory',
      territory: 'North America',
      status: 'expired',
      expiryDate: '2023-12-31',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: 'bg-green-900 text-green-300',
      expired: 'bg-red-900 text-red-300',
      terminated: 'bg-gray-700 text-gray-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Licenses</h1>
          <p className="text-dark-200">Manage content licenses and distribution rights</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          New License
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search licenses..."
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Licensee</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Territory</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Expiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {licenses.map((license) => (
                <tr key={license.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{license.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{license.licensee}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{license.type}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{license.territory}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(license.status)}`}>
                      {license.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{license.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> Licenses from existing Supabase 'licenses' table will be loaded here.
        </p>
      </div>
    </div>
  )
}

export default Licenses
