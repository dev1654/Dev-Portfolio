'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id:       0,
    year:     '2026',
    role:     'Team Lead / Full Stack Developer',
    company:  'Giftelle | HrxConnect Capstone',
    type:     'Capstone · 4 months',
    period:   'Jan 2026 — Apr 2026',
    duration: '4 months',
    location: 'Toronto, ON · Humber Polytechnic',
    tag:      'Team Lead',
    tagActive: false,
    bullets: [
      'Led a 4-person team delivering a full-stack Canadian artisanal marketplace with 4 integrated applications, completing 100% of project scope on schedule.',
      'Built vendor web dashboard (React, Vite) with a custom Canadian holiday calendar and customer mobile app (React Native, Expo) across iOS and Android.',
      'Coordinated Supabase auth migration, Stripe payment integration, and cross-platform testing for production deployment.',
    ],
    tech: ['React', 'Vite', 'React Native', 'Expo', 'Supabase', 'Stripe', 'TypeScript'],
  },
  {
    id:       1,
    year:     '2025',
    role:     'Customer Service Desk & Cashier',
    company:  'Walmart Canada',
    type:     'Permanent Part-time',
    period:   'Aug 2025 — Present',
    duration: '9 months',
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
      'Built and shipped MERN stack web applications for client digital transformation products across the full development lifecycle.',
      'Designed RESTful APIs with third-party integrations and developed React UI components; participated in agile sprint cycles delivering on schedule.',
      'Developed and maintained responsive, dynamic web applications that improved user experience and performance across client products.',
      'Collaborated in agile sprints — participated in code reviews, feature discussions, and continuous improvement initiatives.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript ES6+', 'Git', 'REST APIs'],
  },
]

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ padding: '140px 60px', position: 'relative', overflow: 'hidden' }}>

      {/* Watermark */}
      <div style={{
        position:      'absolute',
        top:           '-30px',
        right:         '40px',
        fontFamily:    'var(--font-display)',
        fontStyle:     'italic',
        fontSize:      'clamp(160px, 22vw, 320px)',
        fontWeight:    700,
        color:         'var(--accent)',
        opacity:       0.04,
        lineHeight:    1,
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
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(42px, 5vw, 68px)',
            fontWeight:   600,
            color:        'var(--heading)',
            lineHeight:   1.05,
            marginBottom: '80px',
          }}
        >
          Where I have <em>worked.</em>
        </motion.h2>

        {/* Entries — open editorial, no boxes */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="exp-row"
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display:             'grid',
                gridTemplateColumns: '200px 1fr',
                gap:                 '48px',
                padding:             '56px 0',
                borderBottom:        '1px solid var(--border)',
              }}
            >
              {/* ── Left rail — giant italic year ── */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle:  'italic',
                  fontSize:   'clamp(40px, 4.4vw, 60px)',
                  fontWeight: 600,
                  color:      'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}>
                  {exp.year}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '10px',
                  color:         'var(--muted)',
                  letterSpacing: '0.08em',
                  lineHeight:    1.9,
                }}>
                  {exp.period}<br />
                  <span style={{ color: 'var(--accent)' }}>{exp.duration}</span>
                </div>
                {exp.tag && (
                  <span style={{
                    display:       'inline-block',
                    marginTop:     '14px',
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '9px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding:       '4px 10px',
                    color:         exp.tagActive ? 'var(--bg)' : 'var(--accent)',
                    background:    exp.tagActive ? 'var(--accent)' : 'var(--accent-dim)',
                    border:        '1px solid var(--accent)',
                  }}>
                    {exp.tag}
                  </span>
                )}
              </div>

              {/* ── Right — role, company, bullets ── */}
              <div>
                <h3 style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(24px, 2.6vw, 34px)',
                  fontWeight:   600,
                  color:        'var(--heading)',
                  lineHeight:   1.15,
                  marginBottom: '8px',
                }}>
                  {exp.role}
                </h3>
                <div style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '16px',
                  color:        'var(--accent)',
                  fontWeight:   600,
                  marginBottom: '6px',
                }}>
                  {exp.company}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '0.05em',
                  marginBottom:  '28px',
                }}>
                  {exp.type} · {exp.location}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: exp.tech.length ? '28px' : 0 }}>
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <span style={{
                        color:      'var(--accent)',
                        fontFamily: 'var(--font-display)',
                        fontSize:   '15px',
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}>
                        —
                      </span>
                      <span style={{
                        fontSize:   '15px',
                        color:      'var(--subtext)',
                        lineHeight: 1.75,
                        fontWeight: 300,
                      }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {exp.tech.length > 0 && (
                  <div style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '11px',
                    color:         'var(--muted)',
                    letterSpacing: '0.04em',
                    lineHeight:    2,
                  }}>
                    {exp.tech.map((t, ti) => (
                      <span key={t}>
                        <span style={{ whiteSpace: 'nowrap' }}>{t}</span>
                        {ti < exp.tech.length - 1 && (
                          <span style={{ color: 'var(--accent)', opacity: 0.5 }}>{' · '}</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 40px 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
