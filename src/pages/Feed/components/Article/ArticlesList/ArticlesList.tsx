import { useEffect } from 'react';
import { IArticle } from '../../../../../app/typings/IArticle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { articlesQuery, articlesState } from '../../../../../atoms/articlesState';
import { Article } from '../Article';

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
						<Article key={article.id} article={article} />
					);
				})
			}
    </>
  );
};
