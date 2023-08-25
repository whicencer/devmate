import { BiSolidUserCircle } from 'react-icons/bi';
import { IUser } from '../../../../../app/typings/IAuthor';
import styles from '../styles.module.scss';
import { getNormalDate } from '../../../../../helpers/getNormalDate';

interface IProps {
	author: IUser;
	createdAt: Date;
}

export const ArticleInfo = ({ author, createdAt }: IProps) => {
  return (
    <div className={styles.articleAuthor}>
			{
				author.profilePicture
					? <img src={author.profilePicture} />
					: <BiSolidUserCircle size={50} />
			}
			<div className={styles.authorAdditionalInfo}>
				<h4>{author.fullname}</h4>
				<p>{getNormalDate(createdAt)}</p>
			</div>
		</div>
  );
};