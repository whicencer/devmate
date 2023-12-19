import styles from "./MobileMenu.module.scss";
import { SidebarContent } from "../SidebarContent.tsx";
import { useAwayClick } from "../../../shared/hooks/useAwayClick.ts";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  isBurgerOpen: boolean;
  onBurgerClose: () => void;
}

export const MobileMenu = ({ isBurgerOpen, onBurgerClose }: IProps) => {
  useAwayClick(onBurgerClose);

  return (
    <div className={`${styles.mobileMenu} ${isBurgerOpen ? "" : styles.closedMenu}`} onClick={e => e.stopPropagation()}>
      <SidebarContent />
      <button onClick={onBurgerClose} className={styles.closeBtn}>
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
};