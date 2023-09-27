import { IAuthor } from "./IAuthor";

export interface IArticle {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	content:  string;
	media?: string;
	likes: number;
	
	author: IAuthor;
	userId: number;
}