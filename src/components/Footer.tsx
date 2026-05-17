import { footerMessage } from '@/utils/portfolioData'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p>{footerMessage}</p>
        <p>(c) {new Date().getFullYear()} Eduardo Dourado. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
