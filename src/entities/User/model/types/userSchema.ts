export interface User {
  id: number;
  username: string;
  fullname: string;
}

export interface UserSchema {
  authData?: User
}