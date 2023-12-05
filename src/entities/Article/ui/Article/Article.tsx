import { classNames } from "../../../../helpers/classNames/classNames.ts";
import styles from "./Article.module.scss";
import {ArticleHeader} from "../ArticleHeader/ArticleHeader.tsx";
import {ArticleInteraction} from "../ArticleInteraction/ArticleInteraction.tsx";
import {MediaContent} from "../../../../shared/ui/MediaContent/MediaContent.tsx";

interface ArticleProps {
    className?: string;
}
export const Article = ({ className = "" }: ArticleProps) => {
  return (
    <div className={classNames(styles.Article, [className])}>
      {/*Header*/}
      <ArticleHeader />

      {/*Content*/}
      <div className={styles.content}>
        <p>
          Почему программисты так плохо готовят еду?<br/>
          Потому что они всегда ждут, что микроволновка сделает за них все "по умолчанию"!
        </p>
        <div style={{ marginTop: 10 }}>
          <MediaContent mediaContent={"https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"} />
        </div>
      </div>

      {/*Interaction*/}
      <ArticleInteraction />
    </div>
  );
};