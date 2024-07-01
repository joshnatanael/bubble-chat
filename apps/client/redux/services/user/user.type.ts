import { UserModel } from "@/redux/slices/user";

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
