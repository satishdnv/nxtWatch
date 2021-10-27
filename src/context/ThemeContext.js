import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheTheme: () => {},
})

export default ThemeContext
