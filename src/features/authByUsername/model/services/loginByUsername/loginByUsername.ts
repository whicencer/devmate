import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../../app/configs/axios";
import {User} from "../../../../../entities/User";
import {userActions} from "../../../../../entities/User/model/slice/userSlice.ts";
import {USER_LOCAL_STORAGE_KEY} from "../../../../../shared/const/localStorage.ts";
import {toast} from "react-toastify";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export interface LoginByUsernameResponse {
  accessToken: string;
  fullname: string;
  profilePicture: string;
  username: string;
}

const checkData = (responseData: LoginByUsernameResponse) => {
  if (!responseData) {
    throw new Error();
  }
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:3000/auth/signin", {
          username: authData.username,
          password: authData.password
        })

        checkData(response.data);

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));
        toast.success("Logged in");

        return response.data;
      } catch (error) {
        toast.error("Invalid password or username");
        return thunkAPI.rejectWithValue("error");
      }
    }
);