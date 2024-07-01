import React from "react";
import { LoadingButtonProps } from "@mui/lab";

export interface ButtonProps extends LoadingButtonProps {
  component?: React.ElementType;
}
