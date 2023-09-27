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
import { uploadImage } from "./utils/uploadImage";
import { ImageUploader } from "../../../../shared/components/ImageUploader";

export const WriteArticleForm = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setArticles] = useRecoilState(articlesState);
	const [user] = useRecoilState(userState);
	const [articleText, setArticleText] = useState<string>("");
	const { createArticle } = new ArticleService();

	const [image, setImage] = useState<File | null>(null);

	const handleAddArticle = () => {
		if (articleText.length < 1) {
			toast.error("Too short story...");
		} else {
			try {
				uploadImage(image)?.then(async (url) => {
					const res = await createArticle({ content: articleText, media: url }, user.token);
					const newArticle = res.data;
					setArticles(articles => [newArticle, ...articles]);
				});

				setArticleText("");
				setImage(null);
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
			<div>
				<Textarea
					placeholder="Tell your mates something interesting..."
					value={articleText}
					onChange={(e) => setArticleText(e.target.value)}
				/>
				<ImageUploader image={image} setImage={setImage} />
			</div>
			<Button onClick={handleAddArticle}>Add post</Button>
    </div>
  );
};