import { FC } from "react";
import ThemeProviderContext from "../context/ThemeContext";

export const ThemeProvider = (Component: FC) => () => {
	return (
		<ThemeProviderContext>
			<Component />
		</ThemeProviderContext>
	);
};