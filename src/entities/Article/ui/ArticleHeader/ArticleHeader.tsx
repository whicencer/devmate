import styles from "./ArticleHeader.module.scss";
import {Author} from "../../model/types/articleSchema.ts";
import {getNormalDate} from "../../../../helpers/getNormalDate";
import {ProfilePicture} from "../../../../shared/ui/ProfilePicture/ProfilePicture.tsx";

interface ArticleHeaderProps {
  author: Author;
  postCreatedAt: Date;
}

export const ArticleHeader = ({author, postCreatedAt}: ArticleHeaderProps) => {
  return (
      <div className={styles.ArticleHeader}>
        <div className={styles.articleAuthor}>
          {
            !author.profilePicture
              ? <ProfilePicture size={22} />
              : <img src={author.profilePicture} alt="profile_picture" />
          }
          <div className={styles.info}>
            <h3>{author.username}</h3>
            <span>{getNormalDate(postCreatedAt)}</span>
          </div>
        </div>
      </div>
  );
};