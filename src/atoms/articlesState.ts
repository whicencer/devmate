import { atom, selector } from "recoil";
import { IArticle } from "../app/typings/IArticle";
import axios from "axios";

export const todosState = atom({
	key: 'articles',
	default: [] as IArticle[],
});

export const articlesQuery = selector({
  key: 'articlesQuery',
  get: async () => {
    const response = await axios.get('http://localhost:3000/articles');
    return response.data;
  },
});