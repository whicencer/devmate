import { ITextareaProps } from './typings';
import styles from './styles.module.scss';
import { ChangeEvent } from 'react';

const Textarea = ({ placeholder, onChange, value }: ITextareaProps) => {

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <textarea rows={1} placeholder={placeholder} className={styles.textarea} value={value} onChange={handleChange}></textarea>
  );
};

export default Textarea;