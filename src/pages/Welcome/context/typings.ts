import { Dispatch, SetStateAction } from "react"

export interface IModalContextValue {
  registerModalOpen: boolean;
  setRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  loginModalOpen: boolean;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}