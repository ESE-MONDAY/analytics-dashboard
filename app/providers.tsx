'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

// Define a context for managing the sidebar state
type ShowSidebarContextProps = {
  showSidebar: boolean;
  toggleSidebar: () => void;
};

const ShowSidebarContext = createContext<ShowSidebarContextProps | undefined>(undefined);

// Custom hook to access the context
export const useShowSidebar = () => {
  const context = useContext(ShowSidebarContext);
  if (!context) {
    throw new Error('useShowSidebar must be used within a ShowSidebarProvider');
  }
  return context;
};

// Provider component that wraps the entire application
const Providers = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Wrap the entire app with the ShowSidebarContext.Provider */}
      <ShowSidebarContext.Provider value={{ showSidebar, toggleSidebar }}>
        {children}
      </ShowSidebarContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
