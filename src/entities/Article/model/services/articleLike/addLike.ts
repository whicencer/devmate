import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import { articleActions } from "../../slice/articleSlice";
import { StateSchema } from "../../../../../app/providers/store/config/stateSchema";

export const addLike = createAsyncThunk<void, number>(
  "articles/addLike",
  async (articleId, thunkAPI) => {
    const state = thunkAPI.getState() as StateSchema;
    const options = {
      method: 'POST',
      url: `http://localhost:3000/articles/like/${articleId}`,
      headers: {
        Authorization: `Bearer ${state.user.authData?.accessToken}`
      }
    };

    try {
      const response = await axios.request(options);

      thunkAPI.dispatch(articleActions.addLike({ articleId, newLike: response.data }));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);