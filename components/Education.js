'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    id:          0,
    num:         '01',
    school:      'Humber Polytechnic',
    degree:      'Postgraduate Diploma',
    field:       'Information Technology Solutions',
    location:    'Toronto, Ontario, Canada',
    period:      'Sep 2024 — Apr 2026',
    status:      'Graduated',
    statusActive: false,
    gpa:         null,
    highlights: [
      'Graduated April 2026 — Specializing in Full Stack Development, Cloud Computing, and Machine Learning.',
      'Capstone Team Lead: delivered Giftelle marketplace (React, React Native, Supabase, Stripe) with a 4-person team.',
      'Major projects: ExamLock (Claude API + Electron), NeuroScan (98.31% MRI classifier), VMS (Spring Boot + React).',
    ],
    courses: [
      'Advanced Java Programming', 'Data Structures & Design Patterns', 'Big Data',
      'Machine Learning', 'Android App Development', 'SQL Server Database Development',
      'Advanced Operating Systems', 'Web Programming & Framework',
      'Fundamentals of Data Analytics', 'Project Management',
      'Requirement Analysis & Process Modelling',
    ],
  },
  {
    id:          1,
    num:         '02',
    school:      'Silver Oak University',
    degree:      'Bachelor of Computer Applications',
    field:       'BCA',
    location:    'Ahmedabad, Gujarat, India',
    period:      'Aug 2021 — Mar 2024',
    status:      'Completed',
    statusActive: false,
    gpa:         '8.12 / 10',
    highlights: [
      'Graduated with a strong CGPA of 8.12 / 10.',
      'Built MERN Estate — a full-featured real estate web application as final year project.',
      'Strong foundation in OOP, DBMS, networking, and software engineering principles.',
    ],
    courses: [
      'Data Structures', 'Database Management Systems', 'Web Development',
      'Object-Oriented Programming', 'Computer Networks', 'Software Engineering',
    ],
  },
]

const certifications = [
  {
    name:   'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date:   'Oct 2025',
    id:     'UC-12f3c5f2-da0c-406d-af8c-a3ff2fc8989d',
    skills: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
  },
]

export default function Education() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} style={{ padding: '140px 60px', position: 'relative', overflow: 'hidden' }}>

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
        05
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
            05 / Education
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
          Academic <em>background.</em>
        </motion.h2>

        {/* Entries — open editorial rows */}
        <div style={{ borderTop: '1px solid var(--border)', marginBottom: '72px' }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="edu-row"
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.7, delay: 0.18 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display:             'grid',
                gridTemplateColumns: '200px 1fr',
                gap:                 '48px',
                padding:             '56px 0',
                borderBottom:        '1px solid var(--border)',
              }}
            >
              {/* Left rail */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle:  'italic',
                  fontSize:   'clamp(34px, 3.6vw, 48px)',
                  fontWeight: 600,
                  color:      'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}>
                  {edu.num}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '10px',
                  color:         'var(--muted)',
                  letterSpacing: '0.08em',
                  lineHeight:    1.9,
                }}>
                  {edu.period}<br />
                  {edu.gpa && <span style={{ color: 'var(--accent)' }}>{edu.gpa} GPA</span>}
                </div>
                <span style={{
                  display:       'inline-block',
                  marginTop:     '14px',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '9px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding:       '4px 10px',
                  color:         'var(--accent)',
                  background:    'var(--accent-dim)',
                  border:        '1px solid var(--accent)',
                }}>
                  {edu.status}
                </span>
              </div>

              {/* Right */}
              <div>
                <h3 style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(26px, 2.8vw, 38px)',
                  fontWeight:   600,
                  color:        'var(--heading)',
                  lineHeight:   1.12,
                  marginBottom: '8px',
                }}>
                  {edu.school}
                </h3>
                <div style={{
                  fontFamily:   'var(--font-display)',
                  fontStyle:    'italic',
                  fontSize:     '18px',
                  fontWeight:   500,
                  color:        'var(--accent)',
                  marginBottom: '6px',
                }}>
                  {edu.degree} — {edu.field}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '0.05em',
                  marginBottom:  '28px',
                }}>
                  {edu.location}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '15px', lineHeight: 1.5, flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: '14px', color: 'var(--subtext)', lineHeight: 1.7, fontWeight: 300 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '9px',
                  color:         'var(--muted)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom:  '12px',
                }}>
                  Coursework
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '10.5px',
                  color:         'var(--subtext)',
                  letterSpacing: '0.04em',
                  lineHeight:    2,
                }}>
                  {edu.courses.map((c, ci) => (
                    <span key={c}>
                      {c}
                      {ci < edu.courses.length - 1 && (
                        <span style={{ color: 'var(--accent)', opacity: 0.5, padding: '0 9px' }}>·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div style={{
            display:       'flex',
            alignItems:    'center',
            gap:           '14px',
            marginBottom:  '20px',
          }}>
            <span style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '10px',
              color:         'var(--muted)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              flexShrink:    0,
            }}>
              Certifications
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {certifications.map((cert) => (
            <div
              key={cert.name}
              style={{
                display:         'grid',
                gridTemplateColumns: '1fr auto',
                gap:             '24px',
                alignItems:      'center',
                padding:         '28px 0',
                borderBottom:    '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '20px',
                  fontWeight:   600,
                  color:        'var(--heading)',
                  marginBottom: '8px',
                }}>
                  {cert.name}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  marginBottom:  '12px',
                  letterSpacing: '0.04em',
                }}>
                  {cert.issuer} · Issued {cert.date} · ID: {cert.id}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '10.5px',
                  color:         'var(--subtext)',
                  letterSpacing: '0.04em',
                }}>
                  {cert.skills.map((s, si) => (
                    <span key={s}>
                      {s}
                      {si < cert.skills.length - 1 && (
                        <span style={{ color: 'var(--accent)', opacity: 0.5, padding: '0 9px' }}>·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontStyle:  'italic',
                fontSize:   '30px',
                color:      'var(--accent)',
                opacity:    0.25,
                fontWeight: 600,
              }}>
                {cert.issuer}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 40px 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
