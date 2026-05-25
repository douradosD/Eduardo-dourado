import { ArrowUpRight, MessageCircleMore } from 'lucide-react'
import { motion } from 'framer-motion'
import { contact } from '../data/siteContent'

export default function FinalCTA() {
  return (
    <section id="contato" className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="glass-panel relative overflow-hidden rounded-[2.6rem] border border-white/10 px-6 py-12 sm:px-10 sm:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(91,140,255,0.25),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(124,58,237,0.22),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="section-tag">CTA final</span>
          <h2 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-[4rem]">
            Sua marca pode parecer muito mais forte no proximo video.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Se voce precisa de conteudo com cara de campanha premium, a Sync entra com direcao, producao e acabamento cinematografico para gerar autoridade e conversao.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="button-primary px-8 py-4 text-base">
              <MessageCircleMore className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a href="#portfolio" className="button-secondary px-8 py-4 text-base">
              Ver portfolio completo
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
