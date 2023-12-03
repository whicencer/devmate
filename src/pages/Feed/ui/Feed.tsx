import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../../widgets/Sidebar";
import styles from "./Feed.module.scss";
import { MobileMenu } from "../../../widgets/Sidebar/MobileMenu/MobileMenu.tsx";

const Feed = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const openBurger = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setBurgerOpen(true);
  };
  
  return (
    <div className={styles.feed}>
      { !isBurgerOpen ? <Sidebar /> : null }
      <MobileMenu data-testid='mobile-menu' isBurgerOpen={isBurgerOpen} setBurgerOpen={setBurgerOpen} />
      <button data-testid='burger-button' onClick={openBurger} className={styles.burgerButton} style={{ outline: 'none', border: 'none', background: 'none' }}>
        <GiHamburgerMenu style={{ cursor: 'pointer' }} size={30} className={styles.burgerButtonIcon} />
      </button>
      <div className={styles.feedContent}>
        <p>Here should be articles</p>
      </div>
    </div>
  );
};

export default Feed;