import React, { useState } from 'react'
import { Plus, Upload, Search, Filter, Download } from 'lucide-react'
import FileUpload from '@/components/FileUpload'

const Assets: React.FC = () => {
  const [showUpload, setShowUpload] = useState(false)

  // Mock assets data
  const assets = [
    {
      id: '1',
      title: 'Summer Breeze - Remix',
      type: 'audio',
      duration: '3:45',
      status: 'published',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'Live Concert - Full Version',
      type: 'video',
      duration: '45:22',
      status: 'draft',
      createdAt: '2024-01-14',
    },
    {
      id: '3',
      title: 'Acoustic Sessions',
      type: 'audio',
      duration: '12:30',
      status: 'published',
      createdAt: '2024-01-13',
    },
  ]

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      published: 'bg-green-900 text-green-300',
      draft: 'bg-gray-700 text-gray-300',
      archived: 'bg-red-900 text-red-300',
    }
    return colors[status] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Assets</h1>
          <p className="text-dark-200">Manage your audio and video content</p>
        </div>
        <button
          onClick={() => setShowUpload(!showUpload)}
          className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit"
        >
          <Upload size={18} />
          Upload New
        </button>
      </div>

      {/* Upload Section */}
      {showUpload && (
        <div className="mb-8 bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Upload Media Files</h3>
          <FileUpload />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Title</label>
              <input
                type="text"
                className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
                placeholder="Asset title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Description</label>
              <input
                type="text"
                className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
                placeholder="Asset description"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Upload
            </button>
            <button
              onClick={() => setShowUpload(false)}
              className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          <span className="hidden sm:inline">Filter</span>
        </button>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={18} />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>

      {/* Assets Table */}
      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{asset.title}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{asset.type}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{asset.duration}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{asset.createdAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-primary hover:text-blue-light transition-colors font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> This module will display assets from the existing Supabase 'assets' table. Upload functionality will integrate with Supabase Storage buckets.
        </p>
      </div>
    </div>
  )
}

export default Assets
