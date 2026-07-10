import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * RoleRoute component that restricts access to users with specified role
 * Day 25 task.
 */
export const RoleRoute = ({ children, allowedRoles }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    // If founder tries to access admin, or investor tries to access founder dashboard
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
