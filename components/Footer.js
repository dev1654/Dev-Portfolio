'use client'

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

export default function Footer() {
  return (
    <footer style={{
      borderTop:  '1px solid var(--border)',
      background: 'var(--bg)',
      padding:    '0 60px',
    }}>

      {/* Main footer row */}
      <div style={{
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
            fontFamily:    'var(--font-display)',
            fontSize:      '44px',
            fontWeight:    800,
            color:         'var(--accent)',
            lineHeight:    1,
            letterSpacing: '-0.02em',
            marginBottom:  '12px',
          }}>
            DEV<span style={{ color: 'var(--muted)' }}>.</span>
          </div>
          <p style={{
            fontFamily:  'var(--font-body)',
            fontSize:    '13px',
            color:       'var(--muted)',
            maxWidth:    '220px',
            lineHeight:  1.7,
            fontWeight:  300,
          }}>
            Full Stack Developer in progress. Building scalable web apps with the MERN stack. Based in Toronto, Canada.
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
