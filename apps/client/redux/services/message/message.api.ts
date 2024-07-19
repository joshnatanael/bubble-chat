import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/redux/base-query/base-query-with-reauth";
import * as T from "./message.type";
import { API_BASE } from "@/constants";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    sendMessage: builder.mutation<T.SendMessageRes, T.SendMessageArgs>({
      query: ({ content, chatroomId }) => ({
        url: `${API_BASE}/messages`,
        method: "POST",
        body: {
          content,
          chatroomId,
        },
      }),
    }),
  }),
});

export const { useSendMessageMutation } = messageApi;
