import { useRecoilState } from 'recoil';
import { Button } from '../../../../shared/ui/Button';
import Textarea from '../../../../shared/ui/Textarea';
import styles from '../../styles.module.scss';
import { articlesState } from '../../../../atoms/articlesState';
import { useState } from 'react';
import { IArticle } from '../../../../app/typings/IArticle';

export const WriteArticleForm = () => {
	const [_, setArticles] = useRecoilState(articlesState);
	const [articleText, setArticleText] = useState<string>('');

	const handleAddArticle = () => {
		if (articleText.length < 1) {
			alert('Too short story...');
		} else {
			const newArticle: IArticle = {
				id: `${Math.random()*10}`,
				articleText,
				author: {
					name: 'Deniel Azizov',
					nickname: 'whicencer'
				},
				likes: 0,
				timestamp: new Date(),
			};
	
			setArticles(articles => [newArticle, ...articles]);
			setArticleText('');
		}
	};

  return (
    <div className={styles.feedInput}>
			<Textarea
				placeholder='Tell your mates something interesting...'
				value={articleText}
				onChange={(e) => setArticleText(e.target.value)}
			/>
			<Button onClick={handleAddArticle}>Add post</Button>
    </div>
  );
};