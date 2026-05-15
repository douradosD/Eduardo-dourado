import { AnimatePresence, motion } from 'framer-motion'

type LoadingScreenProps = {
  isVisible: boolean
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#040610]"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          <div className="space-y-6 text-center">
            <motion.div
              className="font-display text-5xl font-semibold uppercase tracking-[0.5em] text-white"
              initial={{ letterSpacing: '0.2em', opacity: 0.2 }}
              animate={{ letterSpacing: ['0.2em', '0.5em', '0.28em'], opacity: [0.2, 1, 0.9] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            >
              ED
            </motion.div>
            <div className="mx-auto h-1.5 w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-400 via-accent-400 to-brand-200"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              />
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Inicializando experiencia premium</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
