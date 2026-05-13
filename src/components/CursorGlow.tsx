'use client'

import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const update = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-12 rounded-full bg-white/5 blur-2xl transition-transform duration-150"
      style={{ transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)` }}
    />
  )
}
