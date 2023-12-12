import {atom} from "recoil";
import {SignupSchema} from "../types/signupSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
  }
});

export const {reducer: signupReducer, actions: signupActions} = signupForm;