import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from '../features/theme'
import { postsReducer } from '../features/posts'
import { authReducer } from '../features/auth'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
