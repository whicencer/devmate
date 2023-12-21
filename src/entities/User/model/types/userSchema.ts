export interface User {
  id: number;
  username: string;
  fullname: string;
  profilePicture?: string;
}

export interface UserSchema {
  authData?: User
}