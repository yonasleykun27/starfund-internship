import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Create AuthContext
const AuthContext = createContext(null);

/**
 * AuthProvider component that wraps the app and provides authentication state
 * Day 24 task.
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage('starfund_user', null);

  const login = (userData) => {
    // Simulate user login and store info (username, email, role)
    setCurrentUser(userData);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated: !!currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Reusable useAuth hook to easily access auth context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
