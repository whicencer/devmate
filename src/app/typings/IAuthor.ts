import { IArticle } from "./IArticle";
import { TRoles } from "./TRoles";

export interface IAuthor {
	id: number;
	createdAt: Date;
	updatedAt: Date;

	email: string;
	username: string;
	fullname: string;
	profilePicture?: string;
	role: TRoles;

	articles: IArticle;
}