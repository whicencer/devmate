import styles from "../styles.module.scss";
import { SidebarContent } from "../SidebarContent";
import { useAwayClick } from "../../../../app/hooks/useAwayClick";
import { CSSProperties } from "react";

interface IProps {
  isBurgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenu = ({ isBurgerOpen, setBurgerOpen }: IProps) => {
  useAwayClick(() => setBurgerOpen(false));

  const styleProperties: CSSProperties = {
    visibility: isBurgerOpen ? 'visible' : 'hidden',
    transform: isBurgerOpen ? `translateX(0)` : `translateX(-400px)`
  }

  return (
    <div className={styles.mobileMenu} style={styleProperties} onClick={e => e.stopPropagation()}>
      <SidebarContent />
    </div>
  );
};