import React from 'react'
import { Route, Navigate } from 'react-router-dom'

type PublicRouteProps = {
  children: React.ReactChild
  isAuthenticated: boolean
}
export const PublicRoute = ({
  children,
  isAuthenticated,
  ...rest
}: PublicRouteProps) => {
  return (
    <Route
      {...rest}
      element={!isAuthenticated ? children : <Navigate to="/" />}
    />
  )
}
