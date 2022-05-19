import React from 'react'
import { Button } from './components/Button'

import { useTheme } from './features/theme'

import { usePosts } from './features/posts/usePosts'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { posts } = usePosts()
  console.log(posts)
  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
    </div>
  )
}

export default App
