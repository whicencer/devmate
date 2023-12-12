import {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "../../../../features/authByUsername/model/types/loginSchema.ts";
import {SignupSchema} from "../../../../features/signUp/model/types/signupSchema.ts";

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginSchema;
  signupForm: SignupSchema;
}