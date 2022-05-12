import React from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
  const { id } = useParams()
  return <h1>Post {id}</h1>
}
