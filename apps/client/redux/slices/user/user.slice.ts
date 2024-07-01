import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.type";

const initialState: UserState = {
  token: undefined,
  user: undefined,
  isLoggedIn: Cookies.get("is_logged_in") === "true",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetAuth(state) {
      state.token = undefined;
      state.user = undefined;
      state.isLoggedIn = undefined;
    },
    tokenReceived(state, action) {
      const { accessToken } = action.payload;

      const splittedToken = accessToken.split(" ")[1];
      state.token = splittedToken;
      state.isLoggedIn = true;
    },
  },
});

export const { resetAuth, tokenReceived } = userSlice.actions;

export const userReducer = userSlice.reducer;
