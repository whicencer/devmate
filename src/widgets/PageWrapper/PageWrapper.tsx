import {ReactNode} from "react";
import Sidebar from "../Sidebar";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Sidebar />
      <div className="contentWrapper">
        {children}
      </div>
    </>
  );
};