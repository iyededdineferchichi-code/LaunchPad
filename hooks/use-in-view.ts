"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  threshold?: number | number[]
  margin?: string
  once?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, margin = "0px", once = false } = options
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin: margin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, margin, once])

  return { ref, isInView }
}
