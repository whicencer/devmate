import { CSSProperties, Dispatch, ReactElement, SetStateAction } from "react";

export interface IButtonProps {
  children: ReactElement | string;
  style?: CSSProperties;
  className?: string;
  scheme?: 'primary' | 'secondary';
  onClick?: () => void | Dispatch<SetStateAction<any>>;
}