'use client'
import { useState, useEffect } from 'react'

const SEQUENCE = [
  { id: 0, type: 'header', text: 'DEV PATEL OS v2026.1',       delay: 0    },
  { id: 1, type: 'line',   text: '> Initializing portfolio...', delay: 320  },
  { id: 2, type: 'bar',    text: '> Loading experience',        delay: 720  },
  { id: 3, type: 'bar',    text: '> Compiling skills',          delay: 1140 },
  { id: 4, type: 'bar',    text: '> Starting systems',          delay: 1560 },
  { id: 5, type: 'ready',  text: 'ALL SYSTEMS OPERATIONAL',     delay: 2020 },
]

const FADE_AT   = 2700
const REMOVE_AT = 3250

function BarLine({ text }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 560, 1)
        setPct(Math.floor(p * 100))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ marginBottom: '14px', animation: 'bootIn 0.3s ease' }}>
      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '11px',
        color:         'var(--muted)',
        letterSpacing: '0.08em',
        marginBottom:  '6px',
      }}>
        {text}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ flex: 1, height: '2px', background: 'var(--border)', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--accent)', width: pct + '%' }} />
        </div>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         'var(--accent)',
          minWidth:      '34px',
          textAlign:     'right',
        }}>
          {pct}%
        </span>
      </div>
    </div>
  )
}

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false)
  const [fading, setFading]   = useState(false)
  const [lines, setLines]     = useState([])

  useEffect(() => {
    if (sessionStorage.getItem('dp-booted')) return
    sessionStorage.setItem('dp-booted', '1')
    setVisible(true)

    const timers = SEQUENCE.map(item =>
      setTimeout(() => setLines(prev => [...prev, item]), item.delay)
    )
    const t1 = setTimeout(() => setFading(true),  FADE_AT)
    const t2 = setTimeout(() => setVisible(false), REMOVE_AT)

    return () => { timers.forEach(clearTimeout); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position:       'fixed',
      inset:          0,
      zIndex:         10000,
      background:     'var(--bg)',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      opacity:        fading ? 0 : 1,
      transition:     'opacity 0.55s ease',
      pointerEvents:  fading ? 'none' : 'all',
    }}>
      <div style={{ maxWidth: '420px', width: '100%', padding: '0 28px' }}>
        {lines.map(line => {
          if (line.type === 'header') return (
            <div key={line.id} style={{
              fontFamily:    'var(--font-display)',
              fontStyle:     'italic',
              fontSize:      'clamp(20px, 3.5vw, 30px)',
              fontWeight:    700,
              color:         'var(--accent)',
              letterSpacing: '0.04em',
              marginBottom:  '32px',
              animation:     'bootIn 0.4s ease',
            }}>
              {line.text}
            </div>
          )
          if (line.type === 'line') return (
            <div key={line.id} style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '12px',
              color:         'var(--subtext)',
              letterSpacing: '0.06em',
              marginBottom:  '18px',
              animation:     'bootIn 0.3s ease',
            }}>
              {line.text}
            </div>
          )
          if (line.type === 'bar') return <BarLine key={line.id} text={line.text} />
          if (line.type === 'ready') return (
            <div key={line.id} style={{
              marginTop:     '28px',
              fontFamily:    'var(--font-mono)',
              fontSize:      'clamp(11px, 1.6vw, 14px)',
              color:         'var(--accent)',
              letterSpacing: '0.18em',
              animation:     'bootIn 0.4s ease',
            }}>
              {line.text}
              <span style={{ animation: 'bootBlink 1s step-end infinite' }}> ▌</span>
            </div>
          )
          return null
        })}
      </div>

      <style>{`
        @keyframes bootIn    { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
        @keyframes bootBlink { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </div>
  )
}
