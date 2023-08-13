import { BiSolidUserCircle } from 'react-icons/bi';
import { IUser } from '../../../../../../app/typings/IAuthor';
import styles from '../../styles.module.scss';
import { getNormalDate } from '../../../../../../helpers/getNormalDate';

interface IProps {
	author: IUser;
	timestamp: Date;
}

export const ArticleInfo = ({ author, timestamp }: IProps) => {
	timestamp = new Date('2023.08.14.00:4');

  return (
    <div className={styles.articleAuthor}>
			{
				author.profilePicture
					? <img src={author.profilePicture} alt={author.nickname} />
					: <BiSolidUserCircle size={50} />
			}
			<div className={styles.authorAdditionalInfo}>
				<h4>{author.name}</h4>
				<p>{getNormalDate(timestamp)}</p>
			</div>
		</div>
  );
};