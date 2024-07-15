import React, {createContext, useState} from 'react'

const ThemeContext = createContext()

const ThemeProvider = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((current) => (current == 'light' ? 'dark' : 'light'))
    }

  return (
    <div>ThemeProvider</div>
  )
}

export {ThemeProvider, ThemeContext}