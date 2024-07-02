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
    builder.addMatcher(
      chatroomApi.endpoints.fetchChatrooms.matchFulfilled,
      (state, action) => {
        const { chatrooms = {} } = action.payload;

        chatroomAdapter.setAll(state, chatrooms);
      },
    );
  },
});

export const chatroomReducer = chatroomSlice.reducer;
