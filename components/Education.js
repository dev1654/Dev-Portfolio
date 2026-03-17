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
    status:      'In Progress',
    statusActive: true,
    gpa:         null,
    highlights: [
      'Specializing in Full Stack Development, Cloud Computing, and Database Management.',
      'Built ArtFinder (Android / Kotlin / Firebase) and VMS (Spring Boot / React / PostgreSQL) as major projects.',
      'Coursework covers Machine Learning, Big Data, Android Dev, and Advanced Operating Systems.',
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
    <section id="education" ref={ref} style={{ padding: '120px 60px', position: 'relative', overflow: 'hidden' }}>

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
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(40px, 5vw, 68px)',
            color:         'var(--heading)',
            lineHeight:    0.92,
            letterSpacing: '-0.02em',
            marginBottom:  '64px',
          }}
        >
          ACADEMIC<br /><span style={{ color: 'var(--accent)' }}>BACKGROUND</span>
        </motion.h2>

        {/* Two cards side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              style={{
                border:     '1px solid var(--border)',
                borderTop:  `3px solid var(--accent)`,
                padding:    '36px 36px 32px',
                background: 'var(--card-bg)',
                display:    'flex',
                flexDirection: 'column',
                gap:        '0',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--card-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
            >
              {/* Card header */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'flex-start',
                  marginBottom:   '12px',
                  gap:            '12px',
                }}>
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '9px',
                    color:         'var(--accent)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity:       0.7,
                  }}>
                    {edu.num}
                  </span>
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '9px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding:       '3px 9px',
                    color:         edu.statusActive ? 'var(--bg)' : 'var(--accent)',
                    background:    edu.statusActive ? 'var(--accent)' : 'var(--accent-dim)',
                    border:        '1px solid var(--accent)',
                  }}>
                    {edu.status}
                  </span>
                </div>

                <h3 style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(20px, 2.2vw, 28px)',
                  fontWeight:    800,
                  color:         'var(--heading)',
                  lineHeight:    1.05,
                  letterSpacing: '-0.02em',
                  marginBottom:  '8px',
                }}>
                  {edu.school.toUpperCase()}
                </h3>

                <div style={{
                  fontFamily:  'var(--font-body)',
                  fontSize:    '14px',
                  color:       'var(--accent)',
                  fontWeight:  600,
                  marginBottom: '4px',
                }}>
                  {edu.degree}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '0.05em',
                  marginBottom:  '4px',
                }}>
                  {edu.field}
                </div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '0.05em',
                  display:       'flex',
                  justifyContent:'space-between',
                }}>
                  <span>{edu.period}</span>
                  {edu.gpa && <span style={{ color: 'var(--accent)' }}>{edu.gpa} GPA</span>}
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '20px' }} />

              {/* Highlights */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', flex: 1 }}>
                {edu.highlights.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '11px', marginTop: '3px', flexShrink: 0, opacity: 0.7 }}>▹</span>
                    <span style={{ fontSize: '13px', color: 'var(--subtext)', lineHeight: 1.65, fontWeight: 300 }}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Courses */}
              <div>
                <div style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '9px',
                  color:         'var(--muted)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom:  '10px',
                }}>
                  Coursework
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {edu.courses.map((c) => (
                    <span key={c} style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '9px',
                      color:         'var(--subtext)',
                      background:    'var(--tag-bg)',
                      border:        '1px solid var(--tag-border)',
                      padding:       '3px 8px',
                      letterSpacing: '0.03em',
                    }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         'var(--muted)',
                marginTop:     '20px',
                letterSpacing: '0.06em',
              }}>
                {edu.location}
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
                padding:         '24px 0',
                borderTop:       '1px solid var(--border)',
                borderBottom:    '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '16px',
                  fontWeight:   600,
                  color:        'var(--heading)',
                  marginBottom: '6px',
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
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {cert.skills.map((s) => (
                    <span key={s} style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '10px',
                      color:         'var(--accent)',
                      background:    'var(--accent-dim)',
                      border:        '1px solid var(--tag-border)',
                      padding:       '3px 9px',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '28px',
                color:         'var(--accent)',
                opacity:       0.2,
                letterSpacing: '0.05em',
                fontWeight:    800,
              }}>
                {cert.issuer.toUpperCase()}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
