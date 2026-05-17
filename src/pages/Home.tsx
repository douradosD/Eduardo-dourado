import { useEffect } from 'react'

import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { CustomCursor } from '@/components/CustomCursor'
import { EducationSection } from '@/components/EducationSection'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TechBackground } from '@/components/TechBackground'
import { TechSection } from '@/components/TechSection'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { useUiStore } from '@/hooks/useUiStore'
import { navigationItems } from '@/utils/portfolioData'

export default function Home() {
  const { isDark, toggleTheme } = useTheme()
  const { isLoading, setLoading, closeMenu } = useUiStore()
  const activeSection = useActiveSection(navigationItems.map((item) => item.href.replace('#', '')))

  useEffect(() => {
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), 1500)

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        'content',
        'Portfólio futurista de Eduardo Dourado, Desenvolvedor Full Stack com foco em interfaces modernas, APIs, backend em Node.js e projetos profissionais.',
      )
    }

    document.title = 'Eduardo Dourado | Desenvolvedor Full Stack'

    return () => {
      window.clearTimeout(timer)
    }
  }, [setLoading])

  useEffect(() => {
    closeMenu()
  }, [activeSection, closeMenu])

  return (
    <div className="min-h-screen bg-background text-slate-100">
      <TechBackground />
      <LoadingScreen isVisible={isLoading} />
      <CustomCursor />
      <Header activeSection={activeSection} isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
