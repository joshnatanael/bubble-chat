import { UserModel } from "../user";

export interface MessageModel {
  id: string;
  content: string;
  user: UserModel;
  isDeleted: boolean;
  createdAt: string;
}
