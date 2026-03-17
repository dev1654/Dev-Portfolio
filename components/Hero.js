'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Cloud Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping]       = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let t
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        t = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
      } else {
        setRoleIndex((p) => (p + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIndex])

  return (
    <section className="hero-section" style={{
      minHeight:   '100vh',
      display:     'grid',
      gridTemplateColumns: '55% 45%',
      position:    'relative',
      overflow:    'hidden',
    }}>

      {/* ── Left panel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding:        '120px 60px 80px',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          borderRight:    '1px solid var(--border)',
          position:       'relative',
          overflow:       'hidden',
        }}
      >
        {/* Dot grid bg */}
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize:  '28px 28px',
          pointerEvents:   'none',
        }} />

        {/* Name block — badge sits right above name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Available badge — directly above name */}
          <div style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          '8px',
            background:   'var(--accent-dim)',
            border:       '1px solid var(--accent)',
            padding:      '7px 14px',
            marginBottom: '28px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--accent)', animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '11px',
              color:         'var(--accent)',
              letterSpacing: '0.1em',
            }}>
              Available — Toronto, Canada
            </span>
          </div>

          <h1 style={{
            fontFamily:    'var(--font-display)',
            fontWeight:    800,
            fontSize:      'clamp(72px, 10vw, 148px)',
            lineHeight:    0.87,
            letterSpacing: '-0.03em',
          }}>
            <span style={{ color: 'var(--heading)', display: 'block' }}>DEV</span>
            <span style={{ color: 'var(--accent)',  display: 'block' }}>PATEL</span>
          </h1>

          {/* Resume link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ marginTop: '44px' }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                color:         'var(--muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display:       'flex',
                alignItems:    'center',
                gap:           '12px',
                width:         'fit-content',
                transition:    'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <span style={{ flex: 1, height: '1px', background: 'currentColor', opacity: 0.35, width: '40px' }} />
              Resume.pdf ↓
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Right panel ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          padding:        '160px 60px 60px',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'space-between',
          background:     'var(--section-alt)',
        }}
      >
        {/* Top: role + bio + cta */}
        <div>
          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom:  '16px',
          }}>
            Current Role
          </div>

          <div style={{
            fontFamily:   'var(--font-mono)',
            fontSize:     'clamp(16px, 1.8vw, 24px)',
            color:        'var(--subtext)',
            minHeight:    '36px',
            marginBottom: '48px',
          }}>
            {displayed}
            <span style={{
              display:        'inline-block',
              width:          '2px',
              height:         '1em',
              background:     'var(--accent)',
              marginLeft:     '4px',
              verticalAlign:  'middle',
              animation:      'blink 1s step-end infinite',
            }} />
          </div>

          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom:  '14px',
          }}>
            Bio
          </div>
          <p style={{
            fontSize:     '16px',
            color:        'var(--subtext)',
            lineHeight:   1.8,
            fontWeight:   300,
            marginBottom: '44px',
            maxWidth:     '380px',
          }}>
            PG student at Humber College building scalable web apps with the MERN stack.
            Internship-proven. Cloud-curious. Shipping real products.
          </p>

          <a
            href="#projects"
            style={{
              fontFamily:     'var(--font-body)',
              fontSize:       '13px',
              fontWeight:     700,
              letterSpacing:  '0.1em',
              textTransform:  'uppercase',
              color:          'var(--bg)',
              background:     'var(--accent)',
              padding:        '15px 36px',
              display:        'inline-block',
              transition:     'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View My Work →
          </a>
        </div>

        {/* Stats grid 2×2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            display:         'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap:             '1px',
            background:      'var(--border)',
            border:          '1px solid var(--border)',
            marginTop:       '48px',
          }}
        >
          {[
            { number: '2+',   label: 'Years Coding' },
            { number: '6mo',  label: 'Internship @ Stackss' },
            { number: '8.12', label: 'CGPA — Silver Oak' },
            { number: '15+',  label: 'Skills & Technologies' },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: '24px 20px', background: 'var(--bg)' }}>
              <div style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(28px, 3vw, 44px)',
                color:         'var(--accent)',
                lineHeight:    1,
                marginBottom:  '6px',
                letterSpacing: '-0.02em',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '9px',
                color:         'var(--muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink  { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse  { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.75); } }
        @media (max-width: 768px) {
          .hero-section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
