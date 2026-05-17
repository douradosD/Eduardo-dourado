import axios from 'axios'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
  archived?: boolean
}

export interface PortfolioProject {
  id: number
  name: string
  description: string
  githubUrl: string
  demoUrl: string | null
  technologies: string[]
  stars: number
  updatedAt: string
}

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
  },
})

const technologyAliasMap: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  reactjs: 'React',
  tailwind: 'Tailwind CSS',
  tailwindcss: 'Tailwind CSS',
  node: 'Node.js',
  nodejs: 'Node.js',
  mysql: 'MySQL',
  html: 'HTML5',
  html5: 'HTML5',
  css: 'CSS3',
  css3: 'CSS3',
  python: 'Python',
  vite: 'Vite',
}

function normalizeLabel(value: string) {
  const normalized = value.trim().toLowerCase()
  return technologyAliasMap[normalized] ?? value.trim()
}

function uniqueLabels(values: Array<string | null | undefined>) {
  return Array.from(
    new Set(
      values
        .filter((value): value is string => Boolean(value && value.trim()))
        .map((value) => normalizeLabel(value)),
    ),
  )
}

export function mapGitHubRepoToProject(repo: GitHubRepo): PortfolioProject {
  const technologies = uniqueLabels([repo.language, ...repo.topics]).slice(0, 5)

  return {
    id: repo.id,
    name: repo.name,
    description:
      repo.description?.trim() || 'Projeto publicado no GitHub com foco em prática, evolução técnica e entrega funcional.',
    githubUrl: repo.html_url,
    demoUrl: repo.homepage?.trim() ? repo.homepage : null,
    technologies: technologies.length > 0 ? technologies : ['Código aberto'],
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
  }
}

export async function fetchGitHubProjects(username: string, limit = 6) {
  const response = await githubApi.get<GitHubRepo[]>(`/users/${username}/repos`, {
    params: {
      per_page: 100,
      sort: 'updated',
      direction: 'desc',
    },
  })

  return response.data
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((first, second) => new Date(second.updated_at).getTime() - new Date(first.updated_at).getTime())
    .slice(0, limit)
    .map(mapGitHubRepoToProject)
}
