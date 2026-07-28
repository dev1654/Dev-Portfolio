'use client'
import { useEffect, useState } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function KonamiEgg() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let seq = []
    const handler = (e) => {
      if (active) { setActive(false); return }
      seq = [...seq, e.key].slice(-10)
      if (seq.join(',') === KONAMI.join(',')) {
        setActive(true)
        seq = []
        setTimeout(() => setActive(false), 4000)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active])

  if (!active) return null

  return (
    <div
      onClick={() => setActive(false)}
      style={{
        position:             'fixed',
        inset:                0,
        zIndex:               9999,
        display:              'flex',
        flexDirection:        'column',
        alignItems:           'center',
        justifyContent:       'center',
        background:           'rgba(10,9,8,0.95)',
        backdropFilter:       'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        animation:            'konamiIn 0.35s ease',
      }}
    >
      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      'clamp(11px, 1.4vw, 13px)',
        color:         'var(--muted)',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        marginBottom:  '32px',
        animation:     'konamiPulse 0.7s ease infinite alternate',
      }}>
        ↑ ↑ ↓ ↓ ← → ← → B A
      </div>

      <div style={{
        fontFamily:             'var(--font-display)',
        fontSize:               'clamp(44px, 10vw, 110px)',
        fontWeight:             800,
        lineHeight:             1,
        textAlign:              'center',
        marginBottom:           '28px',
        background:             'linear-gradient(110deg, var(--accent) 25%, var(--accent-hot) 50%, var(--accent) 75%)',
        backgroundSize:         '200% auto',
        WebkitBackgroundClip:   'text',
        backgroundClip:         'text',
        WebkitTextFillColor:    'transparent',
        color:                  'transparent',
        animation:              'goldShimmer 2s linear infinite, konamiIn 0.4s ease',
      }}>
        CHEAT<br />CODE<br />ACTIVATED
      </div>

      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      'clamp(11px, 1.4vw, 14px)',
        color:         'var(--subtext)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        marginBottom:  '48px',
      }}>
        + 99 Dev Power Unlocked
      </div>

      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '10px',
        color:         'var(--muted)',
        letterSpacing: '0.12em',
        opacity:       0.5,
      }}>
        click anywhere to dismiss
      </div>

      <style>{`
        @keyframes konamiIn    { from { opacity:0; transform:scale(0.92); } to { opacity:1; transform:scale(1); } }
        @keyframes konamiPulse { from { opacity:0.45; } to { opacity:1; } }
      `}</style>
    </div>
  )
}
