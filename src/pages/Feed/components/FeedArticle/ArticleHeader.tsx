import { BsThreeDots } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';

import styles from './styles.module.scss';
import { IAuthor } from '../../../../app/typings/IAuthor';

const ArticleHeader = ({ name, username }: IAuthor) => {
  return (
    <div className={styles.articleHeader}>
			<div className={styles.articleAuthor}>
			<BiSolidUserCircle size={50} />
			<div className={styles.authorAdditionalInfo}>
					<h4>{name}</h4>
					<p>13 hours ago</p>
			</div>
			</div>
			<BsThreeDots size={20} />
    </div>
  );
};

export default ArticleHeader;