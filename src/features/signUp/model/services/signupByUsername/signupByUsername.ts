import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import {User} from "../../../../../entities/User";
import {userActions} from "../../../../../entities/User/model/slice/userSlice.ts";
import {USER_LOCAL_STORAGE_KEY} from "../../../../../shared/const/localStorage.ts";

export interface SignupByUsernameProps {
  username: string;
  password: string;
  fullname: string;
}

const checkData = (responseData) => {
  if (!responseData) {
    throw new Error();
  }
};

export const signupByUsername = createAsyncThunk<User, SignupByUsernameProps>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:3000/auth/signup", {
          username: authData.username,
          password: authData.password,
          fullname: authData.fullname
        });

        checkData(response.data);

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue("error");
      }
    }
);