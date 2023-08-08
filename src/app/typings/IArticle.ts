import { IAuthor } from "./IAuthor";

export interface IArticle {
    id: number;
    author:       IAuthor;
    articleText:  string;
    mediaContent?: string;
    likes: number;
    timestamp: Date;
}