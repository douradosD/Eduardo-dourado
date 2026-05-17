import {
  Atom,
  BadgeCheck,
  Blocks,
  Bot,
  Braces,
  Database,
  FileCode2,
  FolderGit2,
  Github,
  GitBranch,
  LayoutTemplate,
  Mail,
  MessageCircleMore,
  Rocket,
  ServerCog,
  ShieldCheck,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export type HighlightItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type TechnologyItem = {
  name: string
  level: number
  summary: string
  category: string
  icon: LucideIcon
}

export type EducationItem = {
  title: string
  institution: string
  period: string
  description: string
}

export type ContactChannel = {
  label: string
  value: string
  href: string
  icon: LucideIcon
}

export const githubUsername = 'douradosD'

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export const heroBadges = [
  'Interfaces responsivas de alto impacto',
  'APIs e backend com Node.js',
  'Experiências completas e escaláveis',
]

export const heroStats = [
  { value: '11+', label: 'Tecnologias em destaque' },
  { value: '100%', label: 'Foco em performance e UX' },
  { value: '24/7', label: 'Evolução e aprendizado contínuo' },
]

export const aboutHighlights: HighlightItem[] = [
  {
    title: 'Transição com estratégia',
    description:
      'Minha jornada na tecnologia é guiada por disciplina, consistência e foco em construir valor real com software.',
    icon: Rocket,
  },
  {
    title: 'Visão full stack',
    description:
      'Conecto experiência visual, regras de negócio, integração de APIs e organização de arquitetura em produtos profissionais.',
    icon: Blocks,
  },
  {
    title: 'Aprendizado constante',
    description:
      'Busco evoluir continuamente em frontend, backend, boas práticas, performance e desenvolvimento moderno.',
    icon: Bot,
  },
]

export const servicePillars: HighlightItem[] = [
  {
    title: 'Frontend moderno',
    description: 'Landing pages, painéis e interfaces com design refinado, responsivo e focado em conversão.',
    icon: LayoutTemplate,
  },
  {
    title: 'Backend e APIs',
    description: 'Estruturas com Node.js, integrações, regras de negócio e organização clara para crescimento.',
    icon: ServerCog,
  },
  {
    title: 'Qualidade e entrega',
    description: 'Código limpo, componentização, manutenção facilitada e experiência fluida do início ao deploy.',
    icon: ShieldCheck,
  },
]

export const technologies: TechnologyItem[] = [
  { name: 'HTML5', level: 92, summary: 'Estrutura semântica e acessível para interfaces modernas.', category: 'Frontend', icon: FileCode2 },
  { name: 'CSS3', level: 90, summary: 'Layouts fluidos, animações e acabamento visual premium.', category: 'Frontend', icon: Wind },
  { name: 'JavaScript', level: 88, summary: 'Interatividade, consumo de APIs e lógica para web apps.', category: 'Frontend', icon: Braces },
  { name: 'TypeScript', level: 82, summary: 'Escalabilidade, previsibilidade e qualidade de código.', category: 'Frontend', icon: BadgeCheck },
  { name: 'React JS', level: 90, summary: 'Componentização, performance e interfaces reutilizáveis.', category: 'Frontend', icon: Atom },
  { name: 'Tailwind CSS', level: 88, summary: 'Design system rápido com alta consistência visual.', category: 'Frontend', icon: Wind },
  { name: 'Python', level: 76, summary: 'Automações, fundamentos sólidos e evolução contínua.', category: 'Backend', icon: Bot },
  { name: 'Node.js', level: 84, summary: 'APIs, serviços e aplicações full stack conectadas.', category: 'Backend', icon: ServerCog },
  { name: 'MySQL', level: 78, summary: 'Modelagem de dados e persistência para projetos reais.', category: 'Banco de dados', icon: Database },
  { name: 'Git', level: 85, summary: 'Versionamento seguro, colaboração e histórico confiável.', category: 'Ferramentas', icon: GitBranch },
  { name: 'GitHub', level: 87, summary: 'Repositórios, portfólio público e fluxo de entrega.', category: 'Ferramentas', icon: Github },
]

export const educationItems: EducationItem[] = [
  {
    title: 'Curso de Frontend',
    institution: 'DNC',
    period: 'Formação concluída',
    description: 'Base prática para construção de interfaces modernas, responsivas e com foco em experiência do usuário.',
  },
  {
    title: 'Curso de Python',
    institution: 'Open Standard',
    period: 'Formação concluída',
    description: 'Fortalecimento da lógica de programação e fundamentos para automações e desenvolvimento backend.',
  },
  {
    title: 'Engenharia de Software',
    institution: 'Graduação em andamento',
    period: 'Cursando',
    description: 'Aprofundamento em arquitetura, processos, qualidade, colaboração e construção de software profissional.',
  },
]

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: 'douradosoldado@gmail.com',
    href: 'mailto:douradosoldado@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '(86) 99595-3738',
    href: 'https://wa.me/5586995953738',
    icon: MessageCircleMore,
  },
  {
    label: 'LinkedIn',
    value: 'carlos-eduardo-macedo-dourado-40aaa9189',
    href: 'https://www.linkedin.com/in/carlos-eduardo-macedo-dourado-40aaa9189/',
    icon: BadgeCheck,
  },
  {
    label: 'GitHub',
    value: 'github.com/douradosD',
    href: 'https://github.com/douradosD',
    icon: FolderGit2,
  },
]

export const footerMessage =
  'Construindo experiências digitais modernas, performáticas e prontas para gerar oportunidades reais.'
