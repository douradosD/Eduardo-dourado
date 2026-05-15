import { useEffect, useState } from 'react'

import { fetchGitHubProjects, type PortfolioProject } from '@/services/github'

type ProjectsState = {
  projects: PortfolioProject[]
  loading: boolean
  error: string | null
}

export function useGitHubProjects(username: string, limit = 6) {
  const [state, setState] = useState<ProjectsState>({
    projects: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let active = true

    async function loadProjects() {
      setState((current) => ({ ...current, loading: true, error: null }))

      try {
        const projects = await fetchGitHubProjects(username, limit)

        if (!active) {
          return
        }

        setState({
          projects,
          loading: false,
          error: null,
        })
      } catch {
        if (!active) {
          return
        }

        setState({
          projects: [],
          loading: false,
          error: 'Nao foi possivel carregar os repositorios agora. Tente novamente em instantes.',
        })
      }
    }

    loadProjects()

    return () => {
      active = false
    }
  }, [limit, username])

  return state
}
