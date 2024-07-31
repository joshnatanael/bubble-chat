import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { chatroomApi } from "@/redux/services";
import { ChatroomModel } from "./chatroom.type";

export const chatroomAdapter = createEntityAdapter<ChatroomModel>();

const chatroomSlice = createSlice({
  name: "chatroom",
  initialState: chatroomAdapter.getInitialState({
    selectedChatroomId: "",
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        chatroomApi.endpoints.fetchChatrooms.matchFulfilled,
        (state, action) => {
          const { chatrooms = {} } = action.payload;

          chatroomAdapter.setAll(state, chatrooms);
        },
      )
      .addMatcher(
        chatroomApi.endpoints.fetchChatroomDetails.matchFulfilled,
        (state, action) => {
          const { chatrooms = {} } = action.payload;

          chatroomAdapter.upsertMany(state, chatrooms);

          const { chatroomId } = action.meta.arg.originalArgs;

          if (!chatroomId) return;

          state.selectedChatroomId = chatroomId;
        },
      )
      .addMatcher(
        chatroomApi.endpoints.leaveChatroom.matchFulfilled,
        (state, action) => {
          const { chatroomId } = action.meta.arg.originalArgs;

          chatroomAdapter.removeOne(state, chatroomId);
        },
      );
  },
});

export const chatroomReducer = chatroomSlice.reducer;
