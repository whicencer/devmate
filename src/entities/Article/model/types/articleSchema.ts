export interface Author {
  id:             number;
  username:       string;
  fullname:       string;
  profilePicture: string;
  role:           string;
}
export interface IArticle {
  id:        number;
  createdAt: Date;
  updatedAt: Date;
  content:   string;
  media:     string;
  likes:     ILike[];
  userId:    number;
  author:    Author;
}

export interface ILike {
  id:        number;
  userId:    number;
  articleId: number;
}

export interface ArticleSchema {
  articlesList: IArticle[];
  isLoading?: boolean;
  error?: string;
}