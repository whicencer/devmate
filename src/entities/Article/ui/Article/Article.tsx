import { classNames } from "../../../../helpers/classNames/classNames.ts";
import styles from "./Article.module.scss";
import {ArticleHeader} from "../ArticleHeader/ArticleHeader.tsx";
import {ArticleInteraction} from "../ArticleInteraction/ArticleInteraction.tsx";
import {MediaContent} from "../../../../shared/ui/MediaContent/MediaContent.tsx";
import {Article} from "../../model/types/articleSchema.ts";

interface ArticleProps {
  className?: string;
  article: Article;
}
export const Article = (props: ArticleProps) => {
  const {
    className = "",
    article
  } = props;

  return (
    <div className={classNames(styles.Article, [className])}>
      {/*Header*/}
      <ArticleHeader author={article.author} postCreatedAt={article.createdAt} />

      {/*Content*/}
      <div className={styles.content}>
        <p>{article.content}</p>
        {
          article.media
            ? <div style={{ marginTop: 10 }}>
                <MediaContent mediaContent={article.media} />
              </div>
            : null
        }
      </div>

      {/*Interaction*/}
      <ArticleInteraction likes={article.likes} />
    </div>
  );
};