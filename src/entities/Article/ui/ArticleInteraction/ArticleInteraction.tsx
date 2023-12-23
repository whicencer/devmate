import styles from "./ArticleInteraction.module.scss";
import {classNames} from "../../../../helpers/classNames/classNames";
import {BiSolidLike} from "react-icons/bi";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { ILike } from "../../model/types/articleSchema";
import { useSelector } from "react-redux";
import { getUserAuthData } from "../../../User/model/selectors/getUserAuthData/getUserAuthData";
import { removeLike } from "../../model/services/articleLike/removeLike";
import { AppDispatch } from "../../../../app/providers/store/config/storeConfig";
import { addLike } from "../../model/services/articleLike/addLike";

interface ArticleInteractionProps {
  articleId: number;
  likes: ILike[];
}

export const ArticleInteraction = ({ likes, articleId }: ArticleInteractionProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const authData = useSelector(getUserAuthData);
  
  const userLike = likes.find(like => like.userId === authData?.userId);

  const [likeActive, setLikeActive] = useState(!!userLike);

  const like = () => {
    if (userLike) {
      dispatch(removeLike({articleId, likeId: userLike.id}));
    } else {
      dispatch(addLike(articleId));
    }
    setLikeActive(prev => !prev);
  };

  return (
      <div className={styles.interaction}>
        {/*Like Button*/}
        <button className={classNames(styles.button, [likeActive ? styles.active : ""])} onClick={like}>
          <BiSolidLike size={18} fill={likeActive ? "var(--color-global-primary)" : "var(--color-text)"} />
          <span>{likes.length}</span>
        </button>

        {/*Dislike Button*/}
        {/* <div className={classNames(styles.button, [dislikeActive ? styles.active : ""])} onClick={dislike}>
          <BiSolidDislike size={18} fill={dislikeActive ? "var(--color-global-primary)" : "var(--color-text)"} />
          <span>1,2{t("k")}</span>
        </div> */}
      </div>
  );
};