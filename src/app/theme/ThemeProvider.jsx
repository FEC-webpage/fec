"use client";

import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  // Simplified provider with no toggle functionality
  return (
    <ThemeContext.Provider value={{ theme: 'default' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 