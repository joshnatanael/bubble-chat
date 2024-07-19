import { MessageModel } from "../message";
import { UserModel } from "../user";

export interface ChatroomModel {
  id: string;
  name?: string;
  alternativeName: string;
  picture: string;
  messages: MessageModel[];
  users: UserModel[];
}
