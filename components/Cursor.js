'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos]           = useState({ x: -100, y: -100 })
  const [trail, setTrail]       = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let animFrame
    let trailX = -100, trailY = -100
    let curX   = -100, curY   = -100

    const onMove  = (e) => { curX = e.clientX; curY = e.clientY; setPos({ x: curX, y: curY }) }
    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)
    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    const animate = () => {
      trailX += (curX - trailX) * 0.12
      trailY += (curY - trailY) * 0.12
      setTrail({ x: trailX, y: trailY })
      animFrame = requestAnimationFrame(animate)
    }

    const attach = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    animFrame = requestAnimationFrame(animate)

    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })
    attach()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(animFrame)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div style={{
        position:      'fixed',
        left:          pos.x,
        top:           pos.y,
        width:         clicking ? '5px' : '7px',
        height:        clicking ? '5px' : '7px',
        background:    'var(--accent)',
        borderRadius:  '50%',
        transform:     'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex:        9999,
        transition:    'width 0.1s, height 0.1s',
      }} />

      {/* Ring */}
      <div style={{
        position:      'fixed',
        left:          trail.x,
        top:           trail.y,
        width:         hovering ? '44px' : clicking ? '20px' : '32px',
        height:        hovering ? '44px' : clicking ? '20px' : '32px',
        border:        '1px solid var(--cursor-ring)',
        borderRadius:  '50%',
        transform:     'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex:        9998,
        transition:    'width 0.25s ease, height 0.25s ease',
      }} />
    </>
  )
}
