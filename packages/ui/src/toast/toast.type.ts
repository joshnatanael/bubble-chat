import { SnackbarProps } from "@mui/material";
import React from "react";

export interface ToastProps extends Omit<SnackbarProps, "open" | "onClose"> {
  open?: "success" | "error" | "info";
  message?: React.ReactNode;
  onClose?: () => void;
}
