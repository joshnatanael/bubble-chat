export interface UserModel {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  status?: string;
  username: string;
}

export interface UserState {
  token?: string;
  isLoggedIn?: boolean;
  user?: UserModel;
}
