import {useEffect} from "react";
import styles from "./Feed.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getAllArticles} from "../../../entities/Article/model/services/getAllArticles/getAllArticles.ts";
import {getArticles} from "../../../entities/Article/model/selectors/getArticles.ts";
import { Article } from "../../../entities/Article";
import {PageWrapper} from "../../../widgets/PageWrapper/PageWrapper.tsx";
import { AppDispatch } from "../../../app/providers/store/config/storeConfig.ts";

const Feed = () => {
  const articles = useSelector(getArticles);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);
  
  return (
    <PageWrapper>
      <div className={styles.feed}>
        {
          articles.map(article => {
            return (
              <Article key={article.id} article={article} />
            );
          })
        }
      </div>
    </PageWrapper>
  );
};

export default Feed;