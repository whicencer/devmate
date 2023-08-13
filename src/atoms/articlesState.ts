import { atom, selector } from 'recoil';
import { IArticle } from '../app/typings/IArticle';
import axios from '../app/configs/axios';

export const articlesState = atom({
	key: 'articles',
	default: [] as IArticle[],
});

export const articlesQuery = selector({
  key: 'articlesQuery',
  get: async () => {
    const response = await axios.get(`/articles`);
    return response.data;
  }
});