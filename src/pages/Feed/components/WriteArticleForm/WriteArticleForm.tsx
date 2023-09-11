import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";

import { Button } from "../../../../shared/ui/Button";
import Textarea from "../../../../shared/ui/Textarea";
import styles from "../../styles.module.scss";
import { articlesState } from "../../../../atoms/articlesState";
import { ArticleService } from "../../../../services/article/articles.service";
import { userState } from "../../../../atoms/userState";

export const WriteArticleForm = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setArticles] = useRecoilState(articlesState);
	const [user] = useRecoilState(userState);
	const [articleText, setArticleText] = useState<string>("");
	const { createArticle } = new ArticleService();

	const handleAddArticle = async () => {
		if (articleText.length < 1) {
			toast.error("Too short story...");
		} else {
			try {
				const res = await createArticle({ content: articleText }, user.token)
				const newArticle = res.data;
				setArticles(articles => [newArticle, ...articles]);
				setArticleText("");
			} catch (error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data.message);
				} else {
					toast.error("Some error occured");
				}
			}
		}
	};

  return (
    <div className={styles.feedInput}>
			<Textarea
				placeholder="Tell your mates something interesting..."
				value={articleText}
				onChange={(e) => setArticleText(e.target.value)}
			/>
			<Button onClick={handleAddArticle}>Add post</Button>
    </div>
  );
};