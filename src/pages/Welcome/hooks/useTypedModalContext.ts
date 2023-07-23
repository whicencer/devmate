import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { IModalContextValue } from "../context/typings";

export const useTypedModalContext = () => {
  const modalContextValue = useContext<IModalContextValue>(ModalContext);
  
  return modalContextValue;
}