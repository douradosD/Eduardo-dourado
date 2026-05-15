import { motion } from 'framer-motion'
import { ArrowRight, Github, Sparkles } from 'lucide-react'

import { portraitImage } from '@/assets/portfolioAssets'
import { heroBadges, heroStats } from '@/utils/portfolioData'

export function HeroSection() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-32">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-10">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-brand-300/20 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={16} />
            Disponivel para projetos freelance e oportunidades tech
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              className="font-display text-5xl font-semibold uppercase leading-none tracking-[0.06em] text-white sm:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Eduardo <span className="text-gradient">Dourado</span>
            </motion.h1>
            <motion.p
              className="animated-sheen inline-flex rounded-full border border-white/12 bg-white/5 px-5 py-3 font-display text-lg uppercase tracking-[0.38em] text-slate-100 sm:text-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              Desenvolvedor Full Stack
            </motion.p>
            <motion.p
              className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              Desenvolvo experiencias web modernas com foco em interfaces responsivas, integracao de APIs,
              backend com Node.js e aplicacoes completas com acabamento profissional, performance e identidade visual forte.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            <a href="#projetos" className="button-primary">
              Ver Projetos
              <ArrowRight size={18} />
            </a>
            <a href="#contato" className="button-secondary">
              Entrar em Contato
            </a>
            <a href="https://github.com/douradosD" target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={18} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[28rem]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-transparent to-accent-500/20 blur-2xl" />
          <div className="panel glow-border relative overflow-hidden rounded-[2rem] p-5">
            <div className="absolute inset-x-6 top-6 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 backdrop-blur">
              <span>Portfolio</span>
              <span className="text-brand-100">Premium Mode</span>
            </div>
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/40 pt-16">
              <img
                src={portraitImage}
                alt="Foto profissional de Eduardo Dourado"
                className="h-[30rem] w-full object-cover object-top"
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {heroBadges.map((badge) => (
                <div key={badge} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
