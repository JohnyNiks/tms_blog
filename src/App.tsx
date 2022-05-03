import React from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ReactComponent as BookmarkIcon } from './assets/images/bookmark.svg'
import { ReactComponent as LikeIcon } from './assets/images/like.svg'
import { ReactComponent as DislikeIcon } from './assets/images/dislike.svg'

function App() {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  return (
    <div className="App">
      <Button
        text="Primary"
        disabled
        className="primary"
        onClick={handleButtonClick}
      />
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
      <Input title="Title" placeholder="Placeholder" />
      <Input
        type="email"
        title="Title"
        placeholder="Placeholder"
        error={true}
        errorMessage="Error text"
      />
      <Input type="password" title="Title" placeholder="Placeholder" />
    </div>
  )
}

export default App
