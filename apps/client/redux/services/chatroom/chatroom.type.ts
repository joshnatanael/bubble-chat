import { UserModel } from "@/redux/slices";
import { ChatroomModel } from "@/redux/slices/chatroom";

// ========================== FETCH CHATROOMS ==========================

export interface FetchChatroomsRes {
  chatrooms: ChatroomModel[];
}

export interface NormalizedFetchChatroomsRes {
  users?: Record<string, UserModel>;
  chatrooms?: Record<string, ChatroomModel>;
}

// ========================== FETCH CHATROOMS DETAILS ==========================

export interface FetchChatroomDetailsArgs {
  chatroomId?: string;
}

export interface FetchChatroomDetailsRes {
  chatroom: ChatroomModel;
}

export interface NormalizedFetchChatroomDetailsRes {
  users?: Record<string, UserModel>;
  chatrooms?: Record<string, ChatroomModel>;
}

// ========================== LEAVE CHATROOM ==========================

export interface LeaveChatroomArgs {
  chatroomId: string;
}
