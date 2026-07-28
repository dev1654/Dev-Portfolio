'use client'
import { useState, useEffect } from 'react'

function rand(min, max) { return Math.random() * (max - min) + min }

export default function Particles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 24 }, (_, i) => ({
        id:       i,
        left:     rand(0, 100),
        size:     rand(2, 5),
        delay:    rand(0, 20),
        duration: rand(12, 26),
        drift:    rand(-60, 60),
      }))
    )
  }, [])

  if (particles.length === 0) return null

  return (
    <div style={{
      position:      'fixed',
      inset:         0,
      pointerEvents: 'none',
      zIndex:        1,
      overflow:      'hidden',
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position:     'absolute',
            bottom:       '-8px',
            left:         p.left + '%',
            width:        p.size + 'px',
            height:       p.size + 'px',
            borderRadius: '50%',
            background:   'var(--accent)',
            animation:    `particleRise ${p.duration}s ${p.delay}s infinite linear`,
            '--drift':    p.drift + 'px',
          }}
        />
      ))}
      <style>{`
        @keyframes particleRise {
          0%   { transform: translateY(0)      translateX(0)             scale(1);   opacity: 0;    }
          8%   { opacity: 0.32; }
          50%  { transform: translateY(-50vh)  translateX(var(--drift))  scale(0.8); }
          90%  { opacity: 0.22; }
          100% { transform: translateY(-102vh) translateX(calc(var(--drift) * 1.6)) scale(0.3); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
