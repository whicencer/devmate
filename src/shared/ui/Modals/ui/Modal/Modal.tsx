import {FC, MouseEvent} from "react";
import {motion} from "framer-motion";
import ReactDOM from "react-dom";
import {IModalProps} from "../../typings/Modal";
import styles from "./styles.module.scss";

export const Modal: FC<IModalProps> = ({ children, isOpen, setIsOpen, height, width }) => {
  const modalRoot = document.getElementById('modal-root')!;

  if (!isOpen) return null;

  const handleClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onMouseDown={handleClick}>
      <motion.div
        style={{ height, width }}
        initial={{scale: .8}}
        animate={{scale: 1}}
        className={`modal ${styles.modal}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>,
    modalRoot
  );
};