"use client";

import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useRouter } from "next-nprogress-bar";
import { selectAuthenticatedUser, selectIsLoggedIn } from "@/redux/slices";
import { useCurrentUserQuery } from "@/redux/services";

const LoginGuard: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  const router = useRouter();

  const user = useSelector(selectAuthenticatedUser);
  const { error, isLoading } = useCurrentUserQuery({}, { skip: !!user });
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (error) {
      router.push("/login");
    }
  }, [error]);

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return children;
};

export default LoginGuard;
