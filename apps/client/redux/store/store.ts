"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import * as R from "@/redux/slices";
import { userApi } from "../services";

const reducer = {
  [userApi.reducerPath]: userApi.reducer,
  auth: R.userReducer,
};

export const configureStoreWithMiddlewares = (initialState = {}) => {
  const enhancedStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
    preloadedState: initialState,
  });

  return enhancedStore;
};

export const store = configureStoreWithMiddlewares();

setupListeners(store.dispatch);
