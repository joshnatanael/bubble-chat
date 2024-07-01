"use client";

import { createContext, useContext } from "react";
import { ToastProviderInitialContext } from "./toast-provider.type";

const ToastProviderContext = createContext<
  ToastProviderInitialContext | undefined
>(undefined);
export default ToastProviderContext;

export const useToastProviderContext = () => {
  const context = useContext(ToastProviderContext);

  if (!context) {
    throw new Error(
      "Warning! Extracting context without wrapping your component with the Toast Provider",
    );
  }

  return context;
};
