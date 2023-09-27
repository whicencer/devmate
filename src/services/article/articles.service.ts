import axios from "../../app/configs/axios";
import { ICreateArticle } from "./article.typings";

export class ArticleService {
	async createArticle({ content, media }: ICreateArticle, token: string | null) {
		return axios.post('/articles', {
			content,
			media
		}, {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		});
	}
}