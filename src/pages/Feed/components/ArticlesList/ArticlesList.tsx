import { useEffect } from 'react';
import { IArticle } from '../../../../app/typings/IArticle';
import { FeedArticle } from '../FeedArticle/FeedArticle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { articlesQuery, articlesState } from '../../../../atoms/articlesState';

export const ArticlesList = () => {
	const articlesFromServer = useRecoilValue<IArticle[]>(articlesQuery);
  const [articles, setArticles] = useRecoilState(articlesState);

  useEffect(() => {
    setArticles(articlesFromServer);
  }, [articlesFromServer, setArticles]);

  return (
    <>
			{
				articles.map(article => {
					return (
						<FeedArticle key={article.id} article={article} />
					);
				})
			}
    </>
  );
};
