import { BiSolidUserCircle } from 'react-icons/bi';
import { IUser } from '../../../../../../app/typings/IAuthor';
import styles from '../../styles.module.scss';

export const ArticleAuthor = ({ author }: { author: IUser }) => {
  return (
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
  );
};