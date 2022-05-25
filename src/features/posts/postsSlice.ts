import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Post = {
  id: number
  image: string
  text: string
  date: string
  lesson_num: number
  title: string
  author: number
  like?: boolean
}

interface PostsState {
  content: Array<Post> | null
  post: Post | null
  isLoading: 'idle' | 'pending'
  error: string | null
}

const initialState: PostsState = {
  content: null,
  post: null,
  isLoading: 'idle',
  error: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Array<Post>>) => {
      state.content = action.payload
    },
    likePost: (state, action: PayloadAction<number>) => {
      if (state.content) {
        state.content = state.content.map(post =>
          post.id === action.payload ? { ...post, like: true } : post
        )
      }
    },
    dislikePost: (state, action: PayloadAction<number>) => {
      if (state.content) {
        state.content = state.content.map(post =>
          post.id === action.payload ? { ...post, like: false } : post
        )
      }
    },
    getPost: (state, action: PayloadAction<number>) => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending'
      }
    },
    getPostSuccess: (state, action: PayloadAction<Post>) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'idle'
        state.post = action.payload
      }
    },
    getPostFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = 'idle'
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  fetchPosts,
  likePost,
  dislikePost,
  getPost,
  getPostSuccess,
  getPostFailure,
} = postsSlice.actions

export default postsSlice.reducer
