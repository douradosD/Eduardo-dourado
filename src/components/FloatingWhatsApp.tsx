import { MessageCircleMore } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5586995953738?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20conversar."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.35)] transition hover:scale-105"
      aria-label="Conversar pelo WhatsApp"
    >
      <MessageCircleMore size={24} />
    </a>
  )
}
