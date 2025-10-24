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
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden group">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain cursor-pointer"
          playsInline
          controls={false}
          onPlay={() => setShowControls(true)}
          onClick={handleVideoClick}
        />
      ) : (
        <>
          <video
            src={src}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center w-full flex flex-col items-center">
              <button
                onClick={handlePlayClick}
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto transition-all hover:scale-110 shadow-lg flex-shrink-0"
              >
                <Play className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:w-7 text-white ml-0.5 sm:ml-1" />
              </button>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 px-2 line-clamp-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 px-2 line-clamp-3">{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
