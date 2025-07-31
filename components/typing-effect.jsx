"use client"

import { useState, useEffect } from "react"

export function TypingEffect({ text, speed = 100, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index))
        setIndex((prev) => prev + 1)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [index, text, speed])

  return <span className="font-mono">{displayedText}</span>
}
