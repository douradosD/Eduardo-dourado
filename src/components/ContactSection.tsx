import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, Send } from 'lucide-react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { contactChannels } from '@/utils/portfolioData'

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [feedback, setFeedback] = useState('')

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent('Olá, Eduardo! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.')
    return `https://wa.me/5586995953738?text=${text}`
  }, [])

  function handleChange<K extends keyof ContactFormState>(field: K, value: ContactFormState[K]) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback('Preencha nome, e-mail e mensagem para enviar o contato.')
      return
    }

    const subject = encodeURIComponent(form.subject.trim() || `Contato via portfólio - ${form.name}`)
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`)

    window.location.href = `mailto:douradosoldado@gmail.com?subject=${subject}&body=${body}`
    setFeedback('Seu aplicativo de e-mail foi aberto com a mensagem pronta para envio.')
    setForm(initialFormState)
  }

  return (
    <section id="contato" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos transformar ideias em experiências digitais profissionais"
            description="Estou disponível para projetos freelance, colaborações e oportunidades em tecnologia. Escolha o canal ideal ou envie uma mensagem pelo formulário."
          />
          <div className="mt-8 grid gap-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                className="panel flex items-center gap-4 rounded-[1.6rem] p-5 transition hover:border-brand-300/35"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-100">
                  <channel.icon size={20} />
                </span>
                <span>
                  <strong className="block font-display text-lg uppercase tracking-[0.08em] text-white">{channel.label}</strong>
                  <span className="text-sm text-slate-300">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="panel rounded-[2rem] p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-3 text-sm text-slate-300">
                  <span>Nome</span>
                  <input
                    value={form.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className="input-shell"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="space-y-3 text-sm text-slate-300">
                  <span>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className="input-shell"
                    placeholder="você@email.com"
                  />
                </label>
              </div>
              <label className="space-y-3 text-sm text-slate-300">
                <span>Assunto</span>
                <input
                  value={form.subject}
                  onChange={(event) => handleChange('subject', event.target.value)}
                  className="input-shell"
                  placeholder="Fale sobre sua ideia ou oportunidade"
                />
              </label>
              <label className="space-y-3 text-sm text-slate-300">
                <span>Mensagem</span>
                <textarea
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="input-shell min-h-40 resize-none"
                  placeholder="Conte mais sobre o projeto, vaga ou colaboração."
                />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button type="submit" className="button-primary">
                  <Send size={18} />
                  Enviar mensagem
                </button>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="button-secondary">
                  Chamar no WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>
              <p className="min-h-6 text-sm text-brand-100">{feedback}</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
