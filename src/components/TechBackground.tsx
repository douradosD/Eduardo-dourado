import { motion } from 'framer-motion'

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: 6 + ((index * 7) % 88),
  top: 8 + ((index * 11) % 78),
  duration: 8 + (index % 5),
  delay: index * 0.25,
  size: 8 + (index % 4) * 4,
}))

export function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(157,78,221,0.24),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,138,76,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(62,22,114,0.45),transparent_34%)]" />
      <div className="grid-background absolute inset-0 opacity-60" />
      <div className="noise-layer absolute inset-0 opacity-20" />
      <motion.div
        className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
        animate={{ x: [0, 40, -10, 0], y: [0, -30, 25, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-[-7rem] h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
        animate={{ x: [0, -30, 15, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/40 shadow-[0_0_18px_rgba(255,255,255,0.4)]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.12, 0.7, 0.12],
            y: [0, -30, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
