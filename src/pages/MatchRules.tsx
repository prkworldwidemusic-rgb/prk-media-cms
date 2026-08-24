import React from 'react'
import { Search, Filter, Plus } from 'lucide-react'

const MatchRules: React.FC = () => {
  const rules = [
    {
      id: '1',
      policyName: 'Standard Content Policy',
      ruleType: 'threshold',
      condition: 'Confidence > 85%',
      action: 'flag',
      priority: 1,
      status: 'active',
    },
    {
      id: '2',
      policyName: 'Standard Content Policy',
      ruleType: 'duration',
      condition: 'Duration > 30s',
      action: 'review',
      priority: 2,
      status: 'active',
    },
    {
      id: '3',
      policyName: 'Strict IP Protection',
      ruleType: 'metadata',
      condition: 'Artist matches exactly',
      action: 'auto_approve',
      priority: 1,
      status: 'active',
    },
  ]

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Match Rules</h1>
          <p className="text-dark-200">Define rules for automatic content matching and enforcement</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          New Rule
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search rules..."
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Policy</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Condition</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Action</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {rules.map((rule) => (
                <tr key={rule.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{rule.policyName}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{rule.ruleType}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{rule.condition}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{rule.action}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{rule.priority}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                      {rule.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-orange-600/30 rounded-lg p-4">
        <p className="text-sm text-orange-600">
          <strong>Placeholder:</strong> Match Rules table does not exist in current schema. Mock UI shown for planning.
        </p>
      </div>
    </div>
  )
}

export default MatchRules
