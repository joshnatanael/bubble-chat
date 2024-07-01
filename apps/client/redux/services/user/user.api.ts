import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/redux/base-query/base-query-with-reauth";
import * as T from "./user.type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    register: builder.mutation<T.RegisterArgs, T.RegisterArgs>({
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
  }),
});

export const { useRegisterMutation } = userApi;
