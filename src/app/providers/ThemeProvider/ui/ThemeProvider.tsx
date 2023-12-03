import {FC, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../context/ThemeContext.tsx";

export const ThemeProvider = (Component: FC) => () => {
	const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
	const [theme, setTheme] = useState(savedTheme || Theme.DARK);
	document.body.className = theme;

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Component />
		</ThemeContext.Provider>
	);
};