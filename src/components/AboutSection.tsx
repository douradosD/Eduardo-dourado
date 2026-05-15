import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { aboutHighlights, servicePillars } from '@/utils/portfolioData'

export function AboutSection() {
  return (
    <section id="sobre" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre"
            title="Trajetoria guiada por evolucao continua"
            description="Minha caminhada na programacao e marcada por curiosidade, disciplina e vontade real de construir produtos que unam estetica, desempenho e resultado de negocio."
          />
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.1}>
            <div className="panel space-y-5 rounded-[2rem] p-8">
              <p className="text-base leading-8 text-slate-300">
                Venho consolidando minha transicao e crescimento na area de tecnologia com foco em desenvolvimento frontend e backend,
                transformando estudo continuo em aplicacoes modernas, intuitivas e escalaveis.
              </p>
              <p className="text-base leading-8 text-slate-300">
                Meu objetivo e criar experiencias digitais profissionais, com interfaces impactantes, codigo bem estruturado,
                integracao entre camadas e atencao aos detalhes que fazem um produto se destacar no mercado.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} delay={0.16 + index * 0.08}>
                <div className="panel h-full rounded-[1.8rem] p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-100">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {servicePillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.2 + index * 0.08}>
            <div className="panel h-full rounded-[1.8rem] p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-200">
                <pillar.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
