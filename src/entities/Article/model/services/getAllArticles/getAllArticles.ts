import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import {IArticle} from "../../types/articleSchema.ts";
import {articleActions} from "../../slice/articleSlice.ts";
import { StateSchema } from "../../../../../app/providers/store/config/stateSchema.ts";

export const getAllArticles = createAsyncThunk<IArticle>(
  "articles/getAllArticles",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as StateSchema;

    try {
      const response = await axios.get("http://localhost:3000/articles", {
        headers: {
          Authorization: `Bearer ${state.user.authData?.accessToken}`
        }
      });

      thunkAPI.dispatch(articleActions.setArticles(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);