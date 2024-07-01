import { alpha, styled, TextField } from "@mui/material";

export const TextFieldRoot = styled(TextField, { name: "TextFieldRoot" })(
  ({ theme }) => ({
    "&.MuiFormControl-marginNormal": {
      margin: "0 0 28px",

      [theme.breakpoints.up("sm")]: {
        margin: "0 0 36px",
      },
    },

    "&:hover": {
      "& .MuiInputLabel-root": {
        color: theme.palette.primary.main,
      },
    },

    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      marginTop: `0 !important`,
      border: `1px solid ${theme.palette.grey[600]}`,
      overflow: "hidden",
      borderRadius: 4,
      lineHeight: 1.5,
      transition: theme.transitions.create(["border-color", "box-shadow"]),

      [theme.breakpoints.up("sm")]: {
        borderRadius: 8,
      },

      "&:hover": {
        backgroundColor: "transparent",
        borderColor: theme.palette.primary.main,
      },

      "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },

      "&.Mui-error": {
        boxShadow: `${alpha(theme.palette.error.main, 0.5)} 0 0 4px`,
        borderColor: theme.palette.error.main,
      },

      "&.Mui-disabled": {
        opacity: 0.4,
        border: `1px solid ${theme.palette.grey[800]} !important`,
        backgroundColor: "transparent",
      },

      "& .MuiFilledInput-input": {
        padding: `18px 12px 7px`,
        height: "unset",

        [theme.breakpoints.up("sm")]: {
          padding: `23px 16px 7px`,
        },
      },
    },

    "& .MuiInputLabel-root": {
      top: 0,
      left: 0,
      color: theme.palette.grey[600],
      transform: `translate(12px, 14px)`,

      [theme.breakpoints.up("sm")]: {
        transform: `translate(16px, 17px)`,
      },

      "&.MuiInputLabel-shrink": {
        transform: `translate(12px, 6px) scale(0.7143)`,

        [theme.breakpoints.up("sm")]: {
          transform: `translate(16px, 8px) scale(0.75)`,
        },
      },

      "&.Mui-focused": {
        color: theme.palette.primary.main,
      },

      "&.Mui-error": {
        color: theme.palette.error.main,
      },

      "&.Mui-disabled": {
        opacity: 0.4,
        color: `${theme.palette.grey[800]} !important`,
      },
    },

    "& .MuiFormHelperText-root": {
      position: "absolute",
      marginTop: 2,
      marginLeft: 12,
      top: "100%",
      letterSpacing: "inherit",
      color: theme.palette.grey[600],

      [theme.breakpoints.up("sm")]: {
        marginTop: 4,
        marginLeft: 16,
      },

      "&": {
        ...theme.typography.body2,
      },

      "&.Mui-error": {
        color: theme.palette.error.main,
      },

      "&.Mui-disabled": {
        opacity: 0.4,
      },
    },
  }),
);
