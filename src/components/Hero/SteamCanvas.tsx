'use client'

import React from 'react'

type Wisp = {
  x: number
  y: number
  radius: number
  speed: number
  sway: number
  phase: number
  life: number
  maxLife: number
}

const WISP_COLOR = '231, 199, 156'

function createWisp(width: number, height: number, fresh: boolean): Wisp {
  const maxLife = 420 + Math.random() * 380

  return {
    x: width * (0.38 + Math.random() * 0.5),
    y: fresh ? height * (0.55 + Math.random() * 0.5) : height * (0.3 + Math.random() * 0.7),
    radius: width * (0.03 + Math.random() * 0.045),
    speed: 0.22 + Math.random() * 0.26,
    sway: 12 + Math.random() * 26,
    phase: Math.random() * Math.PI * 2,
    life: fresh ? 0 : Math.random() * maxLife,
    maxLife,
  }
}

function mountSteam(canvas: HTMLCanvasElement | null) {
  if (!canvas) return

  const context = canvas.getContext('2d')
  if (!context) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let width = 0
  let height = 0
  let wisps: Wisp[] = []
  let frame = 0
  let running = false
  let onScreen = true

  const draw = () => {
    context.clearRect(0, 0, width, height)
    context.globalCompositeOperation = 'lighter'

    for (const wisp of wisps) {
      const progress = wisp.life / wisp.maxLife
      const fade = Math.sin(progress * Math.PI)
      const radius = wisp.radius * (0.7 + progress * 1.3)
      const x = wisp.x + Math.sin(wisp.phase + progress * 5) * wisp.sway
      const y = wisp.y - progress * height * 0.75

      const gradient = context.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, `rgba(${WISP_COLOR}, ${0.15 * fade})`)
      gradient.addColorStop(1, `rgba(${WISP_COLOR}, 0)`)

      context.fillStyle = gradient
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    }

    context.globalCompositeOperation = 'source-over'
  }

  const step = () => {
    for (const wisp of wisps) {
      wisp.life += wisp.speed

      if (wisp.life >= wisp.maxLife) {
        Object.assign(wisp, createWisp(width, height, true))
      }
    }

    draw()
    frame = requestAnimationFrame(step)
  }

  const sync = () => {
    const shouldRun = !reduced && onScreen && !document.hidden

    if (shouldRun && !running) {
      running = true
      frame = requestAnimationFrame(step)
    } else if (!shouldRun && running) {
      running = false
      cancelAnimationFrame(frame)
    }
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    width = rect.width
    height = rect.height
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    context.setTransform(dpr, 0, 0, dpr, 0, 0)

    const count = width < 640 ? 12 : 22
    wisps = Array.from({ length: count }, () => createWisp(width, height, false))
    draw()
  }

  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting
    sync()
  })
  visibilityObserver.observe(canvas)

  document.addEventListener('visibilitychange', sync)

  resize()
  sync()

  return () => {
    cancelAnimationFrame(frame)
    resizeObserver.disconnect()
    visibilityObserver.disconnect()
    document.removeEventListener('visibilitychange', sync)
  }
}

export default function SteamCanvas({ className }: { className?: string }) {
  return <canvas ref={mountSteam} aria-hidden className={className} />
}
