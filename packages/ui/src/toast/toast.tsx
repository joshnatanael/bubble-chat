"use client";

import { Snackbar } from "@mui/material";
import React, { memo } from "react";
import { Alert } from "../alert";
import { ToastProps } from "./toast.type";

const Toast: React.FC<ToastProps> = (props) => {
  const { message, open, onClose, ...otherProps } = props;

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        open={open === "success"}
        onClose={handleClose}
        {...otherProps}
      >
        <Alert
          elevation={3}
          severity="success"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {message}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        open={open === "error"}
        onClose={handleClose}
        {...otherProps}
      >
        <Alert
          elevation={3}
          severity="error"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {message}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        open={open === "info"}
        onClose={handleClose}
        {...otherProps}
      >
        <Alert
          elevation={3}
          severity="info"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default memo(Toast);
