import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../components/layout/Sidebar";
import { Button } from "../../shared/ui/Button";
import Textarea from "../../shared/ui/Textarea";
import styles from "./styles.module.scss";
import { MobileMenu } from "../../components/layout/Sidebar/MobileMenu/MobileMenu";
import { useState } from "react";
import { FeedArticle } from "./components/FeedArticle/FeedArticle";

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
        <div style={{ marginTop: 20 }}>
          <FeedArticle textContent="Hello, my name is John Doe. This text is for testing the UI of article component" />
          <FeedArticle
            textContent="Hello, my name is John Doe, and this is second text for testing the UI of article component, but this one will be with image"
            mediaContent="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/05/KelingKing-Beach-Nusa-Penida-Bali-Indonesia.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;