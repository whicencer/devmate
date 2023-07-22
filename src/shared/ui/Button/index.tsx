import { FC } from "react";
import { IButtonProps } from "./typings";
import styles from "./styles.module.scss";

export const Button: FC<IButtonProps> = ({ children, style, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button} style={style}>
      {children}
    </button>
  );
};