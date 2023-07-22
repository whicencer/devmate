import { useState, useLayoutEffect } from "react";

export const useTheme = () => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const [theme, setTheme] = useState<'light' | 'dark'>(savedTheme || 'light');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return {theme, setTheme};
};