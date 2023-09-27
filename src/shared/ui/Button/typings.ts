import { CSSProperties, Dispatch, ReactElement, SetStateAction } from "react";

export interface IButtonProps {
  children: ReactElement | string;
  style?: CSSProperties;
  className?: string;
  scheme?: 'primary' | 'secondary';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: () => void | Dispatch<SetStateAction<any>> | Promise<void>;
}