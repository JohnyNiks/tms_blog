import React from 'react'
import { Button } from './components/Button'

import { useTheme } from './features/theme'

import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getPost } from './features/posts'

function App() {
  const { theme, toggleTheme } = useTheme()
  const post = useAppSelector(state => state.posts.post)
  const dispatch = useAppDispatch()

  const fetchPost = () => {
    dispatch(getPost(12))
  }

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      <Button text="Primary" className="primary" onClick={fetchPost} />
      {post && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>ID: {post.id}</span>
          <span>Date: {post.date}</span>
          <span>Text: {post.text}</span>
          <span>Title: {post.title}</span>
        </div>
      )}
    </div>
  )
}
export default App
