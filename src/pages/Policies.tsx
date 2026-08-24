import React from 'react'
import { Search, Filter, Plus, Edit2, Trash2 } from 'lucide-react'

const Policies: React.FC = () => {
  const policies = [
    {
      id: '1',
      name: 'Standard Content Policy',
      description: 'Default policy for standard content matching',
      status: 'active',
      createdAt: '2024-01-01',
    },
    {
      id: '2',
      name: 'Strict IP Protection',
      description: 'Enhanced protection for premium assets',
      status: 'active',
      createdAt: '2023-12-15',
    },
    {
      id: '3',
      name: 'Relaxed Threshold',
      description: 'Lower confidence threshold for legacy content',
      status: 'inactive',
      createdAt: '2023-11-20',
    },
  ]

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Policies</h1>
          <p className="text-dark-200">Configure matching and enforcement policies</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          New Policy
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search policies..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <div key={policy.id} className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-blue-primary transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">{policy.name}</h3>
            <p className="text-sm text-dark-200 mb-4">{policy.description}</p>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                policy.status === 'active'
                  ? 'bg-green-900 text-green-300'
                  : 'bg-gray-700 text-gray-300'
              }`}>
                {policy.status}
              </span>
              <div className="flex gap-2">
                <button className="p-2 text-dark-200 hover:text-blue-primary transition-colors">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-dark-200 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-dark-800 border border-orange-600/30 rounded-lg p-4">
        <p className="text-sm text-orange-600">
          <strong>Placeholder:</strong> Policies table does not exist in current Supabase schema. Mock data shown for UI design.
        </p>
      </div>
    </div>
  )
}

export default Policies
