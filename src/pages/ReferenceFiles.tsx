import React from 'react'
import { Search, Filter, Download, Plus } from 'lucide-react'

const ReferenceFiles: React.FC = () => {
  const referenceFiles = [
    {
      id: '1',
      title: 'Original Master - Track 001',
      type: 'audio',
      status: 'active',
      uploadedAt: '2024-01-10',
      fileSize: '245 MB',
    },
    {
      id: '2',
      title: 'Live Performance Video - HD',
      type: 'video',
      status: 'active',
      uploadedAt: '2024-01-09',
      fileSize: '2.3 GB',
    },
    {
      id: '3',
      title: 'Album Metadata - JSON',
      type: 'metadata',
      status: 'inactive',
      uploadedAt: '2024-01-05',
      fileSize: '125 KB',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: 'bg-green-900 text-green-300',
      inactive: 'bg-gray-700 text-gray-300',
      archived: 'bg-red-900 text-red-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Reference Files</h1>
          <p className="text-dark-200">Manage reference content for fingerprinting and matching</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          Upload Reference
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search references..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={18} />
          Export
        </button>
      </div>

      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">File Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Uploaded</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {referenceFiles.map((file) => (
                <tr key={file.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{file.title}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{file.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(file.status)}`}>
                      {file.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{file.fileSize}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{file.uploadedAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> Reference files from existing Supabase 'reference_files' table will be loaded here.
        </p>
      </div>
    </div>
  )
}

export default ReferenceFiles
