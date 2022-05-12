import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks'

interface PublicRouteProps {
  children: JSX.Element
}
export const PublicRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const isAuthenticated = useAuth()
  return isAuthenticated ? <Navigate to="/" /> : children
}
