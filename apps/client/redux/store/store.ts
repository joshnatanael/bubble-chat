"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import * as R from "@/redux/slices";
import { chatroomApi, userApi } from "../services";

const reducer = {
  [userApi.reducerPath]: userApi.reducer,
  [chatroomApi.reducerPath]: chatroomApi.reducer,
  user: R.userReducer,
  chatrooms: R.chatroomReducer,
};

export const configureStoreWithMiddlewares = (initialState = {}) => {
  const enhancedStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(chatroomApi.middleware),
    preloadedState: initialState,
  });

  return enhancedStore;
};

export const store = configureStoreWithMiddlewares();

setupListeners(store.dispatch);
