import { UserModel } from "../user";

export interface MessageModel {
  id: string;
  content: string;
  userId: string;
  user?: UserModel;
  isDeleted: boolean;
  createdAt: string;
}

export interface MessageState {
  messages: MessageModel[];
}
