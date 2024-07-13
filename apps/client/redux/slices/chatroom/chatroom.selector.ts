import { createSelector } from "@reduxjs/toolkit";
import memoize from "lodash/memoize";
import { RootState } from "@/redux/store";
import { chatroomAdapter } from "./chatroom.slice";

const { selectEntities, selectAll } = chatroomAdapter.getSelectors<RootState>(
  (state) => state.chatrooms,
);

export const selectAllChatrooms = createSelector(
  selectAll,
  (chatrooms) => chatrooms,
);

export const selectChatroomById = memoize((chatroomId?: string) =>
  createSelector(
    selectEntities,
    (chatroomEntities) => chatroomEntities[chatroomId || ""] || null,
  ),
);

const selectChatrooms = (state: RootState) => state.chatrooms;

export const selectSelectedChatroomId = createSelector(
  selectChatrooms,
  (chatrooms) => chatrooms.selectedChatroomId,
);

export const selectSelectedChatroom = createSelector(
  selectSelectedChatroomId,
  selectEntities,
  (selectedChatroomId, chatroomEntities) =>
    chatroomEntities[selectedChatroomId || ""] || null,
);
