import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../components/layout/Sidebar";
import { Button } from "../../shared/ui/Button";
import Textarea from "../../shared/ui/Textarea";
import styles from "./styles.module.scss";
import { MobileMenu } from "../../components/layout/Sidebar/MobileMenu/MobileMenu";
import { ArticlesList } from "./components/ArticlesList/ArticlesList";
import { WriteArticleForm } from "./components/WriteArticleForm/WriteArticleForm";

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
        <WriteArticleForm />
        <div style={{ marginTop: 20 }}>
          <ArticlesList />
        </div>
      </div>
    </div>
  );
};

export default Feed;