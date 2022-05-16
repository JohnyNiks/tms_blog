import React, { useState } from 'react'
import { Button } from './components/Button'
import { ReactComponent as BookmarkIcon } from './assets/images/bookmark.svg'
import { ReactComponent as LikeIcon } from './assets/images/like.svg'
import { ReactComponent as DislikeIcon } from './assets/images/dislike.svg'

function App() {
  const [theme, setTheme] = useState('dark')
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      <Button
        text="Secondary"
        className="secondary"
        onClick={handleButtonClick}
      />
      <Button
        text="Secondary2"
        className="secondary2"
        onClick={handleButtonClick}
      />
      <Button
        text="Button with icon"
        className="with-icon"
        icon={<BookmarkIcon />}
        onClick={handleButtonClick}
      />
      <Button
        icon={<DislikeIcon />}
        className="with-icon2"
        onClick={handleButtonClick}
      />
      <Button
        icon={<LikeIcon />}
        className="with-icon"
        onClick={handleButtonClick}
      />
    </div>
  )
}

export default App
