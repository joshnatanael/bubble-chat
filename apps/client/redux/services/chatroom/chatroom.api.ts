import { createApi } from "@reduxjs/toolkit/query/react";
import { normalize } from "normalizr";
import { baseQueryWithReauth } from "@/redux/base-query/base-query-with-reauth";
import * as T from "./chatroom.type";
import { API_BASE } from "@/constants";
import { chatroomEntity } from "@/lib/entities";

export const chatroomApi = createApi({
  reducerPath: "chatroomApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    fetchChatrooms: builder.query<T.NormalizedFetchChatroomsRes, unknown>({
      query: () => ({
        url: `${API_BASE}/chatrooms`,
        method: "GET",
      }),
      transformResponse: (response: T.FetchChatroomsRes) => {
        return normalize(response.chatrooms || {}, [chatroomEntity]).entities;
      },
    }),
    fetchChatroomDetails: builder.query<
      T.NormalizedFetchChatroomDetailsRes,
      T.FetchChatroomDetailsArgs
    >({
      query: ({ chatroomId }) => ({
        url: `${API_BASE}/chatrooms/${chatroomId}`,
        method: "GET",
      }),
      transformResponse: (response: T.FetchChatroomDetailsRes) => {
        return normalize(response.chatroom || {}, chatroomEntity).entities;
      },
    }),
  }),
});

export const { useFetchChatroomsQuery, useFetchChatroomDetailsQuery } =
  chatroomApi;
