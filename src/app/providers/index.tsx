import {ReactNode} from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";

interface Props {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <RouterProvider router={router} />
      {children}
    </>
  );
};