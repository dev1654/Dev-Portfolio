'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    return () => {
      const saved = localStorage.getItem('dp-theme-v2') || 'light'
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  useEffect(() => {
    const handler = () => {
      if (pressed) return
      setPressed(true)
      setTimeout(() => { window.location.href = '/' }, 350)
    }
    window.addEventListener('keydown', handler, { once: true })
    return () => window.removeEventListener('keydown', handler)
  }, [pressed])

  return (
    <div style={{
      minHeight:      '100vh',
      background:     'var(--bg)',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      textAlign:      'center',
      padding:        '24px',
      gap:            '0',
    }}>
      {/* Game over label */}
      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '11px',
        color:         'var(--accent)',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        marginBottom:  '28px',
        animation:     'bootBlink 1s step-end infinite',
      }}>
        ■ &nbsp; G A M E &nbsp; O V E R &nbsp; ■
      </div>

      {/* Glitching 404 */}
      <div style={{ position: 'relative', marginBottom: '20px', lineHeight: 1 }}>
        <div style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(110px, 22vw, 220px)',
          fontWeight:    800,
          color:         'var(--accent)',
          lineHeight:    1,
          userSelect:    'none',
          animation:     'glitch404 4s ease infinite',
        }}>
          404
        </div>
        {/* Red ghost layer */}
        <div aria-hidden="true" style={{
          position:   'absolute',
          inset:      0,
          fontFamily: 'var(--font-display)',
          fontSize:   'clamp(110px, 22vw, 220px)',
          fontWeight: 800,
          color:      '#ff3a3a',
          lineHeight: 1,
          opacity:    0,
          userSelect: 'none',
          animation:  'glitch404R 4s ease infinite',
        }}>
          404
        </div>
        {/* Cyan ghost layer */}
        <div aria-hidden="true" style={{
          position:   'absolute',
          inset:      0,
          fontFamily: 'var(--font-display)',
          fontSize:   'clamp(110px, 22vw, 220px)',
          fontWeight: 800,
          color:      '#00e5ff',
          lineHeight: 1,
          opacity:    0,
          userSelect: 'none',
          animation:  'glitch404C 4s ease infinite',
        }}>
          404
        </div>
      </div>

      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      'clamp(12px, 2.2vw, 18px)',
        color:         'var(--heading)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        marginBottom:  '10px',
      }}>
        Page Not Found
      </div>

      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '12px',
        color:         'var(--muted)',
        letterSpacing: '0.05em',
        marginBottom:  '52px',
      }}>
        This page has been lost in the void.
      </div>

      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '11px',
        color:         'var(--accent)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom:  '24px',
        animation:     'bootBlink 1.3s step-end infinite',
      }}>
        {pressed ? '> Loading...' : '> Press any key to return home'}
      </div>

      <Link
        href="/"
        style={{
          fontFamily:     'var(--font-mono)',
          fontSize:       '11px',
          color:          'var(--muted)',
          border:         '1px solid var(--border)',
          padding:        '11px 26px',
          letterSpacing:  '0.14em',
          textTransform:  'uppercase',
          textDecoration: 'none',
          transition:     'all 0.2s',
          display:        'inline-block',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)';  e.currentTarget.style.color = 'var(--muted)'  }}
      >
        [ Return to Main Menu ]
      </Link>

      <style>{`
        @keyframes glitch404 {
          0%, 82%, 100% { transform: translate(0); clip-path: none; }
          83%  { clip-path: inset(25% 0 45% 0); transform: translate(-5px,  2px); }
          85%  { clip-path: inset(65% 0  8% 0); transform: translate( 5px, -2px); }
          87%  { clip-path: inset(12% 0 70% 0); transform: translate(-3px,  4px); }
          89%  { clip-path: none;               transform: translate(0); }
        }
        @keyframes glitch404R {
          0%, 82%, 100% { opacity: 0; transform: translate(0); }
          83%  { opacity: 0.4; clip-path: inset(25% 0 45% 0); transform: translate( 6px, -2px); }
          85%  { opacity: 0.4; clip-path: inset(65% 0  8% 0); transform: translate(-6px,  2px); }
          87%  { opacity: 0.4; clip-path: inset(12% 0 70% 0); transform: translate( 4px, -3px); }
          89%  { opacity: 0;   transform: translate(0); }
        }
        @keyframes glitch404C {
          0%, 82%, 100% { opacity: 0; transform: translate(0); }
          83%  { opacity: 0.3; clip-path: inset(55% 0 15% 0); transform: translate(-4px, 3px); }
          85%  { opacity: 0.3; clip-path: inset(10% 0 60% 0); transform: translate( 4px,-3px); }
          87%  { opacity: 0.3; clip-path: inset(40% 0 30% 0); transform: translate(-2px, 2px); }
          89%  { opacity: 0;   transform: translate(0); }
        }
      `}</style>
    </div>
  )
}
