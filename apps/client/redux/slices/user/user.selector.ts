import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const selectUser = (state: RootState) => state.user;

export const selectAuthenticatedUser = createSelector(
  selectUser,
  (user) => user.user,
);

export const selectAccessToken = createSelector(
  selectUser,
  (user) => user.token,
);

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.isLoggedIn,
);
