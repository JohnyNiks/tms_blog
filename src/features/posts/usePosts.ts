import { useEffect } from 'react'
import { fetchPosts, likePost, dislikePost } from './postsSlice'

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

  const onLikePost = (id: number) => {
    dispatch(likePost(id))
  }
  const onDislikePost = (id: number) => {
    dispatch(dislikePost(id))
  }

  return {
    posts,
    onLikePost,
    onDislikePost,
  }
}
