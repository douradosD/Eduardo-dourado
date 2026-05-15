import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MoonStar, SunMedium, X } from 'lucide-react'

import { useUiStore } from '@/hooks/useUiStore'
import { cn } from '@/lib/utils'
import { navigationItems } from '@/utils/portfolioData'

type HeaderProps = {
  activeSection: string
  isDark: boolean
  onToggleTheme: () => void
}

export function Header({ activeSection, isDark, onToggleTheme }: HeaderProps) {
  const { isMenuOpen, toggleMenu, closeMenu } = useUiStore()

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-slate-950/55 px-5 py-3 shadow-[0_0_40px_rgba(7,11,26,0.45)] backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3" aria-label="Ir para o inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/50 bg-brand-500/15 font-display text-sm font-semibold uppercase tracking-[0.35em] text-brand-100">
            ED
          </span>
          <div className="hidden sm:block">
            <p className="font-display text-sm uppercase tracking-[0.35em] text-slate-100">Eduardo Dourado</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Full Stack Developer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] transition duration-300',
                  isActive
                    ? 'bg-brand-500/20 text-brand-100 shadow-[0_0_25px_rgba(157,78,221,0.24)]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-100 transition hover:border-brand-300/60 hover:text-brand-100"
            aria-label="Alternar tema"
          >
            {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <a href="#contato" className="button-primary hidden sm:inline-flex">
            Entrar em Contato
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-100 transition hover:border-brand-300/60 lg:hidden"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="mx-auto mt-4 max-w-7xl rounded-[2rem] border border-white/12 bg-slate-950/90 p-5 shadow-[0_0_40px_rgba(4,8,20,0.5)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <nav className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium uppercase tracking-[0.22em] text-slate-100 transition hover:border-brand-300/40 hover:bg-brand-500/10"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contato" onClick={closeMenu} className="button-primary justify-center">
                Entrar em Contato
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
