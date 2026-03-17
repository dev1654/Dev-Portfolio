'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollExperience() {
  const mountRef    = useRef(null)
  const canvasRef   = useRef(null)
  const sceneRef    = useRef(null)
  const [progress, setProgress] = useState(0)
  const [done, setDone]         = useState(false)
  const [label, setLabel]       = useState('INITIALIZING')

  const labels = [
    'INITIALIZING',
    'FULL STACK DEVELOPER',
    'MERN STACK ENGINEER',
    'CLOUD ENTHUSIAST',
    'READY TO SHIP',
  ]

  useEffect(() => {
    let THREE, renderer, scene, camera
    let animId, scrollHandler
    let particles, ring1, ring2, ring3, coreSphere
    let mounted = true

    const SCROLL_HEIGHT = window.innerHeight * 6

    // --- inject placeholder so page has scroll room ---
    const placeholder = document.getElementById('scroll-exp-placeholder')
    if (placeholder) placeholder.style.height = SCROLL_HEIGHT + 'px'

    const init = async () => {
      THREE = (await import('three')).default || await import('three')

      if (!mounted) return

      const W = window.innerWidth
      const H = window.innerHeight

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true })
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)

      // Scene + Camera
      scene    = new THREE.Scene()
      camera   = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
      camera.position.set(0, 0, 8)

      // ---- PARTICLES ----
      const pCount   = 1800
      const pPositions = new Float32Array(pCount * 3)
      const pColors    = new Float32Array(pCount * 3)
      for (let i = 0; i < pCount; i++) {
        const r = 6 + Math.random() * 10
        const theta = Math.random() * Math.PI * 2
        const phi   = Math.acos(2 * Math.random() - 1)
        pPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
        pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        pPositions[i * 3 + 2] = r * Math.cos(phi)
        // lime to white gradient
        const t = Math.random()
        pColors[i * 3]     = 0.67 + t * 0.33
        pColors[i * 3 + 1] = 1.0
        pColors[i * 3 + 2] = 0.27 + t * 0.73
      }
      const pGeo = new THREE.BufferGeometry()
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
      pGeo.setAttribute('color',    new THREE.BufferAttribute(pColors, 3))
      const pMat = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.7 })
      particles = new THREE.Points(pGeo, pMat)
      scene.add(particles)

      // ---- CORE SPHERE ----
      const coreGeo = new THREE.IcosahedronGeometry(1.2, 1)
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xAAFF45, wireframe: true, transparent: true, opacity: 0.35,
      })
      coreSphere = new THREE.Mesh(coreGeo, coreMat)
      scene.add(coreSphere)

      // ---- RINGS ----
      const makeRing = (r, tube, color, rotX, rotZ) => {
        const geo = new THREE.TorusGeometry(r, tube, 2, 80)
        const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, wireframe: false })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.rotation.x = rotX
        mesh.rotation.z = rotZ
        scene.add(mesh)
        return mesh
      }
      ring1 = makeRing(2.8, 0.012, 0xAAFF45, Math.PI / 2, 0)
      ring2 = makeRing(3.4, 0.010, 0x88EE33, Math.PI / 3, Math.PI / 5)
      ring3 = makeRing(4.0, 0.008, 0x66CC22, Math.PI / 6, Math.PI / 3)

      // ---- FLOATING DOTS (inner) ----
      const iCount = 60
      const iPositions = new Float32Array(iCount * 3)
      for (let i = 0; i < iCount; i++) {
        const angle = (i / iCount) * Math.PI * 2
        const radius = 1.8 + Math.sin(i * 2.3) * 0.6
        iPositions[i * 3]     = Math.cos(angle) * radius
        iPositions[i * 3 + 1] = Math.sin(i * 0.8) * 0.8
        iPositions[i * 3 + 2] = Math.sin(angle) * radius
      }
      const iGeo = new THREE.BufferGeometry()
      iGeo.setAttribute('position', new THREE.BufferAttribute(iPositions, 3))
      const iMat = new THREE.PointsMaterial({ size: 0.08, color: 0xCCFF77, transparent: true, opacity: 0.9 })
      const innerDots = new THREE.Points(iGeo, iMat)
      scene.add(innerDots)

      sceneRef.current = { THREE, renderer, scene, camera, particles, ring1, ring2, ring3, coreSphere, innerDots }

      // ---- SCROLL HANDLER ----
      const maxScroll = SCROLL_HEIGHT - window.innerHeight
      scrollHandler = () => {
        if (!mounted) return
        const scrollY   = window.scrollY
        const pinTop    = mountRef.current ? mountRef.current.offsetTop : 0
        const relScroll = Math.max(0, scrollY - pinTop)
        const pct       = Math.min(relScroll / maxScroll, 1)
        setProgress(pct)

        // label changes
        if      (pct < 0.15) setLabel(labels[0])
        else if (pct < 0.35) setLabel(labels[1])
        else if (pct < 0.55) setLabel(labels[2])
        else if (pct < 0.75) setLabel(labels[3])
        else                  setLabel(labels[4])

        if (pct >= 0.99 && !done) setDone(true)
      }
      window.addEventListener('scroll', scrollHandler, { passive: true })

      // ---- ANIMATE ----
      let t = 0
      const animate = () => {
        if (!mounted) return
        animId = requestAnimationFrame(animate)
        t += 0.008

        const pct = progress

        if (particles)  { particles.rotation.y  = t * 0.15; particles.rotation.x = t * 0.05 }
        if (coreSphere) { coreSphere.rotation.y  = t * 0.4;  coreSphere.rotation.x = t * 0.25 }
        if (ring1)      { ring1.rotation.z = t * 0.3 }
        if (ring2)      { ring2.rotation.x = t * 0.2; ring2.rotation.z = t * 0.15 }
        if (ring3)      { ring3.rotation.y = t * 0.25 }
        if (sceneRef.current?.innerDots) {
          sceneRef.current.innerDots.rotation.y = t * 0.5
        }

        // Camera zoom driven by scroll
        if (camera) {
          const scrollY   = window.scrollY
          const pinTop    = mountRef.current ? mountRef.current.offsetTop : 0
          const relScroll = Math.max(0, scrollY - pinTop)
          const p         = Math.min(relScroll / maxScroll, 1)

          // zoom from 8 → 2 then pull back to 5
          if (p < 0.7) {
            camera.position.z = 8 - p * (8 / 0.7)
          } else {
            camera.position.z = 2 + ((p - 0.7) / 0.3) * 3
          }

          // Core scale: small → big → small
          if (coreSphere) {
            const s = 1 + Math.sin(p * Math.PI) * 1.5
            coreSphere.scale.setScalar(s)
          }
        }

        renderer.render(scene, camera)
      }
      animate()

      // Resize
      const onResize = () => {
        if (!mounted) return
        const W = window.innerWidth
        const H = window.innerHeight
        camera.aspect = W / H
        camera.updateProjectionMatrix()
        renderer.setSize(W, H)
      }
      window.addEventListener('resize', onResize)
    }

    init()

    return () => {
      mounted = false
      cancelAnimationFrame(animId)
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <div ref={mountRef} style={{ position: 'relative' }}>

      {/* Placeholder div gives the page scroll room */}
      <div id="scroll-exp-placeholder" />

      {/* Sticky container — stays on screen while scrolling through placeholder */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#07070F',
        display: done ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        marginTop: '-100vh',
      }}>

        {/* Three.js canvas */}
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

        {/* Overlay gradient bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '200px',
          background: 'linear-gradient(to top, #07070F, transparent)',
          pointerEvents: 'none',
          zIndex: 2,
        }} />

        {/* Center content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          userSelect: 'none',
        }}>

          {/* Big name */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 14vw, 180px)',
            color: '#F0F0F0',
            lineHeight: 0.85,
            letterSpacing: '0.05em',
            marginBottom: '8px',
            opacity: 0.9,
          }}>
            DEV
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 14vw, 180px)',
            color: '#AAFF45',
            lineHeight: 0.85,
            letterSpacing: '0.05em',
            marginBottom: '40px',
          }}>
            PATEL
          </div>

          {/* Animated label */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(11px, 1.5vw, 14px)',
            color: '#AAFF45',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '48px',
            minHeight: '20px',
            animation: 'labelPulse 0.4s ease',
          }}>
            {label}
          </div>

          {/* Progress bar */}
          <div style={{
            width: 'clamp(200px, 30vw, 360px)',
            height: '2px',
            background: 'rgba(255,255,255,0.08)',
            margin: '0 auto 16px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: (progress * 100) + '%',
              background: 'linear-gradient(90deg, #AAFF45, #C4FF6B)',
              transition: 'width 0.1s linear',
            }} />
          </div>

          {/* Percentage + scroll hint */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.2em',
          }}>
            {progress < 0.99
              ? `SCROLL TO EXPLORE — ${Math.round(progress * 100)}%`
              : 'ENTERING PORTFOLIO...'}
          </div>
        </div>

        {/* Corner coordinates */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'rgba(170,255,69,0.3)',
          letterSpacing: '0.1em',
          zIndex: 3,
        }}>
          43.6532° N, 79.3832° W
        </div>

        <div style={{
          position: 'absolute',
          bottom: '32px',
          right: '40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'rgba(170,255,69,0.3)',
          letterSpacing: '0.1em',
          zIndex: 3,
        }}>
          TORONTO · CANADA
        </div>

        {/* Top corners */}
        <div style={{
          position: 'absolute',
          top: '32px',
          left: '40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: '0.1em',
          zIndex: 3,
        }}>
          devpatel.dev
        </div>

        <div style={{
          position: 'absolute',
          top: '32px',
          right: '40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: '0.1em',
          zIndex: 3,
        }}>
          FULL STACK DEVELOPER
        </div>

        {/* Scroll arrow */}
        {progress < 0.05 && (
          <div style={{
            position: 'absolute',
            bottom: '72px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            zIndex: 3,
            animation: 'bounceDown 2s ease-in-out infinite',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
              SCROLL
            </span>
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(170,255,69,0.5), transparent)' }} />
          </div>
        )}

      </div>

      <style>{`
        @keyframes labelPulse {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  )
}