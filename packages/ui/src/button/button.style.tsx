import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

export const ButtonRoot = styled(LoadingButton, { name: "ButtonRoot" })(({
  theme,
}) => {
  return {
    textTransform: "capitalize",
    minHeight: "unset",

    "&.MuiButton-outlined": {
      backgroundColor: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.grey[50],
      },
    },

    "&.MuiButton-sizeLarge": {
      padding: `16px 16px`,
      borderRadius: 8,

      "&.MuiButton-outlined": {
        padding: `15px 15px`,
      },

      "& .MuiCircularProgress-root": {
        height: `24px !important`,
        width: `24px !important`,
      },
    },

    "&.MuiButton-sizeMedium": {
      padding: `12px 16px`,
      borderRadius: 8,

      "&.MuiButton-outlined": {
        padding: `11px 15px`,
      },

      "& .MuiCircularProgress-root": {
        height: `24px !important`,
        width: `24px !important`,
      },
    },

    "&.MuiButton-sizeSmall": {
      padding: `6px 12px`,
      borderRadius: 4,

      "&.MuiButton-outlined": {
        padding: `5px 11px`,
      },

      "& .MuiCircularProgress-root": {
        height: `21px !important`,
        width: `21px !important`,
      },
    },
  };
});
