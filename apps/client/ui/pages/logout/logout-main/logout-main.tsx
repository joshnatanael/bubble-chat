"use client";

import { useRouter } from "next-nprogress-bar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetAuth } from "@/redux/slices";
import { useLogoutQuery } from "@/redux/services";

const LogoutMain: React.FC = () => {
  const { isSuccess, isError } = useLogoutQuery({});
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetAuth());
      router.replace("/login");
    } else if (isError) {
      dispatch(resetAuth());
      router.replace("/login");
    }
  }, [isSuccess, isError]);

  return null;
};

export default LogoutMain;
