import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import {Article} from "../../types/articleSchema.ts";
import {articleActions} from "../../slice/articleSlice.ts";

export const getAllArticles = createAsyncThunk<Article>(
  "articles/getAllArticles",
  async (_, thunkAPI) => {
    const { accessToken } = thunkAPI.getState().user.authData;

    try {
      const response = await axios.get("http://localhost:3000/articles", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      thunkAPI.dispatch(articleActions.setArticles(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);