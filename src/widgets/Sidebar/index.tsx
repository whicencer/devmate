import { SidebarContent } from "./SidebarContent.tsx";
import styles from "./styles.module.scss";
import { MobileMenu } from "./MobileMenu/MobileMenu.tsx";
import { useState } from "react";
import { BurgerButton } from "../BurgerButton/BurgerButton.tsx";

const Sidebar = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileSidebar}>
        <MobileMenu isBurgerOpen={isBurgerOpen} onBurgerClose={() => setBurgerOpen(false)} />
        <BurgerButton openBurger={() => setBurgerOpen(true)} style={{ margin: 10 }} />
      </div>
      <aside className={styles.sidebar}>
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;