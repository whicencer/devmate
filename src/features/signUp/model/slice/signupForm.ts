import {SignupSchema} from "../types/signupSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {signupByUsername} from "../services/signupByUsername/signupByUsername.ts";

const initialState: SignupSchema = {
  username: "",
  password: "",
  fullname: ""
};

export const signupForm = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setFullname(state, action: PayloadAction<string>) {
      state.fullname = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupByUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signupByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const {reducer: signupReducer, actions: signupActions} = signupForm;