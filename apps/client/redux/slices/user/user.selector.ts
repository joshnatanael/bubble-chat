import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const selectAuth = (state: RootState) => state.auth;

export const selectAuthenticatedUser = createSelector(
  selectAuth,
  (auth) => auth.user,
);

export const selectAccessToken = createSelector(
  selectAuth,
  (auth) => auth.token,
);

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (auth) => auth.isLoggedIn,
);
