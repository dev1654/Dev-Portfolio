'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const experiences = [
  {
    id:       0,
    category: 'other',
    year:     '2025',
    role:     'Walmart Canada',
    company:  'Walmart Canada',
    type:     'Permanent Part-time',
    period:   'Aug 2025 — Present',
    location: 'Toronto, ON · On-site',
    tag:      'Current',
    tagActive: true,
    isTree:   true,
    treeRoles: [
      {
        role:    'Customer Service Manager',
        period:  'Jul 2026 — Present',
        current: true,
        bullets: [
          'Promoted to Customer Service Manager, overseeing all front-end operations including Service Desk, Self-Checkout, and Registers.',
          'Lead and coordinate customer service associates to ensure efficient, high-quality service across all front-end touchpoints.',
          'Resolve escalated customer issues and complaints, maintaining satisfaction standards under high-volume retail conditions.',
          'Manage daily staffing allocation, monitor performance metrics, and communicate operational updates to store leadership.',
        ],
      },
      {
        role:    'Customer Service Desk & Cashier',
        period:  'Aug 2025 — Jun 2026',
        current: false,
        bullets: [
          'Operated across front-end roles including Service Desk, Self-Checkout, and Registers simultaneously.',
          'Handled returns, exchanges, and complex customer inquiries — resolving issues calmly under high volume.',
          'Monitored multiple self-service SCO stations and troubleshot routine technical alerts and hardware jams.',
          'Processed high-volume transactions efficiently using internal systems — POS, Handhelds, Inventory Lookup.',
        ],
      },
    ],
    bullets: [],
    tech: [],
  },
  {
    id:       1,
    category: 'tech',
    year:     '2026',
    role:     'Team Lead / Full Stack Developer',
    company:  'Giftelle · HrxConnect Capstone',
    type:     'Capstone',
    period:   'Jan 2026 — Apr 2026',
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
    id:       2,
    category: 'tech',
    year:     '2023',
    role:     'Full Stack Developer Intern',
    company:  'Stackss',
    type:     'Internship',
    period:   'Dec 2023 — May 2024',
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

const TABS = [
  { id: 'tech',  label: 'Tech Experience' },
  { id: 'other', label: 'Other Experience' },
]

export default function Experience() {
  const ref       = useRef(null)
  const inView    = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('tech')

  const visible = experiences.filter(e => e.category === activeTab)

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
          <span className="unlock-indicator">Area Unlocked</span>
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
            marginBottom: '48px',
          }}
        >
          Where I have <em>worked.</em>
        </motion.h2>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.18 }}
          style={{ display: 'flex', gap: '6px', marginBottom: '56px' }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding:       '9px 20px',
                border:        `1px solid ${activeTab === tab.id ? 'var(--accent)' : 'var(--border)'}`,
                background:    activeTab === tab.id ? 'var(--accent-dim)' : 'transparent',
                color:         activeTab === tab.id ? 'var(--accent)' : 'var(--muted)',
                transition:    'all 0.2s',
                cursor:        'pointer',
              }}
              onMouseEnter={e => { if (activeTab !== tab.id) e.currentTarget.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { if (activeTab !== tab.id) e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Entries */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <AnimatePresence mode="wait">
            {visible.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="exp-row"
                initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display:             'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap:                 '48px',
                  padding:             '56px 0',
                  borderBottom:        '1px solid var(--border)',
                }}
              >
                {/* ── Left rail ── */}
                <div>
                  <div style={{
                    fontFamily:   'var(--font-display)',
                    fontStyle:    'italic',
                    fontSize:     'clamp(40px, 4.4vw, 60px)',
                    fontWeight:   600,
                    color:        'var(--accent)',
                    lineHeight:   1,
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
                    {exp.period}
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

                {/* ── Right — role, meta, bullets ── */}
                <div>
                  <h3 style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     'clamp(24px, 2.6vw, 34px)',
                    fontWeight:   600,
                    color:        'var(--heading)',
                    lineHeight:   1.15,
                    marginBottom: '10px',
                  }}>
                    {exp.isTree ? exp.company : exp.role}
                  </h3>

                  {/* Company line — only for non-tree entries */}
                  {!exp.isTree && (
                    <div style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '12px',
                      color:         'var(--subtext)',
                      letterSpacing: '0.04em',
                      marginBottom:  '5px',
                    }}>
                      {exp.company}
                    </div>
                  )}

                  {/* Type + location — consistent mono muted for all entries */}
                  <div style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '11px',
                    color:         'var(--muted)',
                    letterSpacing: '0.05em',
                    marginBottom:  '28px',
                  }}>
                    {exp.type} · {exp.location}
                  </div>

                  {/* Tree of roles for multi-role entries */}
                  {exp.isTree ? (
                    <div style={{ borderLeft: '2px solid var(--border)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {exp.treeRoles.map((tr, ti) => (
                        <div key={ti} style={{ position: 'relative', paddingBottom: ti < exp.treeRoles.length - 1 ? '32px' : '0' }}>
                          <div style={{
                            position:     'absolute',
                            left:         '-27px',
                            top:          '6px',
                            width:        '10px',
                            height:       '10px',
                            borderRadius: '50%',
                            background:   tr.current ? 'var(--accent)' : 'var(--bg)',
                            border:       '2px solid var(--accent)',
                            animation:    tr.current ? 'aboutPulse 2.5s infinite' : 'none',
                          }} />
                          <div style={{
                            fontFamily:   'var(--font-display)',
                            fontSize:     'clamp(16px, 1.8vw, 22px)',
                            fontWeight:   600,
                            color:        tr.current ? 'var(--heading)' : 'var(--subtext)',
                            lineHeight:   1.2,
                            marginBottom: '4px',
                          }}>
                            {tr.role}
                            {tr.current && (
                              <span style={{
                                marginLeft:    '10px',
                                fontFamily:    'var(--font-mono)',
                                fontSize:      '8px',
                                color:         'var(--bg)',
                                background:    'var(--accent)',
                                padding:       '2px 7px',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                verticalAlign: 'middle',
                              }}>Current</span>
                            )}
                          </div>
                          <div style={{
                            fontFamily:    'var(--font-mono)',
                            fontSize:      '10px',
                            color:         'var(--muted)',
                            letterSpacing: '0.06em',
                            marginBottom:  '14px',
                          }}>
                            {tr.period}
                          </div>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {tr.bullets.map((b, bi) => (
                              <li key={bi} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '14px', lineHeight: 1.6, flexShrink: 0 }}>—</span>
                                <span style={{ fontSize: '14px', color: 'var(--subtext)', lineHeight: 1.75, fontWeight: 300 }}>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
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
                  )}

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
          </AnimatePresence>
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
