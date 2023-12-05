import styles from "./ArticleHeader.module.scss";

export const ArticleHeader = () => {
  return (
      <div className={styles.ArticleHeader}>
        <div className={styles.articleAuthor}>
          <img src="https://i.pinimg.com/564x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg" alt="profile_picture"/>
          <div className={styles.info}>
            <h3>John Doe</h3>
            <span>2 hours ago</span>
          </div>
        </div>
      </div>
  );
};