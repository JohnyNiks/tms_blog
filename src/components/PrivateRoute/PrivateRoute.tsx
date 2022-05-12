import { Route, Navigate } from 'react-router-dom'
import React from 'react'

type PrivateRouteProps = {
  children: React.ReactChild
  isAuthenticated: boolean
}

export const PrivateRoute = ({
  children,
  isAuthenticated,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? children : <Navigate to="/sign-in" />}
    />
  )
}
