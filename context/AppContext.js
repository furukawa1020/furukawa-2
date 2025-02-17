import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLogs, setProjectLogs] = useState({});

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  const value = {
    isDarkMode,
    setIsDarkMode,
    currentPage,
    setCurrentPage,
    selectedProject,
    setSelectedProject,
    projectLogs,
    setProjectLogs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}