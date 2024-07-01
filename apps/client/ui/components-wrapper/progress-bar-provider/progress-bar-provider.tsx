"use client";

import { useTheme } from "@mui/material";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

const ProgressBarProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const { children } = props;

  const theme = useTheme();

  return (
    <>
      {children}
      <AppProgressBar
        color={theme.palette.primary.main}
        height="3px"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;
