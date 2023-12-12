import {LoginSchema} from "../types/loginSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginByUsername} from "../services/loginByUsername/loginByUsername.ts";

const initialState: LoginSchema = {
  username: "",
  password: ""
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginByUsername.pending, (state) => {
          state.isLoading = true;
          state.error = undefined;
        })
        .addCase(loginByUsername.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(loginByUsername.fulfilled, state => {
          state.isLoading = false;
        });
  }
});

export const {reducer: loginReducer, actions: loginActions} = loginSlice;