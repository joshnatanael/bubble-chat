import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/redux/base-query/base-query-with-reauth";
import * as T from "./user.type";
import { API_BASE } from "@/constants";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    register: builder.mutation<T.RegisterRes, T.RegisterArgs>({
      query: ({ email, firstName, lastName, password, username }) => ({
        url: "/api/auth/register",
        method: "POST",
        body: {
          email,
          firstName,
          lastName,
          password,
          username,
        },
      }),
    }),

    login: builder.mutation<T.LoginRes, T.LoginArgs>({
      query: ({ credential, password }) => ({
        url: "/api/auth/login",
        method: "POST",
        body: {
          credential,
          password,
        },
      }),
    }),

    currentUser: builder.query<T.CurrentUserRes, unknown>({
      query: () => ({ url: `${API_BASE}/users/current` }),
    }),

    logout: builder.query({
      query: () => ({ url: `/api/auth/logout` }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useCurrentUserQuery,
  useLogoutQuery,
} = userApi;
