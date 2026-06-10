'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id:          0,
    num:         '01',
    title:       'ExamLock',
    subtitle:    'Secure Online Examination Platform',
    description: 'Cross-platform monorepo with React web, Fastify REST API, Electron lockdown desktop shell, and React Native mobile app — shared PostgreSQL + Prisma backend. Claude API grading assistant generates per-question hints for professors.',
    highlights: [
      'Monaco Editor for in-exam coding across 18+ languages; Judge0 CE execution engine for 60+ languages',
      'Socket.io real-time sync with auto-save every 30 seconds',
      'Claude API grading assistant generating per-question feedback and hints for professors',
      'Electron shell disables all OS shortcuts and logs tab-switch integrity events',
      'Supabase-backed auth with role-based access for Students, Professors, and Admins',
    ],
    tech:         ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Supabase', 'Socket.io', 'Electron', 'React Native', 'Monaco Editor', 'Judge0', 'Claude API', 'Tailwind CSS'],
    github:       'https://github.com/dev1654/ExamLock',
    live:         null,
    year:         '2026',
    association:  'Humber Polytechnic',
    color:        '#E8B4B8',
    tag:          'Full Stack',
    collab:       false,
    collaborators: [],
  },
  {
    id:          1,
    num:         '02',
    title:       'NeuroScan',
    subtitle:    'AI Brain Tumor MRI Classifier',
    description: 'Trained EfficientNet-B0, ResNet18, and a custom CNN on 7,200 MRI images — achieving 98.31% accuracy. Transfer learning fine-tuning improved from an 81.62% baseline. Grad-CAM heatmaps provide explainability for clinical review.',
    highlights: [
      '98.31% classification accuracy across 4 tumor types on 7,200 MRI images',
      'Transfer learning with EfficientNet-B0 and ResNet18 — improved 16.69% over baseline CNN',
      'Grad-CAM explainability heatmaps highlight tumor regions for clinical review',
      'FastAPI backend deployed on HuggingFace Spaces; React frontend deployed on Vercel',
      'Docker containerised for reproducible training and inference environments',
    ],
    tech:         ['Python', 'PyTorch', 'EfficientNet-B0', 'ResNet18', 'Grad-CAM', 'FastAPI', 'React', 'Docker', 'HuggingFace Spaces'],
    github:       'https://github.com/dev1654/NeuroScan',
    live:         'https://brain-tumor-classifier-ten.vercel.app',
    year:         '2026',
    association:  'Humber Polytechnic',
    color:        '#A78BFA',
    tag:          'AI / ML',
    collab:       false,
    collaborators: [],
  },
  {
    id:          2,
    num:         '03',
    title:       'VMS',
    subtitle:    'Vehicle Management System',
    description: 'Full-stack garage management built with Java Spring Boot and React — replacing legacy handwritten logs with digital workflows for vehicles, appointments, invoices, and inventory across 8 modules.',
    highlights: [
      'JWT stateless auth, BCrypt hashing, RBAC — Admin, Mechanic, Receptionist',
      'Vehicle, customer, and mechanic CRUD — search, filter, and soft delete',
      'Appointments: Scheduled → In Progress → Completed with full audit logging',
      'PDF invoice generation via iTextPDF — 13% tax, auto-calculated totals',
      'CI/CD via GitHub Actions + Docker; documented with Swagger / OpenAPI',
    ],
    tech:         ['Java 22', 'Spring Boot 3.5', 'PostgreSQL', 'Spring Security + JWT', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'Swagger'],
    github:       'https://github.com/dev1654/vms',
    live:         null,
    year:         '2025 – 2026',
    association:  'Personal Project',
    color:        '#D4AF37',
    tag:          'Full Stack',
    collab:       false,
    collaborators: [],
  },
  {
    id:          3,
    num:         '04',
    title:       'IndiEstate',
    subtitle:    'Real Estate Marketplace',
    description: 'Full-featured real estate marketplace with Google OAuth2 + JWT auth, WhatsApp-style real-time messaging with read receipts, EMI calculator, and advanced search with rate limiting security.',
    highlights: [
      'Google OAuth2 + JWT dual-layer auth with secure session management',
      'WhatsApp-style messaging with real-time delivery and read receipts via Socket.io',
      'EMI calculator with amortisation schedule for buyers',
      'Advanced property search with rate limiting to prevent abuse',
      'Full property CRUD with Redux Toolkit state management and TanStack Query',
    ],
    tech:         ['React 18', 'Vite', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JWT', 'Tailwind CSS'],
    github:       'https://github.com/dev1654/IndiEstate',
    live:         null,
    year:         '2024 – 2025',
    association:  'Personal Project',
    color:        '#CD7F32',
    tag:          'Full Stack',
    collab:       false,
    collaborators: [],
  },
  {
    id:          4,
    num:         '05',
    title:       'ChargeIT',
    subtitle:    'EV Charging Station Locator',
    description: 'Live full-stack EV charging station discovery platform — global search, community reviews, real-time availability, and a full Admin Dashboard. Built as a 3-person team collaboration.',
    highlights: [
      'Global search by city, country, charger type (AC / DC / Tesla), and minimum rating',
      'Firebase Auth — Email / Password + Google Sign-In',
      'Community reviews: verified users rate stations 1–5 stars and leave comments',
      'Admin Dashboard for full station and content management',
      'Real-time availability, cost per kWh, connector types (CCS, Type 2, Tesla)',
    ],
    tech:         ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JavaScript'],
    github:       'https://github.com/dev1654/ChargeIT',
    live:         'https://chargeit-r4bp.onrender.com',
    year:         '2025',
    association:  'Collaboration',
    color:        '#F4D87C',
    tag:          'Full Stack',
    collab:       true,
    collaborators: ['dev1654', 'DeepPatel29', 'FawzaanJuhoor'],
  },
  {
    id:          5,
    num:         '06',
    title:       'ArtFinder',
    subtitle:    'Android Art Discovery App',
    description: 'Native Android app for discovering artworks from the Art Institute of Chicago — Google Maps integration, offline persistence with Room DB, Firebase auth, and a badge reward system.',
    highlights: [
      'Art Institute of Chicago Public API — infinite scroll + search by name',
      'Google Maps: green markers (visited) / orange (unvisited)',
      'Offline persistence with Room DB; Firebase Auth for user accounts',
      '1–5 photos = 10 pts, 6–10 photos = 20 pts per artwork (max)',
      'Badges: Explorer (0–100 pts), Curator (101–250), Archivist (251–500)',
    ],
    tech:         ['Kotlin', 'Retrofit', 'Room DB', 'Google Maps SDK', 'Firebase Auth', 'Material Design 3'],
    github:       'https://github.com/dev1654/ArtFinder',
    live:         null,
    year:         '2026',
    association:  'Humber Polytechnic',
    color:        '#C9A0DC',
    tag:          'Android',
    collab:       false,
    collaborators: [],
  },
]

