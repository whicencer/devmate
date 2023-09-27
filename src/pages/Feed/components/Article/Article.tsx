import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';

import styles from './styles.module.scss';
import { IArticle } from '../../../../app/typings/IArticle';
import { ArticleInfo } from './ArticleInfo/ArticleInfo';
import { MediaContent } from '../../../../shared/ui/MediaContent/MediaContent';

export const Article = ({ article }: { article: IArticle }) => {
  const { content, media, likes, author, createdAt } = article;
  
  const [isLiked, setLiked] = useState(false);

  const handleLike = () => setLiked(curr => !curr);

  return (
    <div className={styles.article}>
        <div className={styles.articleHeader}>
          <ArticleInfo author={author} createdAt={createdAt} />
          <BsThreeDots size={20} />
        </div>
        <div className={styles.articleContent}>
          <p>{content}</p>
          { media ? <MediaContent mediaContent={media} /> : null}
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