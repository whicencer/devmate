import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../components/layout/Sidebar";
import { Button } from "../../shared/ui/Button";
import Textarea from "../../shared/ui/Textarea";
import styles from "./styles.module.scss";
import { MobileMenu } from "../../components/layout/Sidebar/MobileMenu/MobileMenu";
import { FeedArticle } from "./components/FeedArticle/FeedArticle";
import { useRecoilValue } from "recoil";
import { articlesQuery } from "../../atoms/articlesState";
import { IArticle } from "../../app/typings/IArticle";

const Feed = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const articles = useRecoilValue<IArticle[]>(articlesQuery);

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
          {
            articles.map(article => {
              return (
                <FeedArticle key={article.id} article={article} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Feed;