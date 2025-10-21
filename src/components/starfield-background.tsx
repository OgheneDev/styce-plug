"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  pulsePhase: number
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const starsRef = useRef<Star[]>([])
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 7500)

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.2 + 0.4,
          speed: Math.random() * 0.6 + 0.15,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
      starsRef.current = stars
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const numParticles = 18
      const colors = [
        "rgba(251, 113, 133, ", // rose-400
        "rgba(251, 146, 60, ",  // orange-400
        "rgba(163, 230, 53, ",  // lime-400
      ]

      for (let i = 0; i < numParticles; i++) {
        const colorIndex = i % colors.length
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1.5,
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          opacity: Math.random() * 0.6 + 0.3,
          color: colors[colorIndex],
        })
      }
      particlesRef.current = particles
    }

    const drawStars = (time: number) => {
  starsRef.current.forEach((star) => {
    const pulse = 0.4 + 0.6 * Math.sin(time * 0.001 + star.pulsePhase)
    const opacity = 0.3 + pulse * 0.5

    ctx.beginPath()
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    
    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
    gradient.addColorStop(0.5, `rgba(251, 113, 133, ${opacity * 0.6})`)
    gradient.addColorStop(1, `rgba(251, 113, 133, 0)`)  // Fixed!

    ctx.fillStyle = gradient
    ctx.fill()

    // Subtle color shift
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(251, 113, 133, ${opacity * 0.4})`
    ctx.fill()
  })
}

    const drawParticles = () => {
      particlesRef.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2)
        gradient.addColorStop(0, `${particle.color}${particle.opacity})`)
        gradient.addColorStop(1, `${particle.color}0)`)
        
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    const drawConnections = () => {
      const connectionDistance = 160

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4
            
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `${p1.color}${opacity})`)
            gradient.addColorStop(1, `${p2.color}${opacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        }
      }
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < -50 || particle.x > canvas.width + 50) particle.speedX *= -1
        if (particle.y < -50 || particle.y > canvas.height + 50) particle.speedY *= -1

        particle.x = Math.max(-50, Math.min(canvas.width + 50, particle.x))
        particle.y = Math.max(-50, Math.min(canvas.height + 50, particle.y))
      })
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawStars(time)
      updateParticles()
      drawParticles()
      drawConnections()

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    createParticles()
    animate(0)

    const handleResize = () => {
      resizeCanvas()
      createStars()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{ background: "transparent" }}
      />
      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #0a0a0f 0%, #1a0b1e 35%, #0f1a1a 70%, #1a0f0f 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          color: #f3f4f6;
          margin: 0;
          padding: 0;
        }
        
        /* Subtle animated gradient overlay */
        body::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(251, 113, 133, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(163, 230, 53, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: -9;
          animation: breathe 20s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        /* Optional: Add subtle noise texture */
        body::after {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.03"/></svg>');
          pointer-events: none;
          z-index: -8;
          mix-blend-mode: overlay;
        }
      `}</style>
    </>
  )
}