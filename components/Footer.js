'use client'

import { useState, useEffect } from 'react'

const WAVE = [
  { spd: '0.55s', delay: '0s'    },
  { spd: '0.42s', delay: '0.1s'  },
  { spd: '0.68s', delay: '0.22s' },
  { spd: '0.50s', delay: '0.05s' },
  { spd: '0.62s', delay: '0.15s' },
  { spd: '0.38s', delay: '0.28s' },
  { spd: '0.72s', delay: '0.08s' },
  { spd: '0.48s', delay: '0.18s' },
  { spd: '0.58s', delay: '0.32s' },
  { spd: '0.44s', delay: '0.12s' },
  { spd: '0.66s', delay: '0.24s' },
  { spd: '0.52s', delay: '0.04s' },
]

const TOTAL = 260 // 4:20

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/dev1654' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devpatel878' },
  { label: 'Email',    href: 'mailto:pateldev878@gmail.com' },
]

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export default function Footer() {
  const [seconds, setSeconds] = useState(154)

  useEffect(() => {
    const id = setInterval(() => setSeconds(prev => (prev + 1) % TOTAL), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer style={{
      borderTop:  '1px solid var(--border)',
      background: 'var(--bg)',
      padding:    '0 60px',
    }}>

      {/* Statement row */}
      <div style={{
        maxWidth:     '1200px',
        margin:       '0 auto',
        padding:      '88px 0 72px',
        borderBottom: '1px solid var(--border)',
        display:      'flex',
        alignItems:   'flex-end',
        justifyContent: 'space-between',
        gap:          '32px',
        flexWrap:     'wrap',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize:   'clamp(40px, 6vw, 84px)',
          fontWeight: 600,
          color:      'var(--heading)',
          lineHeight: 1.05,
        }}>
          Have an idea?<br />
          <em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>Let&apos;s build it.</em>
        </div>
        <a
          href="#"
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '10px',
            color:         'var(--muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display:       'flex',
            alignItems:    'center',
            gap:           '10px',
            transition:    'color 0.25s',
            paddingBottom: '8px',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          Back to top <span style={{ fontSize: '14px' }}>↑</span>
        </a>
      </div>

      {/* Main footer row */}
      <div className="resp-2col" style={{
        maxWidth:        '1200px',
        margin:          '0 auto',
        display:         'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        alignItems:      'start',
        gap:             '60px',
        padding:         '64px 0 48px',
      }}>

        {/* Brand */}
        <div>
          <div style={{
            fontFamily:   'var(--font-display)',
            fontStyle:    'italic',
            fontSize:     '40px',
            fontWeight:   600,
            color:        'var(--accent)',
            lineHeight:   1,
            marginBottom: '12px',
          }}>
            Dev
          </div>
          <p style={{
            fontFamily:  'var(--font-body)',
            fontSize:    '13px',
            color:       'var(--muted)',
            maxWidth:    '220px',
            lineHeight:  1.7,
            fontWeight:  300,
          }}>
            Software Developer with 4+ years of experience building web and data-driven solutions. Based in Toronto, Canada.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '9px',
            color:         'var(--muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom:  '20px',
          }}>
            Navigation
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily:  'var(--font-body)',
                  fontSize:    '14px',
                  color:       'var(--muted)',
                  transition:  'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '9px',
            color:         'var(--muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom:  '20px',
          }}>
            Connect
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  fontFamily:  'var(--font-body)',
                  fontSize:    '14px',
                  color:       'var(--muted)',
                  transition:  'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              display:       'inline-block',
              fontFamily:    'var(--font-mono)',
              fontSize:      '10px',
              fontWeight:    600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         'var(--bg)',
              background:    'var(--accent)',
              padding:       '10px 18px',
              transition:    'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Resume ↓
          </a>
        </div>
      </div>

      {/* Now Playing */}
      <div style={{
        maxWidth:     '1200px',
        margin:       '0 auto',
        borderTop:    '1px solid var(--border)',
        padding:      '28px 0',
        display:      'flex',
        alignItems:   'center',
        gap:          '20px',
      }}>
        <div style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '8px',
          color:         'var(--accent)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          flexShrink:    0,
          opacity:       0.7,
        }}>
          ♪ Now Playing
        </div>

        {/* Waveform */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
          {WAVE.map((w, i) => (
            <div key={i} style={{
              width:           '2.5px',
              height:          '16px',
              background:      'var(--accent)',
              borderRadius:    '1px',
              animation:       `waveBar ${w.spd} ${w.delay} ease-in-out infinite alternate`,
              transformOrigin: 'center',
            }} />
          ))}
        </div>

        {/* Track info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '13px',
              fontWeight:   500,
              color:        'var(--heading)',
              whiteSpace:   'nowrap',
            }}>
              Late Night Sessions
            </span>
            <span style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '10px',
              color:         'var(--muted)',
              letterSpacing: '0.04em',
            }}>
              Lo-Fi Dev Radio
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--muted)', flexShrink: 0 }}>
              {fmt(seconds)}
            </span>
            <div style={{ flex: 1, height: '2px', background: 'var(--border)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{
                height:       '100%',
                background:   'var(--accent)',
                width:        (seconds / TOTAL * 100) + '%',
                borderRadius: '1px',
                transition:   'width 0.9s linear',
              }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--muted)', flexShrink: 0 }}>
              4:20
            </span>
          </div>
        </div>

        <style>{`
          @keyframes waveBar { from { transform: scaleY(0.12); } to { transform: scaleY(1); } }
        `}</style>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth:   '1200px',
        margin:     '0 auto',
        borderTop:  '1px solid var(--border)',
        padding:    '20px 0',
        display:    'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap:   'wrap',
        gap:        '8px',
      }}>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         'var(--muted)',
          letterSpacing: '0.06em',
        }}>
          © {new Date().getFullYear()} Dev Patel. All rights reserved.
        </span>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         'var(--muted)',
          letterSpacing: '0.06em',
        }}>
          Built with Next.js · Deployed on Vercel
        </span>
      </div>

    </footer>
  )
}
