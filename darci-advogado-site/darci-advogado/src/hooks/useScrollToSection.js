import { useCallback } from 'react'

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const headerHeight = 80 // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return scrollToSection
}

