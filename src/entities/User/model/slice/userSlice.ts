import {User, UserSchema} from "../types/userSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    }
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;