import { CSSProperties } from 'react';

export interface IInputProps {
  placeholder?: string;
  type?: "text" | "password" | "file" | "checkbox" | "email" | "radio";
  width?: string;
  label?: string;
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  minLength?: number;
  maxLength?: number;
}