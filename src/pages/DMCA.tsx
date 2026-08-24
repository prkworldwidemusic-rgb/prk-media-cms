import React from 'react'
import { Search, Filter, Plus, AlertTriangle } from 'lucide-react'

const DMCA: React.FC = () => {
  const dmcaNotices = [
    {
      id: '1',
      claimant: 'Copyright Enforcement Corp',
      assetTitle: 'Summer Breeze - Remix',
      noticeDate: '2024-01-22',
      contentUrl: 'https://youtube.com/watch?v=xxxxx',
      status: 'received',
      actionTaken: '',
    },
    {
      id: '2',
      claimant: 'Global Rights Protection',
      assetTitle: 'Live Concert - Full Version',
      noticeDate: '2024-01-18',
      contentUrl: 'https://youtube.com/watch?v=yyyyy',
      status: 'processed',
      actionTaken: 'Content removed from platform',
    },
    {
      id: '3',
      claimant: 'Artist Legal Team',
      assetTitle: 'Acoustic Sessions',
      noticeDate: '2024-01-15',
      contentUrl: 'https://soundcloud.com/xxxxx',
      status: 'resolved',
      actionTaken: 'License obtained - content restored',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      received: 'bg-red-900 text-red-300',
      processed: 'bg-yellow-900 text-yellow-300',
      resolved: 'bg-green-900 text-green-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <AlertTriangle size={32} className="text-red-500" />
            DMCA Notices
          </h1>
          <p className="text-dark-200">Manage copyright takedown and DMCA notices</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          New Notice
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search DMCA notices..."
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Claimant</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Notice Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Action Taken</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {dmcaNotices.map((notice) => (
                <tr key={notice.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{notice.claimant}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{notice.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{notice.noticeDate}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(notice.status)}`}>
                      {notice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{notice.actionTaken || '-'}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-red-900/20 border border-red-700/50 rounded-lg p-4">
        <p className="text-sm text-red-400">
          <strong>⚠️ Important:</strong> DMCA notices require immediate attention. Ensure proper documentation and legal review before taking action.
        </p>
      </div>
    </div>
  )
}

export default DMCA
