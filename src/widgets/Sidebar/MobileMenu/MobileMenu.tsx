import styles from "./MobileMenu.module.scss";
import { SidebarContent } from "../SidebarContent.tsx";
import { useAwayClick } from "../../../shared/hooks/useAwayClick.ts";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";

interface IProps {
  isBurgerOpen: boolean;
  onBurgerClose: () => void;
}

export const MobileMenu = ({ isBurgerOpen, onBurgerClose }: IProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useAwayClick(wrapperRef, onBurgerClose);

  return (
    <div ref={wrapperRef} className={`${styles.mobileMenu} ${isBurgerOpen ? "" : styles.closedMenu}`} onClick={e => e.stopPropagation()}>
      <SidebarContent />
      <button onClick={onBurgerClose} className={styles.closeBtn}>
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
};