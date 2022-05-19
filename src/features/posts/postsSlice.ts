import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Post = {
  id: number
  image: string
  text: string
  date: string
  lesson_num: number
  title: string
  author: number
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
  },
})

// Action creators are generated for each case reducer function
export const { fetchPosts } = postsSlice.actions

export default postsSlice.reducer
