"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  src: string
  title: string
  description: string
}

export function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions
        console.log("[v0] Video autoplay prevented by browser policy")
      })
    }
  }, [isPlaying])

  const handlePlayClick = () => {
    setIsPlaying(true)
    setShowControls(true)
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <div className="relative w-full h-full bg-zinc-950 overflow-hidden group">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover cursor-pointer"
          playsInline
          controls={false}
          onPlay={() => setShowControls(true)}
          onClick={handleVideoClick}
        />
      ) : (
        <>
          <video
            src={src}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={handlePlayClick}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              >
                <Play className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white ml-0.5 sm:ml-1" />
              </button>
              <h3 className="text-xs sm:text-base md:text-lg font-semibold text-white text-center px-2 sm:px-4">
                {title}
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
