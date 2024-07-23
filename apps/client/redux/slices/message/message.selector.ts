import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const selectMessage = (state: RootState) => state.messages;

export const selectChatroomMessages = createSelector(
  selectMessage,
  (message) => message.messages,
);
