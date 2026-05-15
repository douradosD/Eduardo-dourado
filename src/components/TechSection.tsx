import { motion } from 'framer-motion'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { technologies } from '@/utils/portfolioData'

export function TechSection() {
  return (
    <section id="tecnologias" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Tecnologias"
          title="Stack orientada a interfaces premium e solucoes completas"
          description="Cada tecnologia entra como parte de uma entrega maior: interfaces modernas, integracoes solidas, manutencao clara e experiencia de usuario refinada."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((tech, index) => (
          <Reveal key={tech.name} delay={0.08 + index * 0.04}>
            <div className="panel group h-full rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/35">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {tech.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">{tech.name}</h3>
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-500/10 text-brand-100 shadow-[0_0_25px_rgba(157,78,221,0.2)] transition group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(157,78,221,0.35)]">
                  <tech.icon size={24} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{tech.summary}</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
                  <span>Profundidade</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="progress-track">
                  <motion.span
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.1 + index * 0.04 }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
