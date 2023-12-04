import { classNames } from "../../../helpers/classNames/classNames";
import styles from "./Article.module.scss";
import { BiLike, BiDislike } from "react-icons/bi";

interface ArticleProps {
    className?: string;
}
export const Article = ({ className = "" }: ArticleProps) => {
    return (
        <div className={classNames(styles.Article, [className])}>
          {/*Header*/}
          <div className={styles.articleHeader}>
            <div className={styles.articleAuthor}>
              {/*Avatar*/}
              <img src="https://i.pinimg.com/564x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg" alt=""/>
              {/*Info*/}
              <div className={styles.info}>
                {/*Name*/}
                <h3>John Doe</h3>
                {/*Time*/}
                <span>2 hours ago</span>
              </div>
            </div>
          </div>

          {/*Content*/}
          <div className={styles.content}>
            <p>
              Почему программисты так плохо готовят еду?<br/>
              Потому что они всегда ждут, что микроволновка сделает за них все "по умолчанию"!
            </p>
          </div>

          {/*Interaction*/}
          <div className={styles.interaction}>
            {/*Like Button*/}
            <div className={styles.button}>
              <BiLike size={18} />
              <span>154k</span>
            </div>

            {/*Dislike Button*/}
            <div className={styles.button}>
              <BiDislike size={18} />
              <span>1.2k</span>
            </div>
          </div>
        </div>
    );
};