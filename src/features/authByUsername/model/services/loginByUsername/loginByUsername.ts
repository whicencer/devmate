import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import {User} from "../../../../../entities/User";
import {userActions} from "../../../../../entities/User/model/slice/userSlice.ts";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:3000/auth/signin", {
          username: authData.username,
          password: authData.password
        })

        if (!response.data) {
          throw new Error();
        }

        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue("error");
      }
    }
);