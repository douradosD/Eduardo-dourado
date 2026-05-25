import { Instagram, Mail, MessageCircleMore } from 'lucide-react'
import { contact } from '../data/siteContent'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="section-shell pb-10">
      <div className="glass-panel flex flex-col gap-6 rounded-[2rem] border border-white/10 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-grotesk text-sm font-bold uppercase tracking-[0.3em] text-white">Sync Produtora</p>
          <p className="mt-2 max-w-lg text-sm leading-7 text-white/55">
            Producao audiovisual premium para empresas locais que querem parecer maiores, vender melhor e marcar presenca com imagem forte.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2.5 text-sm">
            <Instagram className="mr-2 h-4 w-4" />
            Instagram
          </a>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2.5 text-sm">
            <MessageCircleMore className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
          <a href={contact.emailUrl} className="button-secondary px-4 py-2.5 text-sm">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-white/38">
        Copyright {currentYear} Sync Produtora. Todos os direitos reservados.
      </p>
    </footer>
  )
}
