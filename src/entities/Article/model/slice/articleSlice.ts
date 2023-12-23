import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArticle, ArticleSchema, ILike} from "../types/articleSchema.ts";
import {getAllArticles} from "../services/getAllArticles/getAllArticles.ts";

export interface RemoveArticleLikePayload {
  likeId: number;
  articleId: number;
}
export interface AddArticleLikePayload {
  newLike: ILike;
  articleId: number;
}

const initialState: ArticleSchema = {
  articlesList: []
}

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<IArticle[]>) {
      state.articlesList = action.payload;
    },
    removeArticleLike(state, action: PayloadAction<RemoveArticleLikePayload>) {
      state.articlesList = state.articlesList.map(article => {
        if (article.id === action.payload.articleId) {
          return {
            ...article,
            likes: article.likes.filter(like => like.id !== action.payload.likeId)
          } as IArticle;
        }

        return article;
      });
    },
    addLike(state, action: PayloadAction<AddArticleLikePayload>) {
      state.articlesList = state.articlesList.map(article => {
        if (article.id === action.payload.articleId) {
          return {
            ...article,
            likes: [...article.likes, action.payload.newLike]
          };
        }

        return article;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllArticles.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllArticles.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error on getting articles";
      });
  }
});

export const {actions: articleActions, reducer: articleReducer} = articleSlice;