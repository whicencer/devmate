import {useEffect} from "react";
import styles from "./Feed.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getAllArticles} from "../../../entities/Article/model/services/getAllArticles/getAllArticles.ts";
import {getArticles} from "../../../entities/Article/model/selectors/getArticles.ts";
import { Article } from "../../../entities/Article";

const Feed = () => {
  const articles = useSelector(getArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);
  
  return (
    <div className={styles.feed}>

      {
        articles.map(article => {
          return (
              <Article key={article.id} article={article} />
          );
        })
      }
    </div>
  );
};

export default Feed;