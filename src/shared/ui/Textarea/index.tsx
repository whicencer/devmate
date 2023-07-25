import { ITextareaProps } from "./typings";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";

const Textarea = ({ placeholder }: ITextareaProps) => {
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <textarea rows={1} placeholder={placeholder} className={styles.textarea} value={text} onChange={handleChange}></textarea>
  );
};

export default Textarea;