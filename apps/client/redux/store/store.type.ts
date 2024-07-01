import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import { configureStoreWithMiddlewares } from "./store";

export interface RequestError {
  data?: {
    code: string;
    error: string;
    status: number;
    success: boolean;
  };
  status: number;
}

export type RequestErrorReturn = RequestError | SerializedError;

export type CustomBaseQuery = BaseQueryFn<
  string | FetchArgs,
  unknown,
  RequestError,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  FetchBaseQueryMeta
>;

export type AppStore = ReturnType<typeof configureStoreWithMiddlewares>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
