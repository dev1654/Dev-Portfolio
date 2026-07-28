'use client'
import { useState, useEffect } from 'react'

export default function CountUp({ to, decimals = 0, suffix = '', duration = 1400, delay = 0, inView = false }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const timer = setTimeout(() => {
      const startTime = performance.now()
      const tick = (now) => {
        const t = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(to * eased)
        if (t < 1) raf = requestAnimationFrame(tick)
        else setValue(to)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf) }
  }, [inView, to, duration, delay])

  const display = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString()
  return <>{display}{suffix}</>
}
