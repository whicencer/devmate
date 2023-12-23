export interface User {
  accessToken: string;
  userId: number;
  username: string;
  fullname: string;
  profilePicture?: string;
}

export interface UserSchema {
  authData?: User
}