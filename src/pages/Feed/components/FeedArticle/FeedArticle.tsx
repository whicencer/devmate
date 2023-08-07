import { useState } from 'react';
import styles from './styles.module.scss';
import { BsThreeDots } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { IArticle } from '../../../../app/typings/IArticle';
import { DetailImage } from '../../../../shared/ui/DetailImage/DetailImage';

export const FeedArticle = ({ textContent, mediaContent }: IArticle) => {
  const [detailImageVisible, setDetailImageVisible] = useState(false);

  const imageOnClick = () => {
    document.body.classList.add('openPopup');
    setDetailImageVisible(true);
  }

  return (
    <div className={styles.article}>
        <div className={styles.articleHeader}>
          <div className={styles.articleAuthor}>
            <BiSolidUserCircle size={50} />
            <div className={styles.authorAdditionalInfo}>
              <h4>John Doe</h4>
              <p>13 hours ago</p>
            </div>
          </div>
          <BsThreeDots size={20} />
        </div>
        <div className={styles.articleContent}>
          <p>{textContent}</p>
          {
            mediaContent
            ? <div>
              <img onClick={imageOnClick} src={mediaContent} alt="article-image" />
              <DetailImage visible={detailImageVisible} imageLink={mediaContent} close={() => setDetailImageVisible(false)} />
            </div>
            : null
          }
        </div>
    </div>
  );
};