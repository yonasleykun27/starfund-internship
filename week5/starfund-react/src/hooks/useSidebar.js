import { useState, useEffect } from 'react';

/**
 * Custom hook useSidebar for managing collapsible sidebar drawer state
 * Exercise 25.
 */
export const useSidebar = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // Automatically close sidebar on resize to desktop screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isOpen,
    toggle,
    close,
    open,
  };
};

export default useSidebar;
