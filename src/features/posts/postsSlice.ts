import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Post = {
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
}

const initialState: PostsState = {
  content: null,
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
  },
})

// Action creators are generated for each case reducer function
export const { fetchPosts, likePost, dislikePost } = postsSlice.actions

export default postsSlice.reducer
