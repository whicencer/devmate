import { IArticle } from "./IArticle";

export interface IAuthor {
    followers: number;
    articles: IArticle[];
    username: string;
    name: string;
}