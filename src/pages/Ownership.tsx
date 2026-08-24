import React from 'react'
import { Search, Filter, Plus } from 'lucide-react'

const Ownership: React.FC = () => {
  const ownership = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      owner: 'John Smith Productions',
      percentage: 60,
      type: 'composition',
      status: 'verified',
      verifiedDate: '2024-01-10',
    },
    {
      id: '2',
      assetTitle: 'Summer Breeze - Remix',
      owner: 'Global Music Distribution Ltd',
      percentage: 40,
      type: 'recording',
      status: 'pending',
      verifiedDate: '',
    },
    {
      id: '3',
      assetTitle: 'Live Concert - Full Version',
      owner: 'PRK Media Pvt Ltd',
      percentage: 100,
      type: 'both',
      status: 'verified',
      verifiedDate: '2024-01-05',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      verified: 'bg-green-900 text-green-300',
      pending: 'bg-yellow-900 text-yellow-300',
      disputed: 'bg-red-900 text-red-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Ownership</h1>
          <p className="text-dark-200">Manage asset ownership and rights distribution</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          Add Ownership
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search ownership records..."
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Ownership %</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {ownership.map((record) => (
                <tr key={record.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{record.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{record.owner}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="w-24 bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-blue-primary h-2 rounded-full"
                        style={{ width: `${record.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-dark-200 ml-2">{record.percentage}%</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{record.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-orange-600/30 rounded-lg p-4">
        <p className="text-sm text-orange-600">
          <strong>Placeholder:</strong> Ownership table does not exist in current Supabase schema. Mock UI shown for design planning.
        </p>
      </div>
    </div>
  )
}

export default Ownership
