import React from 'react'
import { Button } from './components/Button'
import { useTheme } from './features/theme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App
