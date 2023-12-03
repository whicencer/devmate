import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../context/ThemeContext.tsx";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "app_light_theme" ? Theme.DARK : Theme.LIGHT;

    if (setTheme) {
      setTheme(newTheme);
    }
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {theme, toggleTheme};
};