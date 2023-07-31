import { Dispatch, SetStateAction } from "react";

export interface IThemeContext {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}