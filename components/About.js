'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const interests = [
  'Full Stack Development', 'AI & Machine Learning', 'Cloud Computing',
  'Android Development', 'Database Design', 'Software Engineering',
]

const stats = [
  { num: '3+',   label: 'Years Coding' },
  { num: '6mo',  label: 'Internship @ Stackss' },
  { num: '8.12', label: 'CGPA — Silver Oak' },
]

const currently = [
  { active: false, text: 'Graduate — IT Solutions, Humber Polytechnic (Apr 2026)' },
  { active: true,  text: 'Part-time @ Walmart Canada — Customer Service & Cashier' },
  { active: true,  text: 'Open to Full Stack & Backend Developer roles — Available immediately' },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const reveal = (delay) => ({
    initial:    { opacity: 0, y: 28, filter: 'blur(6px)' },
    animate:    inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {},
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="about" ref={ref} style={{ padding: '140px 60px', position: 'relative', overflow: 'hidden' }}>

      {/* Watermark — serif italic, top right */}
      <div style={{
        position:      'absolute',
        top:           '-30px',
        right:         '40px',
        fontFamily:    'var(--font-display)',
        fontStyle:     'italic',
        fontSize:      'clamp(160px, 22vw, 320px)',
        fontWeight:    700,
        color:         'var(--accent)',
        opacity:       0.05,
        lineHeight:    1,
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

        {/* Asymmetric editorial split */}
        <div className="resp-2col" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '90px', alignItems: 'start' }}>

          {/* ── Left — heading + stats ── */}
          <div>
            <motion.h2 {...reveal(0.1)} style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(42px, 4.8vw, 68px)',
              fontWeight:   600,
              color:        'var(--heading)',
              lineHeight:   1.06,
              marginBottom: '36px',
            }}>
              Building the web<br />
              <em>that works.</em>
            </motion.h2>

            <motion.div {...reveal(0.18)} style={{ width: '64px', height: '2px', background: 'var(--accent)', marginBottom: '56px' }} />

            {/* Stats — open serif numerals, no boxes */}
            <motion.div {...reveal(0.26)} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {stats.map((s) => (
                <div key={s.num} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                  <div style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      'clamp(38px, 4vw, 56px)',
                    fontWeight:    700,
                    color:         'var(--accent)',
                    lineHeight:    1,
                    minWidth:      '96px',
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '10px',
                    color:         'var(--muted)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — drop-cap bio + focus index + currently ── */}
          <div>
            <motion.p {...reveal(0.2)} className="dropcap" style={{
              fontSize:     '17px',
              color:        'var(--text)',
              lineHeight:   1.9,
              marginBottom: '24px',
              fontWeight:   300,
            }}>
              Full Stack Developer and Humber Polytechnic graduate (April 2026), specializing in
              Full Stack Development, Cloud Computing, and Machine Learning. Led a 4-person capstone
              team to deliver a production marketplace and built AI-powered apps with 98%+ accuracy —
              strong foundation across the full software lifecycle.
            </motion.p>

            <motion.p {...reveal(0.28)} style={{
              fontSize:     '16px',
              color:        'var(--subtext)',
              lineHeight:   1.85,
              marginBottom: '56px',
              fontWeight:   300,
            }}>
              During my 6-month internship at Stackss, I built and shipped MERN stack applications
              across the full development lifecycle. Since then I have expanded into Java Spring Boot,
              AI/ML with PyTorch, and cross-platform mobile — always shipping real, deployed products.
            </motion.p>

            {/* Focus areas — numbered index, replaces pill tags */}
            <motion.div {...reveal(0.36)} style={{ marginBottom: '56px' }}>
              <div style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         'var(--muted)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom:  '8px',
                display:       'flex',
                alignItems:    'center',
                gap:           '14px',
              }}>
                Focus Areas
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>
              {interests.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display:      'flex',
                    alignItems:   'baseline',
                    gap:          '20px',
                    padding:      '14px 0',
                    borderBottom: '1px solid var(--border)',
                    transition:   'padding-left 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.paddingLeft = '12px'}
                  onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
                >
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '10px',
                    color:         'var(--accent)',
                    letterSpacing: '0.1em',
                  }}>
                    0{i + 1}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize:   '19px',
                    fontWeight: 500,
                    color:      'var(--heading)',
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Currently */}
            <motion.div {...reveal(0.44)}>
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
                      width:        '8px',
                      height:       '8px',
                      borderRadius: '50%',
                      background:   item.active ? 'var(--accent)' : 'transparent',
                      border:       `1px solid ${item.active ? 'var(--accent)' : 'var(--muted)'}`,
                      marginTop:    '6px',
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
