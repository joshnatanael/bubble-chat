import { UserModel } from "@/redux/slices/user";

// ========================== REGISTER ACCOUNT ==========================

export interface RegisterArgs {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  username: string;
}

export interface RegisterRes {
  accessToken: string;
  user: UserModel;
}

// ========================== LOGIN ACCOUNT ==========================

export interface LoginArgs {
  credential: string;
  password: string;
}

export interface LoginRes {
  accessToken: string;
  user: UserModel;
}
