"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

interface VideoUploadFormProps {
  onUploadSuccess: (url: string) => void
}

export function VideoUploadForm({ onUploadSuccess }: VideoUploadFormProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("video/")) {
      setError("Please select a video file")
      return
    }

    setIsUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = await response.json()
      onUploadSuccess(data.url)
      e.target.value = "" // Reset input
    } catch (err) {
      setError("Failed to upload video. Please try again.")
      console.error(err)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer hover:border-zinc-600 transition-colors">
        <Upload className="w-5 h-5 text-zinc-400" />
        <span className="text-sm font-medium text-zinc-300">
          {isUploading ? "Uploading..." : "Click to upload video"}
        </span>
        <input type="file" accept="video/*" onChange={handleFileChange} disabled={isUploading} className="hidden" />
      </label>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
