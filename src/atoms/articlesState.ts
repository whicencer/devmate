import { atom, selector } from 'recoil';
import { IArticle } from '../app/typings/IArticle';
import axios from '../app/configs/axios';
import { userState } from './userState';

export const articlesState = atom({
	key: 'articles',
	default: [] as IArticle[],
});

export const articlesQuery = selector({
  key: 'articlesQuery',
  get: async ({ get }) => {
    const { token } = get(userState);
    
    const response = await axios.get(`/articles`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  }
});