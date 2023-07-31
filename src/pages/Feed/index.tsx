import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../components/layout/Sidebar";
import { Button } from "../../shared/ui/Button";
import Textarea from "../../shared/ui/Textarea";
import styles from "./styles.module.scss";
import { MobileMenu } from "../../components/layout/Sidebar/MobileMenu/MobileMenu";
import { useState } from "react";

const Feed = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const openBurger = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setBurgerOpen(true);
  };

  return (
    <div className={styles.feed}>
      { !isBurgerOpen ? <Sidebar /> : null }
      <MobileMenu isBurgerOpen={isBurgerOpen} setBurgerOpen={setBurgerOpen} />
      <button onClick={openBurger} className={styles.burgerButton} style={{ outline: 'none', border: 'none', background: 'none' }}>
        <GiHamburgerMenu style={{ cursor: 'pointer' }} size={30} className={styles.burgerButtonIcon} />
      </button>
      <div className={styles.feedContent}>
        <div className={styles.feedInput}>
          <Textarea placeholder="Tell your mates something interesting..." />
          <Button>Add post</Button>
        </div>
      </div>
    </div>
  );
};

export default Feed;