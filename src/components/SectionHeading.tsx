type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-300">
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2 className="font-display text-4xl font-semibold uppercase tracking-[0.08em] text-slate-50 sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </div>
  )
}
