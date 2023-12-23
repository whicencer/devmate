import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import { articleActions } from "../../slice/articleSlice";
import { StateSchema } from "../../../../../app/providers/store/config/stateSchema";
// import {articleActions} from "../../slice/articleSlice.ts";

export interface RemoveLikeProps {
  likeId: number;
  articleId: number;
}

export const removeLike = createAsyncThunk<void, RemoveLikeProps>(
  "articles/removeLike",
  async ({ likeId, articleId }, thunkAPI) => {
    const state = thunkAPI.getState() as StateSchema;
    const options = {
      method: 'POST',
      url: `http://localhost:3000/articles/like/${articleId}`,
      headers: {
        Authorization: `Bearer ${state.user.authData?.accessToken}`
      },
      data: {likeId}
    };

    try {
      const response = await axios.request(options);

      thunkAPI.dispatch(articleActions.removeArticleLike({ articleId, likeId }));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);