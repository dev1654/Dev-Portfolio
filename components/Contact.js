'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactLinks = [
  { label: 'Email',    value: 'pateldev878@gmail.com',      href: 'mailto:pateldev878@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/devpatel878', href: 'https://www.linkedin.com/in/devpatel878' },
  { label: 'GitHub',   value: 'github.com/dev1654',          href: 'https://github.com/dev1654' },
  { label: 'Location', value: 'Toronto, Ontario, Canada',    href: null },
]

export default function Contact() {
  const ref        = useRef(null)
  const inView     = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending]     = useState(false)
  const [sent, setSent]           = useState(false)
  const [focused, setFocused]     = useState(null)

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await fetch('https://formspree.io/f/mvzwvvaz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
    setSending(false)
    setSent(true)
  }

  const inputStyle = (name) => ({
    width:       '100%',
    background:  focused === name ? 'var(--accent-dim)' : 'var(--input-bg)',
    border:      `1px solid ${focused === name ? 'var(--accent)' : 'var(--border)'}`,
    padding:     '14px 18px',
    fontFamily:  'var(--font-body)',
    fontSize:    '15px',
    color:       'var(--text)',
    outline:     'none',
    transition:  'all 0.25s',
    display:     'block',
  })

  const labelStyle = {
    fontFamily:    'var(--font-mono)',
    fontSize:      '10px',
    color:         'var(--muted)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    display:       'block',
    marginBottom:  '8px',
  }

  return (
    <section id="contact" ref={ref} style={{
      padding:      '120px 60px',
      background:   'var(--section-alt)',
      borderTop:    '1px solid var(--border)',
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
        06
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
            06 / Contact
          </span>
          <div style={{ width: '80px', height: '1px', background: 'var(--accent)', opacity: 0.3 }} />
        </motion.div>

        {/* Big heading */}
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
            marginBottom:  '16px',
          }}
        >
          LET&apos;S WORK<br /><span style={{ color: 'var(--accent)' }}>TOGETHER</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontSize:     '17px',
            color:        'var(--subtext)',
            lineHeight:   1.7,
            fontWeight:   300,
            marginBottom: '64px',
            maxWidth:     '500px',
          }}
        >
          Open to full-time opportunities, internships, and freelance projects.
          Drop me a message and I&apos;ll get back to you within 24 hours.
        </motion.p>

        {/* Main layout: left info + right form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '72px', alignItems: 'start' }}>

          {/* ── Left — contact info ── */}
          <div>

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 }}
              style={{
                display:     'inline-flex',
                alignItems:  'center',
                gap:         '10px',
                background:  'var(--accent-dim)',
                border:      '1px solid var(--accent)',
                padding:     '12px 20px',
                marginBottom:'36px',
              }}
            >
              <span style={{
                width:       '8px',
                height:      '8px',
                borderRadius:'50%',
                background:  'var(--accent)',
                animation:   'contactPulse 2s infinite',
              }} />
              <span style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '12px',
                color:         'var(--accent)',
                letterSpacing: '0.06em',
              }}>
                Available immediately
              </span>
            </motion.div>

            {/* Contact rows */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  style={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    alignItems:     'center',
                    padding:        '18px 0',
                    borderBottom:   '1px solid var(--border)',
                    gap:            '16px',
                  }}
                >
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '9px',
                    color:         'var(--muted)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    flexShrink:    0,
                    width:         '68px',
                  }}>
                    {link.label}
                  </span>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily:  'var(--font-body)',
                        fontSize:    '14px',
                        color:       'var(--subtext)',
                        flex:        1,
                        textAlign:   'right',
                        transition:  'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--subtext)'}
                    >
                      {link.value} ↗
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '14px',
                      color:      'var(--subtext)',
                      flex:       1,
                      textAlign:  'right',
                    }}>
                      {link.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background:  'var(--accent-dim)',
                  border:      '1px solid var(--accent)',
                  padding:     '60px 48px',
                  textAlign:   'center',
                }}
              >
                <div style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '64px',
                  color:        'var(--accent)',
                  marginBottom: '16px',
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '32px',
                  color:        'var(--heading)',
                  marginBottom: '12px',
                }}>
                  MESSAGE SENT
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '15px',
                  color:      'var(--subtext)',
                  lineHeight: 1.6,
                }}>
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input type="text" name="name" required placeholder="John Smith"
                      value={formState.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={inputStyle('name')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" name="email" required placeholder="john@company.com"
                      value={formState.email} onChange={handleChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={inputStyle('email')} />
                  </div>
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <label style={labelStyle}>Subject</label>
                  <input type="text" name="subject" required placeholder="Job Opportunity / Project / Collaboration"
                    value={formState.subject} onChange={handleChange}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                    style={inputStyle('subject')} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" required rows={6} placeholder="Tell me about the role, project, or opportunity..."
                    value={formState.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '140px' }} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width:         '100%',
                    background:    'var(--accent)',
                    border:        'none',
                    padding:       '16px 32px',
                    fontFamily:    'var(--font-body)',
                    fontSize:      '14px',
                    fontWeight:    700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'var(--bg)',
                    opacity:       sending ? 0.6 : 1,
                    transition:    'opacity 0.2s',
                  }}
                  onMouseEnter={e => { if (!sending) e.currentTarget.style.opacity = '0.8' }}
                  onMouseLeave={e => { if (!sending) e.currentTarget.style.opacity = '1' }}
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes contactPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.75); } }
        input::placeholder, textarea::placeholder { color: var(--muted); font-family: 'Outfit', sans-serif; }
      `}</style>
    </section>
  )
}
