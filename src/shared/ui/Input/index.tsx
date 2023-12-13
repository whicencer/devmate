import {FC} from "react";
import { IInputProps } from "./typings";
import styles from "./styles.module.scss";

export const Input: FC<IInputProps> = (props) => {
  const {
    placeholder,
    type = "text",
    width,
    label,
    style,
    onChange,
    value,
    minLength, maxLength,
    inputStyle
  } = props;

  if (value && minLength) {
    return (
      <div style={style}>
        <label className={styles.label}>{label}</label>
        <input onChange={onChange} value={value} style={{ width, borderColor: value.length < minLength ? '#df373c' : '#2cc740' }} className={`input ${styles.input}`} type={type} placeholder={placeholder} />
      </div>
    );
  }
  if (value && maxLength) {
    return (
      <div style={style}>
        <label className={styles.label}>{label}</label>
        <input onChange={onChange} value={value} style={{ width, borderColor: value.length > maxLength ? '#df373c' : '#2cc740' }} className={`input ${styles.input}`} type={type} placeholder={placeholder} />
      </div>
    );
  }

  return (
    <div style={style}>
      { label ? <label className={styles.label}>{label}</label> : null }
      <input onChange={onChange} value={value} style={{ ...inputStyle, width }} className={`input ${styles.input}`} type={type} placeholder={placeholder} />
    </div>
  );
};