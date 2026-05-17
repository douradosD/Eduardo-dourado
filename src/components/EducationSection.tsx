import { GraduationCap } from 'lucide-react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { educationItems } from '@/utils/portfolioData'

export function EducationSection() {
  return (
    <section id="formacao" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Formação"
          title="Base acadêmica e evolução prática em tecnologia"
          description="Minha formação reforça a construção de uma carreira técnica consistente, com aplicação prática e foco em entregas cada vez mais profissionais."
        />
      </Reveal>

      <div className="relative mt-12 space-y-6 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-brand-300/80 before:via-brand-500/20 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
        {educationItems.map((item, index) => (
          <Reveal key={item.title} delay={0.12 + index * 0.08}>
            <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
              <div className={index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}>
                <div className="panel rounded-[1.8rem] p-6">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {item.period}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-brand-100">{item.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-5 top-8 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-brand-300/40 bg-brand-500/15 text-brand-100 shadow-[0_0_25px_rgba(157,78,221,0.28)] md:left-1/2">
                <GraduationCap size={18} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
