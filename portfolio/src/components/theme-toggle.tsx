"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Force a theme update when the component mounts
  useEffect(() => {
    if (mounted) {
      const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      console.log("Current theme class:", currentTheme, "Resolved theme:", resolvedTheme)
    }
  }, [mounted, resolvedTheme])

  if (!mounted) {
    return <div className="h-10 w-10" />
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    console.log("Toggling theme from", resolvedTheme, "to", isDark ? "light" : "dark")
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-primary/20 bg-background"
    >
      {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

