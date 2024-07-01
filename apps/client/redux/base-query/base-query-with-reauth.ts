import { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { resetAuth, tokenReceived } from "@/redux/slices";
import { RequestError } from "@/redux/store";
import { basicBaseQuery } from "@/redux/base-query/basic-base-query";

const mutex = new Mutex();

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  RequestError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await basicBaseQuery(args, api, extraOptions);

  if (
    result.error &&
    result.error.status === 401 &&
    result.error.data?.code === "Unauthorized"
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        // try to get a new token
        const refreshResult = await basicBaseQuery(
          "/api/auth/refresh-token",
          api,
          extraOptions,
        );

        if (refreshResult.data) {
          // store the new token
          api.dispatch(tokenReceived(refreshResult.data));
          // retry the initial query
          result = await basicBaseQuery(args, api, extraOptions);
        } else {
          api.dispatch(resetAuth());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await basicBaseQuery(args, api, extraOptions);
    }
  }
  return result;
};
