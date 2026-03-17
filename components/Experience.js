'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id:       0,
    year:     '2025',
    role:     'Customer Service Desk & Cashier',
    company:  'Walmart Canada',
    type:     'Permanent Part-time',
    period:   'Aug 2025 — Present',
    duration: '8 months',
    location: 'Toronto, ON · On-site',
    tag:      'Current',
    tagActive: true,
    bullets: [
      'Operate across front-end roles including Service Desk, Self-Checkout, and Registers simultaneously.',
      'Handle returns, exchanges, and complex customer inquiries — resolving issues calmly under high volume.',
      'Monitor multiple self-service SCO stations and troubleshoot routine technical alerts and hardware jams.',
      'Process high-volume transactions efficiently using internal systems — POS, Handhelds, Inventory Lookup.',
    ],
    tech: [],
  },
  {
    id:       2,
    year:     '2023',
    role:     'Full Stack Developer Intern',
    company:  'Stackss',
    type:     'Internship · 6 months',
    period:   'Dec 2023 — May 2024',
    duration: '6 months',
    location: 'Ahmedabad, India · On-site',
    tag:      'Key Role',
    tagActive: false,
    bullets: [
      'Contributed to building and optimizing scalable web applications using the full MERN stack at an IT services and digital transformation company.',
      'Developed and maintained responsive, dynamic web applications that improved user experience and performance across client products.',
      'Designed and implemented RESTful APIs, integrating third-party services to enhance functionality and streamline data exchange.',
      'Collaborated in agile sprints — participated in code reviews, feature discussions, and continuous improvement initiatives.',
      'Explored and recommended emerging web technologies to optimize project architecture and development workflows.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript ES6+', 'Git', 'REST APIs'],
  },
]

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ padding: '120px 60px', position: 'relative', overflow: 'hidden' }}>

      {/* Watermark */}
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
        03
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}
        >
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            03 / Experience
          </span>
          <div style={{ width: '80px', height: '1px', background: 'var(--accent)', opacity: 0.3 }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(40px, 5vw, 68px)',
            color:         'var(--heading)',
            lineHeight:    0.92,
            letterSpacing: '-0.02em',
            marginBottom:  '72px',
          }}
        >
          WHERE I HAVE<br /><span style={{ color: 'var(--accent)' }}>WORKED</span>
        </motion.h2>

        {/* Timeline */}
        <div className="exp-timeline" style={{ position: 'relative', paddingLeft: '100px' }}>
          <style>{`
            @media (max-width: 768px) {
              .exp-timeline { padding-left: 48px !important; }
            }
          `}</style>

          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            style={{
              position:      'absolute',
              left:          '52px',
              top:           '8px',
              bottom:        '8px',
              width:         '1px',
              background:    'var(--border)',
              transformOrigin: 'top',
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              style={{
                position:     'relative',
                marginBottom: i < experiences.length - 1 ? '64px' : 0,
              }}
            >
              {/* Year label */}
              <div style={{
                position:      'absolute',
                left:          '-100px',
                top:           '0px',
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                color:         'var(--accent)',
                letterSpacing: '0.1em',
                fontWeight:    500,
                width:         '40px',
                textAlign:     'right',
              }}>
                {exp.year}
              </div>

              {/* Timeline dot */}
              <div style={{
                position:     'absolute',
                left:         '-52px',
                top:          '6px',
                width:        '10px',
                height:       '10px',
                borderRadius: '50%',
                background:   exp.tagActive ? 'var(--accent)' : 'var(--bg)',
                border:       '2px solid var(--accent)',
                transform:    'translateX(-50%)',
              }} />

              {/* Content */}
              <div style={{
                background:  'var(--card-bg)',
                border:      '1px solid var(--border)',
                borderLeft:  '3px solid var(--accent)',
                padding:     '32px 36px',
                transition:  'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--card-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
              >
                {/* Header */}
                <div style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'flex-start',
                  marginBottom:   '20px',
                  flexWrap:       'wrap',
                  gap:            '12px',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontFamily:    'var(--font-body)',
                        fontSize:      '20px',
                        fontWeight:    700,
                        color:         'var(--heading)',
                        letterSpacing: '0',
                      }}>
                        {exp.role}
                      </h3>
                      {exp.tag && (
                        <span style={{
                          fontFamily:    'var(--font-mono)',
                          fontSize:      '9px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding:       '3px 9px',
                          color:         exp.tagActive ? 'var(--bg)' : 'var(--accent)',
                          background:    exp.tagActive ? 'var(--accent)' : 'var(--accent-dim)',
                          border:        '1px solid var(--accent)',
                        }}>
                          {exp.tag}
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '15px',
                      color:      'var(--accent)',
                      fontWeight: 600,
                      marginBottom: '4px',
                    }}>
                      {exp.company}
                    </div>
                    <div style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '11px',
                      color:         'var(--muted)',
                      letterSpacing: '0.05em',
                    }}>
                      {exp.type} · {exp.location}
                    </div>
                  </div>
                  <div style={{
                    fontFamily:  'var(--font-mono)',
                    fontSize:    '11px',
                    color:       'var(--muted)',
                    textAlign:   'right',
                    flexShrink:  0,
                  }}>
                    <div>{exp.period}</div>
                    <div style={{ color: 'var(--accent)', marginTop: '3px' }}>{exp.duration}</div>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '20px' }} />

                {/* Bullets */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: exp.tech.length ? '24px' : 0 }}>
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{
                        color:      'var(--accent)',
                        fontFamily: 'var(--font-mono)',
                        fontSize:   '13px',
                        marginTop:  '2px',
                        flexShrink: 0,
                      }}>
                        ▹
                      </span>
                      <span style={{
                        fontSize:   '15px',
                        color:      'var(--subtext)',
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                {exp.tech.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.tech.map((t) => (
                      <span key={t} style={{
                        fontFamily:    'var(--font-mono)',
                        fontSize:      '10px',
                        color:         'var(--accent)',
                        background:    'var(--accent-dim)',
                        border:        '1px solid var(--tag-border)',
                        padding:       '4px 10px',
                        letterSpacing: '0.04em',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

