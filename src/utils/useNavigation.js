import { useCallback } from 'react'

const useNavigation = () => {
  const navigateTo = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return navigateTo
}

export default useNavigation
