"use client";

import React, { useMemo, useState } from "react";
import { Toast } from "@repo/ui/toast";
import ToastProviderContext from "./toast-provider-context";
import { ShowToast, ToastMessage, ToastVariant } from "./toast-provider.type";

const ToastProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children, ...otherProps } = props;

  const [message, setMessage] = useState<ToastMessage>("");
  const [open, setOpen] = useState<ToastVariant>(undefined);

  const showToast: ShowToast = (message, variant = "error") => {
    setMessage(message);
    setOpen(variant);
  };

  const resetToast = () => {
    setOpen(undefined);
  };

  const contextValue = useMemo(
    () => ({
      showToast,
    }),
    [showToast],
  );

  const memoizedChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <ToastProviderContext.Provider value={contextValue} {...otherProps}>
      {memoizedChildren}
      <Toast message={message} open={open} onClose={resetToast} />
    </ToastProviderContext.Provider>
  );
};

export default ToastProvider;
