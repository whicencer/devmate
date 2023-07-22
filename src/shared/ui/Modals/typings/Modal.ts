import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  width?: string
  height?: string
}