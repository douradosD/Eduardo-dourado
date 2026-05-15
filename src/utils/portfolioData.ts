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
  { label: 'Formacao', href: '#formacao' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export const heroBadges = [
  'Interfaces responsivas de alto impacto',
  'APIs e backend com Node.js',
  'Experiencias completas e escalaveis',
]

export const heroStats = [
  { value: '11+', label: 'Tecnologias em destaque' },
  { value: '100%', label: 'Foco em performance e UX' },
  { value: '24/7', label: 'Evolucao e aprendizado continuo' },
]

export const aboutHighlights: HighlightItem[] = [
  {
    title: 'Transicao com estrategia',
    description:
      'Minha jornada na tecnologia e guiada por disciplina, consistencia e foco em construir valor real com software.',
    icon: Rocket,
  },
  {
    title: 'Visao full stack',
    description:
      'Conecto experiencia visual, regras de negocio, integracao de APIs e organizacao de arquitetura em produtos profissionais.',
    icon: Blocks,
  },
  {
    title: 'Aprendizado constante',
    description:
      'Busco evoluir continuamente em frontend, backend, boas praticas, performance e desenvolvimento moderno.',
    icon: Bot,
  },
]

export const servicePillars: HighlightItem[] = [
  {
    title: 'Frontend moderno',
    description: 'Landing pages, paineis e interfaces com design refinado, responsivo e focado em conversao.',
    icon: LayoutTemplate,
  },
  {
    title: 'Backend e APIs',
    description: 'Estruturas com Node.js, integracoes, regras de negocio e organizacao clara para crescimento.',
    icon: ServerCog,
  },
  {
    title: 'Qualidade e entrega',
    description: 'Codigo limpo, componentizacao, manutencao facilitada e experiencia fluida do inicio ao deploy.',
    icon: ShieldCheck,
  },
]

export const technologies: TechnologyItem[] = [
  { name: 'HTML5', level: 92, summary: 'Estrutura semantica e acessivel para interfaces modernas.', category: 'Frontend', icon: FileCode2 },
  { name: 'CSS3', level: 90, summary: 'Layouts fluidos, animacoes e acabamento visual premium.', category: 'Frontend', icon: Wind },
  { name: 'JavaScript', level: 88, summary: 'Interatividade, consumo de APIs e logica para web apps.', category: 'Frontend', icon: Braces },
  { name: 'TypeScript', level: 82, summary: 'Escalabilidade, previsibilidade e qualidade de codigo.', category: 'Frontend', icon: BadgeCheck },
  { name: 'React JS', level: 90, summary: 'Componentizacao, performance e interfaces reutilizaveis.', category: 'Frontend', icon: Atom },
  { name: 'Tailwind CSS', level: 88, summary: 'Design system rapido com alta consistencia visual.', category: 'Frontend', icon: Wind },
  { name: 'Python', level: 76, summary: 'Automacoes, fundamentos solidos e evolucao continua.', category: 'Backend', icon: Bot },
  { name: 'Node.js', level: 84, summary: 'APIs, servicos e aplicacoes full stack conectadas.', category: 'Backend', icon: ServerCog },
  { name: 'MySQL', level: 78, summary: 'Modelagem de dados e persistencia para projetos reais.', category: 'Banco de dados', icon: Database },
  { name: 'Git', level: 85, summary: 'Versionamento seguro, colaboracao e historico confiavel.', category: 'Ferramentas', icon: GitBranch },
  { name: 'GitHub', level: 87, summary: 'Repositorios, portfolio publico e fluxo de entrega.', category: 'Ferramentas', icon: Github },
]

export const educationItems: EducationItem[] = [
  {
    title: 'Curso de Frontend',
    institution: 'DNC',
    period: 'Formacao concluida',
    description: 'Base pratica para construcao de interfaces modernas, responsivas e com foco em experiencia do usuario.',
  },
  {
    title: 'Curso de Python',
    institution: 'Open Standard',
    period: 'Formacao concluida',
    description: 'Fortalecimento da logica de programacao e fundamentos para automacoes e desenvolvimento backend.',
  },
  {
    title: 'Engenharia de Software',
    institution: 'Graduacao em andamento',
    period: 'Cursando',
    description: 'Aprofundamento em arquitetura, processos, qualidade, colaboracao e construcao de software profissional.',
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
  'Construindo experiencias digitais modernas, performaticas e prontas para gerar oportunidades reais.'
