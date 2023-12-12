export interface SignupSchema {
  username: string;
  password: string;
  fullname: string;
  error?: string;
  isLoading?: boolean;
}