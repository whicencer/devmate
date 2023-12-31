import {User, UserSchema} from "../types/userSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {USER_LOCAL_STORAGE_KEY} from "../../../../shared/const/localStorage.ts";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },
    initState(state) {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      state.authData = JSON.parse(user);
    },
    logout(state) {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    }
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;