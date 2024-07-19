import { MessageModel } from "@/redux/slices";

// ========================== SEND MESSAGE ==========================

export interface SendMessageArgs {
  content: string;
  chatroomId: string;
}

export interface SendMessageRes {
  message: MessageModel;
}
