import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddPost } from './routes/addPost'
import { Posts } from './routes/posts'
import { Post } from './routes/post'
import { Search } from './routes/search'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>404 Not Found</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
