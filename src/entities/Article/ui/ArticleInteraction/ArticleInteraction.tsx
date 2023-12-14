import styles from "./ArticleInteraction.module.scss";
import {classNames} from "../../../../helpers/classNames/classNames";
import {BiSolidDislike, BiSolidLike} from "react-icons/bi";
import {useState} from "react";
import {useTranslation} from "react-i18next";

interface ArticleInteractionProps {
  likes: number;
}

export const ArticleInteraction = ({ likes }: ArticleInteractionProps) => {
  const {t} = useTranslation();

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const like = () => {
    setDislikeActive(false);
    setLikeActive(!likeActive);
  };
  const dislike = () => {
    setLikeActive(false);
    setDislikeActive(!dislikeActive);
  };

  return (
      <div className={styles.interaction}>
        {/*Like Button*/}
        <div className={classNames(styles.button, [likeActive ? styles.active : ""])} onClick={like}>
          <BiSolidLike size={18} fill={likeActive ? "var(--color-global-primary)" : "var(--color-text)"} />
          <span>{likes}</span>
        </div>

        {/*Dislike Button*/}
        <div className={classNames(styles.button, [dislikeActive ? styles.active : ""])} onClick={dislike}>
          <BiSolidDislike size={18} fill={dislikeActive ? "var(--color-global-primary)" : "var(--color-text)"} />
          <span>1,2{t("k")}</span>
        </div>
      </div>
  );
};