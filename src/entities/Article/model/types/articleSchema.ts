export interface Author {
  id:             number;
  username:       string;
  fullname:       string;
  profilePicture: string;
  role:           string;
}
export interface Article {
  id:        number;
  createdAt: Date;
  updatedAt: Date;
  content:   string;
  media:     string;
  likes:     number;
  userId:    number;
  author:    Author;
}

export interface ArticleSchema {
  articlesList: Article[];
  isLoading?: boolean;
  error?: string;
}