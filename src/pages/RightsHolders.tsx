import React from 'react'
import { Search, Filter, Plus } from 'lucide-react'

const RightsHolders: React.FC = () => {
  const rightsHolders = [
    {
      id: '1',
      name: 'John Smith Productions',
      email: 'contact@johnsmith.com',
      type: 'organization',
      status: 'active',
      joinedAt: '2023-06-15',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@music.com',
      type: 'individual',
      status: 'active',
      joinedAt: '2023-08-22',
    },
    {
      id: '3',
      name: 'Global Music Distribution Ltd',
      email: 'info@globaldist.com',
      type: 'organization',
      status: 'inactive',
      joinedAt: '2023-03-10',
    },
  ]

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Rights Holders</h1>
          <p className="text-dark-200">Manage content owners and rights holders</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          Add Rights Holder
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search rights holders..."
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {rightsHolders.map((holder) => (
                <tr key={holder.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{holder.name}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{holder.email}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{holder.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      holder.status === 'active'
                        ? 'bg-green-900 text-green-300'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {holder.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{holder.joinedAt}</td>
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
          <strong>Placeholder:</strong> Rights Holders table does not exist in current schema. Mock UI shown for design.
        </p>
      </div>
    </div>
  )
}

export default RightsHolders
