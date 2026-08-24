import React from 'react'
import { Upload, Music, Video } from 'lucide-react'

interface FileUploadProps {
  onFileSelect?: (files: FileList) => void
  accept?: string
  multiple?: boolean
  maxSize?: number
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = 'audio/*,video/*',
  multiple = false,
  maxSize = 5 * 1024 * 1024 * 1024, // 5GB
}) => {
  const [isDragging, setIsDragging] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true)
    } else if (e.type === 'dragleave') {
      setIsDragging(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && onFileSelect) {
      onFileSelect(e.dataTransfer.files)
    }
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragging
          ? 'border-blue-primary bg-blue-primary/10'
          : 'border-blue-primary/50 bg-dark-800'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => onFileSelect?.(e.target.files!)}
        className="hidden"
      />

      <div className="flex justify-center mb-4">
        <Upload size={48} className="text-blue-primary opacity-50" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">Upload Media Files</h3>
      <p className="text-sm text-dark-200 mb-4">
        Drag and drop your audio/video files here or click to browse
      </p>

      <button
        onClick={() => inputRef.current?.click()}
        className="bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Select Files
      </button>

      <div className="mt-4 pt-4 border-t border-dark-600">
        <p className="text-xs text-dark-200">
          <Music className="inline mr-2" size={14} />
          Audio • MP3, WAV, FLAC, AAC
        </p>
        <p className="text-xs text-dark-200 mt-2">
          <Video className="inline mr-2" size={14} />
          Video • MP4, MKV, WebM (HD up to 5GB)
        </p>
      </div>
    </div>
  )
}

export default FileUpload
