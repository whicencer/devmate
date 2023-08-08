import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { FaThumbsUp, FaCommentAlt } from 'react-icons/fa';

import styles from './styles.module.scss';
import { IArticle } from '../../../../app/typings/IArticle';
import { DetailImage } from '../../../../shared/ui/DetailImage/DetailImage';

export const FeedArticle = ({ article }: { article: IArticle }) => {
  const { author, articleText, mediaContent, likes } = article;
  const [detailImageVisible, setDetailImageVisible] = useState(false);

  const imageOnClick = () => {
    document.body.classList.add('openPopup');
    setDetailImageVisible(true);
  };

  return (
    <div className={styles.article}>
        <div className={styles.articleHeader}>
          <div className={styles.articleAuthor}>
            {
              author.profilePicture
                ? <img src={author.profilePicture} alt={author.nickname} />
                : <BiSolidUserCircle size={50} />
            }
            <div className={styles.authorAdditionalInfo}>
              <h4>{author.name}</h4>
              <p>13 hours ago</p>
            </div>
          </div>
          <BsThreeDots size={20} />
        </div>
        <div className={styles.articleContent}>
          <p>{articleText}</p>
          {
            mediaContent
            ? <div>
              <img onClick={imageOnClick} src={mediaContent} alt="article-image" />
              <DetailImage visible={detailImageVisible} imageLink={mediaContent} close={() => setDetailImageVisible(false)} />
            </div>
            : null
          }
        </div>
        <div className={styles.interaction}>
          <span>
            <FaThumbsUp />
            <p>{likes}</p>
          </span>
          <span>
            <FaCommentAlt />
            <p>760</p>
          </span>
        </div>
    </div>
  );
};