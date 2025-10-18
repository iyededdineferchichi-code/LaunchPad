"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  src: string
  title: string
  description: string
}

export function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
    setShowControls(true)
  }

  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden group">
      {isPlaying ? (
        <video
          src={src}
          className="w-full h-full object-contain"
          autoPlay
          playsInline
          controls={showControls}
          onPlay={() => setShowControls(true)}
        />
      ) : (
        <>
          <video
            src={src}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
              <button
                onClick={handlePlayClick}
                className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center mb-4 mx-auto transition-all hover:scale-110 shadow-lg flex-shrink-0"
              >
                <Play className="w-7 h-7 text-white ml-1" />
              </button>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-zinc-300">{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
