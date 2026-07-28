'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from '@/components/CountUp'

const interests = [
  'Full Stack Development', 'AI & Machine Learning', 'Cloud Computing',
  'Android Development', 'Database Design', 'Software Engineering',
]

const stats = [
  { to: 3,    suffix: '+',  decimals: 0, label: 'Years Coding' },
  { to: 6,    suffix: 'mo', decimals: 0, label: 'Internship @ Stackss' },
  { to: 8.12, suffix: '',   decimals: 2, label: 'CGPA — Silver Oak' },
]

const currently = [
  { active: false, text: 'Graduate — IT Solutions, Humber Polytechnic (Apr 2026)' },
  { active: true,  text: 'Customer Service Manager @ Walmart Canada — Promoted Jul 2026' },
  { active: true,  text: 'Open to Full Stack & Backend Developer roles — Available immediately' },
]

const charStats = [
  { abbr: 'STR', label: 'Backend & APIs',   pct: 82 },
  { abbr: 'INT', label: 'Problem Solving',  pct: 90 },
  { abbr: 'DEX', label: 'Frontend & UI',    pct: 85 },
  { abbr: 'WIS', label: 'System Design',    pct: 74 },
  { abbr: 'CHA', label: 'Team Leadership',  pct: 78 },
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
          <span className="unlock-indicator">Area Unlocked</span>
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
              {stats.map((s, si) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                  <div style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      'clamp(38px, 4vw, 56px)',
                    fontWeight:    700,
                    color:         'var(--accent)',
                    lineHeight:    1,
                    minWidth:      '96px',
                  }}>
                    <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} inView={inView} delay={si * 180} />
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

            {/* Character sheet */}
            <motion.div {...reveal(0.34)} style={{
              marginTop:  '44px',
              border:     '1px solid var(--border)',
              padding:    '20px 22px 18px',
              position:   'relative',
            }}>
              <div style={{
                position:      'absolute',
                top:           '-9px',
                left:          '14px',
                fontFamily:    'var(--font-mono)',
                fontSize:      '8px',
                color:         'var(--accent)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                background:    'var(--bg)',
                padding:       '0 7px',
              }}>
                Character Sheet
              </div>

              <div style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                letterSpacing: '0.08em',
                marginBottom:  '18px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--muted)', textTransform: 'uppercase' }}>Class</span>
                  <span style={{ color: 'var(--subtext)' }}>Full Stack Dev</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--muted)', textTransform: 'uppercase' }}>Level</span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize:   '18px',
                    fontWeight: 700,
                    color:      'var(--accent)',
                    lineHeight: 1,
                  }}>3+</span>
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '16px' }} />

              {charStats.map((stat, si) => (
                <div key={stat.abbr} style={{ marginBottom: '12px' }}>
                  <div style={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    fontFamily:     'var(--font-mono)',
                    fontSize:       '9px',
                    letterSpacing:  '0.1em',
                    marginBottom:   '5px',
                  }}>
                    <span style={{ color: 'var(--accent)' }}>{stat.abbr}</span>
                    <span style={{ color: 'var(--muted)' }}>{stat.label}</span>
                    <span style={{ color: 'var(--subtext)' }}>{stat.pct}</span>
                  </div>
                  <div style={{ height: '3px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={inView ? { width: stat.pct + '%' } : {}}
                      transition={{ duration: 1.1, delay: 0.5 + si * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ height: '100%', background: 'var(--accent)', borderRadius: '2px' }}
                    />
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
