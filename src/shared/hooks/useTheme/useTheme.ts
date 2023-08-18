import { useLayoutEffect, useContext } from "react";
import { ThemeContext } from "../../../app/context/ThemeContext";
import { IThemeContext } from "../../../app/typings/IThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as IThemeContext;

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return {theme, setTheme};
};