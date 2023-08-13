import { IUser } from "./IAuthor";

export interface IArticle {
    id: string;
    author:       IUser;
    articleText:  string;
    mediaContent?: string;
    likes: number;
    timestamp: Date;
}