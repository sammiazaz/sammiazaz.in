"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'cyan-pill' | 'current';
export type ColorMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'current',
  setTheme: () => {},
  toggleTheme: () => {},
  mode: 'dark',
  setMode: () => {},
  toggleMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('current');
  const [mode, setModeState] = useState<ColorMode>('dark');

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('sammi_portfolio_theme') as ThemeMode | null;
      if (savedTheme === 'cyan-pill' || savedTheme === 'current') {
        setThemeState(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        setThemeState('current');
        document.documentElement.setAttribute('data-theme', 'current');
      }

      const savedMode = localStorage.getItem('sammi_portfolio_mode') as ColorMode | null;
      if (savedMode === 'light' || savedMode === 'dark') {
        setModeState(savedMode);
        document.documentElement.setAttribute('data-mode', savedMode);
      } else {
        setModeState('dark');
        document.documentElement.setAttribute('data-mode', 'dark');
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('sammi_portfolio_theme', newTheme);
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'current' ? 'cyan-pill' : 'current';
    setTheme(nextTheme);
  };

  const setMode = (newMode: ColorMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem('sammi_portfolio_mode', newMode);
    } catch (e) {}
    document.documentElement.setAttribute('data-mode', newMode);
  };

  const toggleMode = () => {
    const nextMode: ColorMode = mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
