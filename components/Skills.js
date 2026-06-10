'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGrid = [
  {
    id: 0,
    num: '01',
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'Electron.js'],
  },
  {
    id: 1,
    num: '02',
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Fastify', 'FastAPI', 'Spring Boot', 'REST APIs', 'Socket.io', 'JWT'],
  },
  {
    id: 2,
    num: '03',
    category: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Prisma ORM', 'Redis', 'Room DB', 'Hibernate'],
  },
  {
    id: 3,
    num: '04',
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Render', 'Git / GitHub', 'Maven'],
  },
  {
    id: 4,
    num: '05',
    category: 'AI & ML',
    skills: ['PyTorch', 'EfficientNet-B0', 'ResNet18', 'Grad-CAM', 'HuggingFace', 'Claude API', 'Transfer Learning'],
  },
  {
    id: 5,
    num: '06',
    category: 'Mobile',
    skills: ['Kotlin', 'Room DB', 'Firebase Auth', 'Google Maps SDK', 'Retrofit', 'Material Design 3'],
  },
]

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{
      padding:      '140px 60px',
      background:   'var(--section-alt)',
      borderTop:    '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position:     'relative',
      overflow:     'hidden',
    }}>

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
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(42px, 5vw, 68px)',
            fontWeight:   600,
            color:        'var(--heading)',
            lineHeight:   1.05,
            marginBottom: '72px',
          }}
        >
          Tools I <em>build with.</em>
        </motion.h2>

        {/* Index rows */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {skillGrid.map((row, i) => (
            <motion.div
              key={row.id}
              className="skill-row"
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display:             'grid',
                gridTemplateColumns: '60px 280px 1fr',
                alignItems:          'baseline',
                gap:                 '32px',
                padding:             '34px 0',
                borderBottom:        '1px solid var(--border)',
                transition:          'background 0.3s ease, padding-left 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.paddingLeft = '20px' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0px' }}
            >
              {/* Index */}
              <span style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                color:         'var(--accent)',
                letterSpacing: '0.1em',
              }}>
                {row.num}
              </span>

              {/* Category */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize:   'clamp(24px, 2.8vw, 36px)',
                fontWeight: 600,
                color:      'var(--heading)',
                lineHeight: 1.1,
              }}>
                {row.category}
              </span>

              {/* Skills — quiet inline list */}
              <span style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11.5px',
                color:         'var(--subtext)',
                letterSpacing: '0.04em',
                lineHeight:    2.1,
              }}>
                {row.skills.map((skill, si) => (
                  <span key={skill}>
                    <span style={{ whiteSpace: 'nowrap' }}>{skill}</span>
                    {si < row.skills.length - 1 && (
                      <span style={{ color: 'var(--accent)', opacity: 0.5 }}>{' · '}</span>
                    )}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skill-row {
            grid-template-columns: 40px 1fr !important;
            gap: 16px !important;
          }
          .skill-row > span:last-child {
            grid-column: 2;
          }
        }
      `}</style>
    </section>
  )
}
