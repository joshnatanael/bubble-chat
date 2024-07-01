import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { CustomBaseQuery, RootState } from "@/redux/store";

export const basicBaseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  credentials: "include",
}) as CustomBaseQuery;
