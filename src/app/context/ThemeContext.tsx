import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
  const [theme, setTheme] = useState(savedTheme || 'dark');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;