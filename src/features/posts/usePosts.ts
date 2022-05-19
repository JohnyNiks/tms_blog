import { useEffect } from 'react'
import { fetchPosts } from './postsSlice'

import { postsData } from '../../redux/postsData'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'

export const usePosts = () => {
  const posts = useAppSelector(state => state.posts.content)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts(postsData))
    }, 1000)
  }, [])

  return {
    posts,
  }
}
