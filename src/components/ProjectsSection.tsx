import { ExternalLink, Github, LoaderCircle, Sparkles, Star } from 'lucide-react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { useGitHubProjects } from '@/hooks/useGitHubProjects'
import { githubUsername } from '@/utils/portfolioData'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

export function ProjectsSection() {
  const { projects, loading, error } = useGitHubProjects(githubUsername)

  return (
    <section id="projetos" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Projetos"
          title="Repositórios dinâmicos conectados ao GitHub"
          description="A seção abaixo é alimentada automaticamente pela API do GitHub para manter o portfólio vivo, atualizado e alinhado com a evolução real dos projetos."
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center gap-3 rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
        <Sparkles size={16} className="text-brand-100" />
        <span>Usuário monitorado:</span>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand-100 transition hover:text-white"
        >
          @{githubUsername}
        </a>
      </div>

      {error ? (
        <div className="panel mt-10 rounded-[2rem] p-8 text-slate-200">{error}</div>
      ) : null}

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="panel animate-pulse rounded-[1.8rem] p-6">
                <div className="h-4 w-24 rounded-full bg-white/10" />
                <div className="mt-5 h-8 w-2/3 rounded-full bg-white/10" />
                <div className="mt-4 space-y-3">
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />
                  <div className="h-3 w-4/6 rounded-full bg-white/10" />
                </div>
              </div>
            ))
          : projects.map((project, index) => (
              <Reveal key={project.id} delay={0.08 + index * 0.05}>
                <article className="panel group flex h-full flex-col rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/35">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Atualizado em {formatDate(project.updatedAt)}
                    </span>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                      <Star size={14} className="text-accent-300" />
                      {project.stars}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">{project.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="rounded-full border border-brand-300/20 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-brand-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                      <Github size={18} />
                      GitHub
                    </a>
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button-primary">
                        <ExternalLink size={18} />
                        Ver Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
                        <LoaderCircle size={18} />
                        Demo em configuração
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
      </div>
    </section>
  )
}
