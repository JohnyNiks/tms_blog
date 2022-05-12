import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddPost } from './routes/addPost'
import { Posts } from './routes/posts'
import { Post } from './routes/post'
import { Search } from './routes/search'
import { PrivateRoute } from './components/PrivateRoute'
import { PublicRoute } from './components/PublicRoute'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/add"
          element={
            <PrivateRoute>
              <AddPost />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PublicRoute>
              <Search />
            </PublicRoute>
          }
        />
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
