import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseout', handleLeave)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-8 w-8 rounded-full border border-brand-300/50 bg-brand-400/10 shadow-[0_0_30px_rgba(157,78,221,0.35)] lg:block"
      animate={{
        opacity: visible ? 1 : 0,
        x: position.x - 16,
        y: position.y - 16,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.5 }}
    />
  )
}
