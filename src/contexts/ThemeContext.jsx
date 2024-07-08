import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTheme } from '../utils/useTheme'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const themeData = useTheme()
  const [dynamicColor, setDynamicColor] = useState(null)

  const setColor = (color) => {
    setDynamicColor(color)
  }

  const resetColor = () => {
    setDynamicColor(null)
  }

  useEffect(() => {
    if (dynamicColor) {
      document.documentElement.style.setProperty(
        '--dynamic-color',
        dynamicColor
      )
    } else {
      document.documentElement.style.removeProperty('--dynamic-color')
    }
  }, [dynamicColor])

  return (
    <ThemeContext.Provider
      value={{
        ...themeData,
        dynamicColor,
        setColor,
        resetColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
