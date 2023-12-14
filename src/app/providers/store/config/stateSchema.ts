import {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "../../../../features/authByUsername/model/types/loginSchema.ts";
import {SignupSchema} from "../../../../features/signUp/model/types/signupSchema.ts";
import {ArticleSchema} from "../../../../entities/Article/model/types/articleSchema.ts";

export interface StateSchema {
  user: UserSchema;
  articles: ArticleSchema;
  loginForm: LoginSchema;
  signupForm: SignupSchema;
}