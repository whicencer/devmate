import {ReactNode, Suspense} from "react";
import { RecoilRoot } from "recoil";
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
            {children}
          </ThemeProvider>
        </Suspense>
      </RecoilRoot>
    </>
  );
};