import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article, ArticleSchema} from "../types/articleSchema.ts";
import {getAllArticles} from "../services/getAllArticles/getAllArticles.ts";

const initialState: ArticleSchema = {
  articlesList: []
}

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articlesList = action.payload;
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
      .addCase(getAllArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const {actions: articleActions, reducer: articleReducer} = articleSlice;