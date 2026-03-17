'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [activeSection, setActive]  = useState('')
  const [scrollPct, setScrollPct]   = useState(0)
  const [theme, setTheme]           = useState('dark')
  const [mounted, setMounted]       = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('dp-theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 40)
      setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      let current = ''
      for (const l of links) {
        const el = document.getElementById(l.href.replace('#', ''))
        if (el && el.getBoundingClientRect().top <= 120) current = l.href.replace('#', '')
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('dp-theme', next)
  }

  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        height: '1px', width: scrollPct + '%',
        background: 'var(--accent)', zIndex: 200,
        transition: 'width 0.1s linear',
      }} />

      <nav style={{
        position:           'fixed',
        top: 0, left: 0, right: 0,
        zIndex:             100,
        display:            'flex',
        alignItems:         'center',
        justifyContent:     'space-between',
        padding:            '0 60px',
        height:             '64px',
        background:         scrolled || menuOpen ? 'var(--nav-bg)' : 'transparent',
        backdropFilter:     scrolled || menuOpen ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(24px)' : 'none',
        borderBottom:       scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        transition:         'all 0.3s ease',
      }}>

        {/* Logo */}
        <a href="#" style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '20px',
          fontWeight:    800,
          color:         'var(--accent)',
          letterSpacing: '0.05em',
        }}>
          DEV<span style={{ color: 'var(--muted)' }}>.</span>
        </a>

        {/* Nav links — desktop */}
        <ul className="nav-desktop-links" style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
          {links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontFamily:      'var(--font-mono)',
                    fontSize:        '11px',
                    letterSpacing:   '0.12em',
                    textTransform:   'uppercase',
                    color:           isActive ? 'var(--accent)' : 'var(--muted)',
                    textDecoration:  'none',
                    transition:      'color 0.2s',
                    paddingBottom:   '2px',
                    borderBottom:    isActive ? '1px solid var(--accent)' : '1px solid transparent',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? 'var(--accent)' : 'var(--muted)'}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right — theme toggle + CTA (desktop) */}
        <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {mounted && (
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              style={{
                background:    'transparent',
                border:        '1px solid var(--border)',
                width:         '34px',
                height:        '34px',
                borderRadius:  '50%',
                display:       'flex',
                alignItems:    'center',
                justifyContent:'center',
                cursor:        'pointer',
                fontSize:      '15px',
                color:         'var(--subtext)',
                transition:    'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--subtext)' }}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          )}

          <a
            href="#contact"
            style={{
              fontFamily:     'var(--font-mono)',
              fontSize:       '11px',
              letterSpacing:  '0.12em',
              textTransform:  'uppercase',
              color:          'var(--bg)',
              background:     'var(--accent)',
              padding:        '9px 20px',
              textDecoration: 'none',
              transition:     'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display:        'none',
            flexDirection:  'column',
            gap:            '5px',
            background:     'transparent',
            border:         'none',
            padding:        '4px',
            cursor:         'pointer',
          }}
        >
          <span style={{
            width: '22px', height: '2px', background: 'var(--heading)', display: 'block',
            transition: 'transform 0.25s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            width: '22px', height: '2px', background: 'var(--heading)', display: 'block',
            transition: 'opacity 0.25s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            width: '22px', height: '2px', background: 'var(--heading)', display: 'block',
            transition: 'transform 0.25s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:       'fixed',
          top:            '64px',
          left:           0,
          right:          0,
          zIndex:         99,
          background:     'var(--nav-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom:   '1px solid var(--border)',
          padding:        '28px 24px 36px',
          display:        'flex',
          flexDirection:  'column',
          gap:            '0',
        }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         activeSection === link.href.replace('#','') ? 'var(--accent)' : 'var(--muted)',
                padding:       '16px 0',
                borderBottom:  '1px solid var(--border)',
                display:       'block',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '28px' }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         'var(--bg)',
                background:    'var(--accent)',
                padding:       '12px 28px',
                textDecoration:'none',
              }}
            >
              Let&apos;s Talk
            </a>
            {mounted && (
              <button
                onClick={toggleTheme}
                style={{
                  background:    'transparent',
                  border:        '1px solid var(--border)',
                  width:         '40px',
                  height:        '40px',
                  borderRadius:  '50%',
                  display:       'flex',
                  alignItems:    'center',
                  justifyContent:'center',
                  cursor:        'pointer',
                  fontSize:      '16px',
                  color:         'var(--subtext)',
                }}
              >
                {theme === 'dark' ? '☀' : '☾'}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
