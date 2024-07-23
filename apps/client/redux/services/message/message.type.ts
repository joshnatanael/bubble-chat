import { MessageModel } from "@/redux/slices";

// ========================== SEND MESSAGE ==========================

export interface SendMessageArgs {
  content: string;
  chatroomId: string;
}

export interface SendMessageRes {
  message: MessageModel;
}

// ========================== FETCH MESSAGES BY CHATROOM ID ==========================

export interface FetchMessagesByChatroomIdArgs {
  chatroomId: string;
}

export interface FetchMessagesByChatroomIdRes {
  messages: MessageModel[];
}
