import { ChangeEvent } from "react";

export interface ITextareaProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}