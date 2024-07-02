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
