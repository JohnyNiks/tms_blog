import { Navigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../../hooks'

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = useAuth()
  return isAuthenticated ? children : <Navigate to="/sign-in" />
}
