import React, { createContext, useContext, useState } from 'react';

// Create NotificationContext
const NotificationContext = createContext(null);

/**
 * Provider component for managing notification bell badge and list state
 * Exercise 24.
 */
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: '🌱 AgroSense AI published a new pilot study update.', read: false, time: '10m ago' },
    { id: 2, text: '💰 Aster Kebede pledged $5,000 to AgroSense AI.', read: false, time: '1h ago' },
    { id: 3, text: '📝 Hawassa Solar Grid reached its funding target of $800k!', read: true, time: '1d ago' },
  ]);

  const addNotification = (text) => {
    setNotifications((prev) => [
      { id: Date.now(), text, read: false, time: 'Just now' },
      ...prev,
    ]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, addNotification, markAllAsRead, clearNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export default NotificationContext;
