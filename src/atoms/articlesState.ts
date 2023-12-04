import { atom } from 'recoil';

export const articlesState = atom({
	key: 'articles',
	default: [],
});