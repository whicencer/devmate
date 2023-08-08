import {ReactNode, Suspense} from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { router } from "../router";
import ThemeProvider from "../context/ThemeContext";

interface Props {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider>
            <RouterProvider router={router} />
            {children}
          </ThemeProvider>
        </Suspense>
      </RecoilRoot>
    </>
  );
};