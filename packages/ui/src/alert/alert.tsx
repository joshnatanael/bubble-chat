"use client";

import { Alert as MuiAlert, styled } from "@mui/material";

const Alert = styled(MuiAlert, { name: "Alert" })(({ theme }) => ({
  "&.MuiAlert-root": {
    ...theme.typography.body1,
    fontWeight: theme.typography.fontWeightMedium,
  },

  "& .MuiAlert-message": {
    padding: "8px 0",

    [theme.breakpoints.up("sm")]: {
      padding: "7px 0",
    },
  },
}));

Alert.displayName = "Alert";

export default Alert;
