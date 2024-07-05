import { UserModel } from "../user";

export interface MessageModel {
  id: string;
  content: string;
  user: UserModel;
  isDeleted: boolean;
  createdAt: string;
}

export interface ChatroomModel {
  id: string;
  name: string;
  picture: string;
  messages: MessageModel[];
  users: UserModel[];
}