const filterTags = ['All', 'Full Stack', 'AI / ML', 'Android']

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen]     = useState(0)
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? projects : projects.filter(p => p.tag === filter)

  return (
    <section id="projects" ref={ref} style={{
      padding:      '120px 60px',
      background:   'var(--section-alt)',
      borderTop:    '1px solid var(--border)',
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
        opacity:       0.03,
        lineHeight:    1,
        pointerEvents: 'none',
        userSelect:    'none',
      }}>
        04
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
            04 / Projects
          </span>
          <div style={{ width: '80px', height: '1px', background: 'var(--accent)', opacity: 0.3 }} />
        </motion.div>

        {/* Heading + filters */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-end',
          marginBottom:   '56px',
          flexWrap:       'wrap',
          gap:            '24px',
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize:   'clamp(42px, 5vw, 68px)',
              fontWeight: 600,
              color:      'var(--heading)',
              lineHeight: 1.05,
            }}
          >
            Things I <em>have built.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}
          >
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding:       '8px 16px',
                  border:        `1px solid ${filter === tag ? 'var(--accent)' : 'var(--border)'}`,
                  background:    filter === tag ? 'var(--accent-dim)' : 'transparent',
                  color:         filter === tag ? 'var(--accent)' : 'var(--muted)',
                  transition:    'all 0.2s',
                }}
                onMouseEnter={e => { if (filter !== tag) e.currentTarget.style.borderColor = 'var(--accent)' }}
                onMouseLeave={e => { if (filter !== tag) e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Accordion list */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {visible.map((project, i) => {
            const isOpen = open === project.id
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                {/* Row header */}
                <div
                  className="proj-row"
                  onClick={() => setOpen(isOpen ? null : project.id)}
                  style={{
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'space-between',
                    padding:        '32px 20px 32px 0',
                    borderBottom:   isOpen ? 'none' : '1px solid var(--border)',
                    cursor:         'pointer',
                    gap:            '16px',
                    userSelect:     'none',
                    transition:     'all 0.25s ease',
                  }}
                  onMouseEnter={e => { if (!isOpen) e.currentTarget.style.paddingLeft = '16px' }}
                  onMouseLeave={e => { if (!isOpen) e.currentTarget.style.paddingLeft = '0' }}
                >
                  {/* Left: index + title + subtitle */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '28px', flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '11px',
                      color:         'var(--accent)',
                      letterSpacing: '0.1em',
                      flexShrink:    0,
                    }}>
                      {project.num}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div className="proj-title" style={{
                        fontFamily: 'var(--font-display)',
                        fontSize:   'clamp(26px, 3.6vw, 52px)',
                        fontWeight: 600,
                        lineHeight: 1.05,
                        fontStyle:  isOpen ? 'italic' : 'normal',
                        color:      isOpen ? 'var(--accent)' : 'var(--heading)',
                        transition: 'color 0.3s',
                        whiteSpace: 'nowrap',
                      }}>
                        {project.title}
                      </div>
                      <div className="proj-subtitle" style={{
                        fontFamily:   'var(--font-display)',
                        fontStyle:    'italic',
                        fontSize:     '15px',
                        fontWeight:   500,
                        color:        'var(--muted)',
                        marginTop:    '6px',
                        overflow:     'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace:   'nowrap',
                      }}>
                        {project.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: tag + year + links + toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                    <span className="proj-tag" style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '9px',
                      color:         project.color,
                      background:    project.color + '14',
                      border:        `1px solid ${project.color}30`,
                      padding:       '4px 10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {project.tag}
                    </span>
                    <span className="proj-year" style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '11px',
                      color:      'var(--muted)',
                    }}>
                      {project.year}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{
                          fontFamily:  'var(--font-mono)',
                          fontSize:    '11px',
                          color:       'var(--muted)',
                          transition:  'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                      >
                        ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize:   '11px',
                          color:      project.color,
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        Live ↗
                      </a>
                    )}
                    <span style={{
                      fontFamily:  'var(--font-mono)',
                      fontSize:    '22px',
                      color:       isOpen ? project.color : 'var(--muted)',
                      transform:   isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition:  'transform 0.3s, color 0.3s',
                      lineHeight:  1,
                    }}>
                      +
                    </span>
                  </div>
                </div>

                {/* Expanded */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="resp-2col" style={{
                        display:      'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap:          '48px',
                        padding:      '28px 0 40px 0',
                        borderBottom: '1px solid var(--border)',
                        borderLeft:   `3px solid ${project.color}`,
                        paddingLeft:  '28px',
                      }}>
                        {/* Left */}
                        <div>
                          <p style={{
                            fontSize:     '15px',
                            color:        'var(--subtext)',
                            lineHeight:   1.8,
                            fontWeight:   300,
                            marginBottom: '28px',
                          }}>
                            {project.description}
                          </p>

                          {project.collab && project.collaborators.length > 0 && (
                            <div style={{ marginBottom: '20px' }}>
                              <div style={{
                                fontFamily:    'var(--font-mono)',
                                fontSize:      '9px',
                                color:         'var(--muted)',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                marginBottom:  '10px',
                              }}>
                                Team
                              </div>
                              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {project.collaborators.map(c => (
                                  <span key={c} style={{
                                    fontFamily:    'var(--font-mono)',
                                    fontSize:      '10px',
                                    color:         'var(--subtext)',
                                    background:    'var(--tag-bg)',
                                    border:        '1px solid var(--tag-border)',
                                    padding:       '3px 8px',
                                  }}>
                                    @{c}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div style={{
                            fontFamily:    'var(--font-mono)',
                            fontSize:      '9px',
                            color:         'var(--muted)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom:  '10px',
                          }}>
                            Tech Stack
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {project.tech.map(t => (
                              <span key={t} style={{
                                fontFamily:    'var(--font-mono)',
                                fontSize:      '10px',
                                color:         'var(--muted)',
                                background:    'var(--tag-bg)',
                                border:        '1px solid var(--tag-border)',
                                padding:       '4px 10px',
                              }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right */}
                        <div>
                          <div style={{
                            fontFamily:    'var(--font-mono)',
                            fontSize:      '9px',
                            color:         project.color,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            marginBottom:  '20px',
                            opacity:       0.8,
                          }}>
                            Key Features
                          </div>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {project.highlights.map((h, hi) => (
                              <li key={hi} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <span style={{
                                  color:      project.color,
                                  fontSize:   '11px',
                                  marginTop:  '3px',
                                  flexShrink: 0,
                                  opacity:    0.7,
                                }}>
                                  ▹
                                </span>
                                <span style={{
                                  fontSize:   '13px',
                                  color:      'var(--subtext)',
                                  lineHeight: 1.7,
                                  fontWeight: 300,
                                }}>
                                  {h}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}
        >
          <p style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '12px',
            color:         'var(--muted)',
            marginBottom:  '16px',
            letterSpacing: '0.06em',
          }}>
            More on GitHub
          </p>
          <a
            href="https://github.com/dev1654"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '13px',
              fontWeight:    600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color:         'var(--accent)',
              border:        '1px solid var(--accent)',
              padding:       '12px 28px',
              display:       'inline-block',
              transition:    'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View GitHub Profile ↗
          </a>
        </motion.div>

      </div>

      <style>{`
        .proj-row:hover .proj-title {
          font-style: italic;
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  )
}
