'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGrid = [
  {
    id: 0,
    num: '01',
    category: 'Frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Tailwind CSS', 'Bootstrap'],
    span: 'wide',   // 3fr
  },
  {
    id: 1,
    num: '02',
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'REST APIs'],
    span: 'narrow', // 2fr
  },
  {
    id: 2,
    num: '03',
    category: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Oracle DB', 'Hibernate', 'PL/SQL'],
    span: 'narrow', // 2fr
  },
  {
    id: 3,
    num: '04',
    category: 'Cloud & Tools',
    skills: ['AWS', 'Firebase', 'Git / GitHub', 'Maven', 'Agile / Scrum'],
    span: 'wide',   // 3fr
  },
  {
    id: 4,
    num: '05',
    category: 'Mobile',
    skills: ['Kotlin', 'Jetpack Compose', 'Retrofit + Gson', 'Coil', 'MVVM'],
    span: 'full',   // full row
  },
]

function SkillCell({ row, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        padding:    '36px 40px',
        border:     '1px solid var(--border)',
        position:   'relative',
        overflow:   'hidden',
        transition: 'background 0.3s ease',
        background: 'var(--card-bg)',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--card-hover)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
    >
      {/* Big background number */}
      <div style={{
        position:      'absolute',
        top:           '-16px',
        right:         '24px',
        fontFamily:    'var(--font-display)',
        fontSize:      '120px',
        fontWeight:    800,
        color:         'var(--accent)',
        opacity:       0.05,
        lineHeight:    1,
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
        userSelect:    'none',
      }}>
        {row.num}
      </div>

      {/* Category label */}
      <div style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '10px',
        color:         'var(--accent)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom:  '8px',
        opacity:       0.7,
      }}>
        {row.num}
      </div>

      {/* Category name */}
      <div style={{
        fontFamily:    'var(--font-display)',
        fontSize:      'clamp(26px, 3vw, 40px)',
        fontWeight:    800,
        color:         'var(--heading)',
        letterSpacing: '-0.02em',
        lineHeight:    1,
        marginBottom:  '28px',
      }}>
        {row.category.toUpperCase()}
      </div>

      {/* Skill pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {row.skills.map((skill) => (
          <span key={skill} style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '11px',
            color:         'var(--subtext)',
            background:    'var(--tag-bg)',
            border:        '1px solid var(--tag-border)',
            padding:       '6px 13px',
            letterSpacing: '0.04em',
            transition:    'all 0.2s',
          }}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{
      padding:      '120px 60px',
      background:   'var(--section-alt)',
      borderTop:    '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position:     'relative',
      overflow:     'hidden',
    }}>

      {/* Watermark */}
      <div style={{
        position:      'absolute',
        top:           '-20px',
        left:          '40px',
        fontFamily:    'var(--font-display)',
        fontSize:      'clamp(160px, 22vw, 320px)',
        fontWeight:    800,
        color:         'var(--accent)',
        opacity:       0.03,
        lineHeight:    1,
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
        userSelect:    'none',
      }}>
        02
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
            02 / Skills
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
          TOOLS I<br /><span style={{ color: 'var(--accent)' }}>BUILD WITH</span>
        </motion.h2>

        {/* Row 1: Frontend (3fr) + Backend (2fr) */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '1px', marginBottom: '1px' }}>
          <SkillCell row={skillGrid[0]} inView={inView} delay={0.15} />
          <SkillCell row={skillGrid[1]} inView={inView} delay={0.22} />
        </div>

        {/* Row 2: Database (2fr) + Cloud (3fr) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1px', marginBottom: '1px' }}>
          <SkillCell row={skillGrid[2]} inView={inView} delay={0.30} />
          <SkillCell row={skillGrid[3]} inView={inView} delay={0.37} />
        </div>

        {/* Row 3: Mobile (full width) */}
        <SkillCell row={skillGrid[4]} inView={inView} delay={0.45} />

      </div>
    </section>
  )
}
