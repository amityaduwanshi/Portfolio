'use client'

import { motion as m, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-in' | 'scale'
  delay?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    'slide-up': {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    'slide-down': {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    'slide-in': {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  }

  return (
    <m.div
      ref={ref}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].initial}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </m.div>
  )
} 