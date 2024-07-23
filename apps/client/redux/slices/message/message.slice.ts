import { createSlice } from "@reduxjs/toolkit";
import { MessageState } from "./message.type";
import { messageApi } from "@/redux/services";

const initialState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      messageApi.endpoints.fetchMessagesByChatroomId.matchFulfilled,
      (state, action) => {
        const { messages = [] } = action.payload;

        state.messages = messages;
      },
    );
  },
});

export const messageReducer = messageSlice.reducer;
