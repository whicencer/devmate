import {ReactNode} from "react";
import {motion} from "framer-motion";
import styles from "./Modal.module.scss";
import {Portal} from "../../../Portal/Portal.tsx";
import {classNames} from "../../../../../helpers/classNames/classNames.ts";

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal = ({ children, isOpen, onClose, className = "" }: IModalProps) => {
  const opened = isOpen ? styles.opened : "";

  return (
    <Portal>
      <div className={classNames(styles.Modal, [className, opened])}>
        <div className={styles.overlay} onClick={onClose}>
          <motion.div
              initial={{scale: .8}}
              animate={{scale: 1}}
              className={styles.content}
              onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </Portal>
  )
};