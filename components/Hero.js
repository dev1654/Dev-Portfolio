'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Android Developer',
  'AI / ML Engineer',
]

const stats = [
  { number: '3+',   label: 'Years Coding' },
  { number: '6mo',  label: 'Internship @ Stackss' },
  { number: '8.12', label: 'CGPA — Silver Oak' },
  { number: '30+',  label: 'Skills & Technologies' },
]

const marqueeItems = [
  'Full Stack', 'AI / ML', 'Android', 'Cloud', 'MERN', 'Spring Boot', 'PyTorch',
]

/* One line of the giant name — letters rise out of an overflow mask */
function RevealLine({ text, delay, className, style }) {
  return (
    <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', padding: '0.06em 0' }}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className={className}
          initial={{ y: '115%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', ...style }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping]       = useState(true)

  /* Mouse parallax for the dot grid */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 40, damping: 18 })
  const py = useSpring(my, { stiffness: 40, damping: 18 })

  const onMouseMove = (e) => {
    mx.set((e.clientX / window.innerWidth  - 0.5) * 30)
    my.set((e.clientY / window.innerHeight - 0.5) * 30)
  }

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
    <section
      className="hero-section"
      onMouseMove={onMouseMove}
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        position:       'relative',
        overflow:       'hidden',
      }}
    >
      {/* Parallax dot grid */}
      <motion.div style={{
        position:        'absolute',
        inset:           '-60px',
        x:               px,
        y:               py,
        backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
        backgroundSize:  '32px 32px',
        pointerEvents:   'none',
      }} />

      {/* Centre vignette so the name pops off the grid */}
      <div style={{
        position:      'absolute',
        inset:         0,
        background:    'radial-gradient(ellipse 70% 55% at 50% 45%, var(--bg) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Centre block ── */}
      <div style={{
        flex:           1,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        textAlign:      'center',
        position:       'relative',
        zIndex:         1,
        padding:        '120px 24px 40px',
      }}>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          '8px',
            background:   'var(--accent-dim)',
            border:       '1px solid var(--tag-border)',
            padding:      '7px 16px',
            marginBottom: '40px',
          }}
        >
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent)', animation: 'heroPulse 2s infinite',
          }} />
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '11px',
            color:         'var(--accent)',
            letterSpacing: '0.12em',
          }}>
            Available — Toronto, Canada
          </span>
        </motion.div>

        {/* Monumental name */}
        <h1 style={{
          fontFamily:    'var(--font-display)',
          fontWeight:    800,
          fontSize:      'clamp(76px, 13vw, 190px)',
          lineHeight:    0.92,
          letterSpacing: '0.01em',
          marginBottom:  '36px',
        }}>
          <RevealLine text="DEV"   delay={0.35} className="outline-text" />
          <RevealLine text="PATEL" delay={0.6}  className="gold-text" />
        </h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            fontFamily:   'var(--font-mono)',
            fontSize:     'clamp(14px, 1.6vw, 19px)',
            color:        'var(--subtext)',
            minHeight:    '28px',
            marginBottom: '28px',
            letterSpacing:'0.04em',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>&gt; </span>
          {displayed}
          <span style={{
            display:       'inline-block',
            width:         '2px',
            height:        '1em',
            background:    'var(--accent)',
            marginLeft:    '4px',
            verticalAlign: 'middle',
            animation:     'heroBlink 1s step-end infinite',
          }} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.7 }}
          style={{
            fontSize:     '16px',
            color:        'var(--subtext)',
            lineHeight:   1.8,
            fontWeight:   300,
            maxWidth:     '520px',
            marginBottom: '44px',
          }}
        >
          Full Stack Developer, Humber Polytechnic graduate (Apr 2026).
          Internship-proven. Building production apps across MERN, Spring Boot, and AI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#projects"
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '13px',
              fontWeight:    700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--bg)',
              background:    'var(--accent)',
              padding:       '16px 38px',
              display:       'inline-block',
              transition:    'background 0.25s, transform 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hot)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)';     e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View My Work →
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '13px',
              fontWeight:    700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--heading)',
              border:        '1px solid var(--tag-border)',
              padding:       '15px 38px',
              display:       'inline-block',
              transition:    'border-color 0.25s, color 0.25s, transform 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--tag-border)'; e.currentTarget.style.color = 'var(--heading)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Resume ↓
          </a>
        </motion.div>
      </div>

      {/* ── Stats strip ── */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop:           '1px solid var(--border)',
          position:            'relative',
          zIndex:              1,
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding:     '26px 24px',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              textAlign:   'center',
              transition:  'background 0.25s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--card-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(26px, 2.6vw, 40px)',
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

      {/* ── Slim ticker ── */}
      <div style={{
        borderTop:       '1px solid var(--border)',
        overflow:        'hidden',
        position:        'relative',
        zIndex:          1,
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)',
        maskImage:       'linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)',
      }}>
        <div style={{
          display:    'flex',
          width:      'max-content',
          animation:  'marqueeX 45s linear infinite',
        }}>
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {marqueeItems.map((item) => (
                <span key={copy + item} style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  padding:       '13px 0',
                  display:       'inline-flex',
                  alignItems:    'center',
                }}>
                  <span style={{ color: 'var(--muted)', padding: '0 32px' }}>{item}</span>
                  <span style={{ color: 'var(--accent)', fontSize: '8px', opacity: 0.7 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes heroPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.75); } }
        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-stats > div { border-bottom: 1px solid var(--border); }
          .hero-stats > div:nth-child(2n) { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}
