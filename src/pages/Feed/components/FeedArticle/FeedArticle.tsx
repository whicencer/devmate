import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';

import styles from './styles.module.scss';
import { IArticle } from '../../../../app/typings/IArticle';
import { ArticleInfo } from './components/ArticleInfo/ArticleInfo';
import { MediaContent } from './components/MediaContent/MediaContent';

export const FeedArticle = ({ article }: { article: IArticle }) => {
  const { author, articleText, mediaContent, likes, timestamp } = article;
  
  const [isLiked, setLiked] = useState(false);

  const handleLike = () => setLiked(curr => !curr);

  return (
    <div className={styles.article}>
        <div className={styles.articleHeader}>
          <ArticleInfo author={author} timestamp={timestamp} />
          <BsThreeDots size={20} />
        </div>
        <div className={styles.articleContent}>
          <p>{articleText}</p>
          { mediaContent ? <MediaContent mediaContent={mediaContent} /> : null}
        </div>
        <div className={styles.interaction}>
          <span onClick={handleLike} style={{ color: isLiked ? '#5c57ff' : '' }}>
            <FaThumbsUp />
            <p>{isLiked ? likes+1 : likes}</p>
          </span>
        </div>
    </div>
  );
};