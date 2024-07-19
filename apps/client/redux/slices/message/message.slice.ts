import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { MessageModel } from "./message.type";

export const messageAdapter = createEntityAdapter<MessageModel>();

const messageSlice = createSlice({
  name: "message",
  initialState: messageAdapter.getInitialState({}),
  reducers: {},
});

export const messageReducer = messageSlice.reducer;
