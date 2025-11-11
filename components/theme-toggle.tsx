"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 w-9 rounded-full p-0" disabled>
        <div className="h-5 w-5" />
      </Button>
    )
  }

  const cycleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("system")
    } else {
      setTheme("dark")
    }
  }

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className="h-9 w-9 rounded-full p-0 text-cyan-400 hover:text-cyan-300 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 transition-colors"
      title={`Theme: ${theme}`}
    >
      <ThemeIcon className="h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
