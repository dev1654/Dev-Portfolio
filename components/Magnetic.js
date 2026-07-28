'use client'
import { useRef, useState, useEffect } from 'react'

export default function Magnetic({ children, strength = 0.32, threshold = 88 }) {
  const ref = useRef(null)
  const [xy, setXY] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const cx = left + width  / 2
      const cy = top  + height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      setXY(dist < threshold
        ? { x: dx * strength, y: dy * strength }
        : { x: 0, y: 0 }
      )
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [strength, threshold])

  return (
    <div
      ref={ref}
      style={{
        display:    'inline-block',
        transform:  `translate(${xy.x}px, ${xy.y}px)`,
        transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </div>
  )
}
