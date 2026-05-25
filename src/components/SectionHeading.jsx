import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-2xl ${alignment}`}
    >
      <span className="section-tag">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.8rem]">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">{description}</p>
    </motion.div>
  )
}
