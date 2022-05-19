import React from 'react'
import { Button } from './components/Button'

import { useTheme } from './features/theme'

import { usePosts } from './features/posts/usePosts'
import { ReactComponent as LikeIcon } from './assets/images/like.svg'
import { ReactComponent as DislikeIcon } from './assets/images/dislike.svg'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { posts, onLikePost, onDislikePost } = usePosts()

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      {posts?.map(post => {
        return (
          <div key={post.id}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{post.title}</span>
              <span>{String(post.like)}</span>
            </div>
            <Button
              className="secondary"
              onClick={() => onLikePost(post.id)}
              icon={<LikeIcon />}
            />
            <Button
              className="secondary"
              onClick={() => onDislikePost(post.id)}
              icon={<DislikeIcon />}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
