import axios from '../../../../../app/configs/axios';

export const createArticle = async (content: string) => {
	const res = await axios.post('/articles', { content });
	
	return res.data;
}