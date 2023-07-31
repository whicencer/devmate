import styles from "../styles.module.scss";
import { SidebarContent } from "../SidebarContent";
import { useAwayClick } from "../../../../shared/hooks/useAwayClick";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  isBurgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenu = ({ isBurgerOpen, setBurgerOpen }: IProps) => {
  useAwayClick(() => setBurgerOpen(false));

  return (
    <div className={`${styles.mobileMenu} ${isBurgerOpen ? styles.openMenu : styles.closedMenu}`} onClick={e => e.stopPropagation()}>
      <SidebarContent />
      <button onClick={() => setBurgerOpen(false)} className={styles.closeBtn}>
        <AiOutlineClose size={30} />
      </button>
    </div>
  );
};