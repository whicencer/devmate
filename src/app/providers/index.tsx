import {ReactNode} from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import ThemeProvider from "../context/ThemeContext";

interface Props {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
        {children}
      </ThemeProvider>
    </>
  );
};