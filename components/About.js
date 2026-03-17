'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const interests = [
  'Full Stack Development', 'Cloud Computing', 'Database Design',
  'Software Engineering', 'System Analysis', 'Agile Teams',
]

const stats = [
  { num: '2+',   label: 'Years\nCoding' },
  { num: '6mo',  label: 'Internship\n@ Stackss' },
  { num: '8.12', label: 'CGPA\nSilver Oak' },
]

const currently = [
  { active: true,  text: 'PG Student — IT Solutions, Humber College (2024–2026)' },
  { active: true,  text: 'Part-time @ Walmart Canada — Customer Service & Cashier' },
  { active: false, text: 'Open to Full Stack & Cloud Developer roles' },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const reveal = (delay) => ({
    initial:    { opacity: 0, y: 32 },
    animate:    inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section id="about" ref={ref} style={{ padding: '120px 60px', position: 'relative', overflow: 'hidden' }}>

      {/* Big watermark number */}
      <div style={{
        position:      'absolute',
        top:           '-20px',
        left:          '40px',
        fontFamily:    'var(--font-display)',
        fontSize:      'clamp(160px, 22vw, 320px)',
        fontWeight:    800,
        color:         'var(--accent)',
        opacity:       0.04,
        lineHeight:    1,
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
        userSelect:    'none',
      }}>
        01
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section tag */}
        <motion.div {...reveal(0.05)} style={{
          display:       'flex',
          alignItems:    'center',
          gap:           '14px',
          marginBottom:  '72px',
        }}>
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            01 / About
          </span>
          <div style={{ width: '80px', height: '1px', background: 'var(--accent)', opacity: 0.3 }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left — heading + bio */}
          <div>
            <motion.h2 {...reveal(0.1)} style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(40px, 4.5vw, 64px)',
              color:         'var(--heading)',
              lineHeight:    0.92,
              marginBottom:  '40px',
              letterSpacing: '-0.02em',
            }}>
              BUILDING<br />
              THE WEB<br />
              <span style={{ color: 'var(--accent)' }}>THAT WORKS.</span>
            </motion.h2>

            <motion.p {...reveal(0.2)} style={{
              fontSize:     '16px',
              color:        'var(--subtext)',
              lineHeight:   1.85,
              marginBottom: '20px',
              fontWeight:   300,
            }}>
              I am a passionate Information Technology Solutions student at Humber Polytechnic,
              specializing in Full Stack Development, Cloud Computing, and Database Management.
              My academic and real-world experience has built a strong foundation in software
              development, system design, and modern web technologies.
            </motion.p>

            <motion.p {...reveal(0.28)} style={{
              fontSize:     '16px',
              color:        'var(--subtext)',
              lineHeight:   1.85,
              marginBottom: '44px',
              fontWeight:   300,
            }}>
              During my internship at Stackss, I gained hands-on experience building and
              maintaining MERN stack applications, designing RESTful APIs, and collaborating
              in agile teams — sharpening both my technical skills and problem-solving mindset.
            </motion.p>

            {/* Interests */}
            <motion.div {...reveal(0.36)} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {interests.map((item) => (
                <span key={item} style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--accent)',
                  background:    'var(--accent-dim)',
                  border:        '1px solid var(--tag-border)',
                  padding:       '6px 14px',
                  letterSpacing: '0.05em',
                }}>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + currently */}
          <div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                display:      'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop:    '1px solid var(--border)',
                borderLeft:   '1px solid var(--border)',
                marginBottom: '52px',
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.num}
                  style={{
                    padding:      '28px 16px',
                    borderRight:  '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    transition:   'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--card-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      'clamp(36px, 4vw, 56px)',
                    color:         'var(--accent)',
                    lineHeight:    1,
                    marginBottom:  '8px',
                    letterSpacing: '-0.02em',
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '9px',
                    color:         'var(--muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    lineHeight:    1.6,
                    whiteSpace:    'pre-line',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Currently */}
            <motion.div {...reveal(0.42)}>
              <div style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         'var(--muted)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom:  '24px',
                display:       'flex',
                alignItems:    'center',
                gap:           '14px',
              }}>
                Currently
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {currently.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{
                      width:      '8px',
                      height:     '8px',
                      borderRadius: '50%',
                      background:   item.active ? 'var(--accent)' : 'transparent',
                      border:       `1px solid ${item.active ? 'var(--accent)' : 'var(--muted)'}`,
                      marginTop:    '5px',
                      flexShrink:   0,
                      animation:    item.active ? 'aboutPulse 2.5s infinite' : 'none',
                    }} />
                    <span style={{
                      fontSize:   '14px',
                      color:      item.active ? 'var(--text)' : 'var(--muted)',
                      lineHeight: 1.65,
                      fontWeight: 300,
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </section>
  )
}
