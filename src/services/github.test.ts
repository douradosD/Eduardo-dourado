import { describe, expect, it } from 'vitest'

import { mapGitHubRepoToProject, type GitHubRepo } from './github'

describe('mapGitHubRepoToProject', () => {
  it('normaliza tecnologias e preserva links disponiveis', () => {
    const repo: GitHubRepo = {
      id: 1,
      name: 'portfolio-react',
      description: 'Portfolio moderno',
      html_url: 'https://github.com/douradosD/portfolio-react',
      homepage: 'https://portfolio.dev',
      topics: ['react', 'tailwindcss', 'nodejs'],
      language: 'TypeScript',
      stargazers_count: 4,
      updated_at: '2026-05-14T12:00:00Z',
      fork: false,
    }

    const project = mapGitHubRepoToProject(repo)

    expect(project.technologies).toEqual(['TypeScript', 'React', 'Tailwind CSS', 'Node.js'])
    expect(project.demoUrl).toBe('https://portfolio.dev')
    expect(project.githubUrl).toBe(repo.html_url)
  })

  it('cria fallback para descricao e tecnologias ausentes', () => {
    const repo: GitHubRepo = {
      id: 2,
      name: 'api-node',
      description: null,
      html_url: 'https://github.com/douradosD/api-node',
      homepage: null,
      topics: [],
      language: null,
      stargazers_count: 0,
      updated_at: '2026-05-14T12:00:00Z',
      fork: false,
    }

    const project = mapGitHubRepoToProject(repo)

    expect(project.description).toContain('GitHub')
    expect(project.technologies).toEqual(['Codigo aberto'])
    expect(project.demoUrl).toBeNull()
  })
})
