"use client";

import { ExpandMore } from "@mui/icons-material";
import { createTheme, darken, lighten } from "@mui/material";

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440,
    },
  },
  palette: {
    grey: {
      50: "#EEEEEE",
      100: "#CBCBCB",
      200: "#B2B2B2",
      300: "#8F8F8F",
      400: "#797979",
      500: "#585858",
      600: "#4B4B4B",
      700: "#3E3E3E",
      800: "#303030",
      900: "#252525",
    },
    green: {
      50: "#E6F2EE",
      100: "#B2D5C9",
      200: "#8DC1AF",
      300: "#59A58B",
      400: "#399475",
      500: "#077952",
      600: "#066E4B",
      700: "#05563A",
      800: "#04432D",
      900: "#033322",
    },
    orange: {
      50: "#F6EBE9",
      100: "#F5D1C4",
      200: "#F0B39E",
      300: "#EC9879",
      400: "#EA835C",
      500: "#EC6E3E",
      600: "#E1683A",
      700: "#D46136",
      800: "#C65A31",
      900: "#AE4D29",
    },
    yellow: {
      50: "#FFF8E6",
      100: "#FFE9B0",
      200: "#FFDE8A",
      300: "#FFCF54",
      400: "#FFC633",
      500: "#FFB800",
      600: "#E8A700",
      700: "#B58300",
      800: "#8C6500",
      900: "#6B4D00",
    },
    blue: {
      50: "#E6EEFA",
      100: "#B0CAEF",
      200: "#8AB1E8",
      300: "#548DDD",
      400: "#3377D6",
      500: "#0055CC",
      600: "#004DBA",
      700: "#003C91",
      800: "#002F70",
      900: "#002456",
    },
    red: {
      50: "#FDECEB",
      100: "#F8C3C0",
      200: "#F5A7A1",
      300: "#F07E76",
      400: "#ED655C",
      500: "#DA382C",
      600: "#C0251A",
      700: "#A52D24",
      800: "#80231C",
      900: "#621A15",
    },
    purple: {
      50: "#EFEBF7",
      100: "#CDC0E7",
      200: "#B5A2DB",
      300: "#9478CB",
      400: "#7F5DC1",
      500: "#5F35B1",
      600: "#5630A1",
      700: "#43267E",
      800: "#341D61",
      900: "#28164A",
    },
    common: {
      black: "#333333",
      white: "#FFFFFF",
    },
    background: {
      green: "#E5F9EA",
      blue: "#EBF3FD",
      purple: "#F3E7FF",
      yellow: "#FFE6A7",
      red: "#FDEAED",
    },
  },
  shadows: [
    "none",
    "0px 1px 16px rgba(217, 217, 217, 0.25)",
    "0px 2px 16px rgba(217, 217, 217, 0.25)",
    "0px 3px 16px rgba(217, 217, 217, 0.25)",
    "0px 4px 16px rgba(217, 217, 217, 0.25)",
    "0px 5px 16px rgba(217, 217, 217, 0.25)",
    "0px 6px 16px rgba(217, 217, 217, 0.25)",
    "0px 7px 16px rgba(217, 217, 217, 0.25)",
    "0px 8px 16px rgba(217, 217, 217, 0.25)",
    "0px 9px 16px rgba(217, 217, 217, 0.25)",
    "0px 10px 16px rgba(217, 217, 217, 0.25)",
    "0px 11px 16px rgba(217, 217, 217, 0.25)",
    "0px 12px 16px rgba(217, 217, 217, 0.25)",
    "0px 13px 16px rgba(217, 217, 217, 0.25)",
    "0px 14px 16px rgba(217, 217, 217, 0.25)",
    "0px 15px 16px rgba(217, 217, 217, 0.25)",
    "0px 16px 16px rgba(217, 217, 217, 0.25)",
    "0px 17px 16px rgba(217, 217, 217, 0.25)",
    "0px 18px 16px rgba(217, 217, 217, 0.25)",
    "0px 19px 16px rgba(217, 217, 217, 0.25)",
    "0px 20px 16px rgba(217, 217, 217, 0.25)",
    "0px 21px 16px rgba(217, 217, 217, 0.25)",
    "0px 22px 16px rgba(217, 217, 217, 0.25)",
    "0px 23px 16px rgba(217, 217, 217, 0.25)",
    "0px 24px 16px rgba(217, 217, 217, 0.25)",
  ],
});

const {
  breakpoints,
  typography: { pxToRem, fontWeightBold, fontWeightRegular },
} = baseTheme;

export const theme = createTheme(baseTheme, {
  palette: {
    primary: {
      main: baseTheme.palette.blue[700],
      dark: darken(baseTheme.palette.blue[700], 0.2),
      light: lighten(baseTheme.palette.blue[700], 0.2),
      contrastText: baseTheme.palette.common.white,
    },
    secondary: {
      main: baseTheme.palette.purple[500],
      dark: baseTheme.palette.orange[700],
      light: baseTheme.palette.orange[50],
      contrastText: baseTheme.palette.common.white,
    },
    info: {
      main: baseTheme.palette.blue[500],
      dark: darken(baseTheme.palette.blue[500], 0.2),
      light: lighten(baseTheme.palette.blue[500], 0.2),
      contrastText: baseTheme.palette.common.white,
    },
    success: {
      main: baseTheme.palette.green[700],
      dark: darken(baseTheme.palette.green[700], 0.2),
      light: lighten(baseTheme.palette.green[700], 0.2),
      contrastText: baseTheme.palette.common.white,
    },
    warning: {
      main: baseTheme.palette.yellow[700],
      dark: darken(baseTheme.palette.yellow[700], 0.2),
      light: lighten(baseTheme.palette.yellow[700], 0.2),
      contrastText: baseTheme.palette.common.white,
    },
    error: {
      main: baseTheme.palette.red[700],
      dark: darken(baseTheme.palette.red[700], 0.2),
      light: lighten(baseTheme.palette.red[700], 0.2),
      contrastText: baseTheme.palette.common.white,
    },
    "primary-light": {
      main: baseTheme.palette.green[50],
      dark: darken(baseTheme.palette.green[50], 0.05),
      light: lighten(baseTheme.palette.green[50], 0.05),
      contrastText: baseTheme.palette.green[700],
    },
    grey: {
      main: baseTheme.palette.grey[600],
      dark: darken(baseTheme.palette.grey[600], 0.2),
      light: lighten(baseTheme.palette.grey[600], 0.2),
      contrastText: baseTheme.palette.common.white,
    },
    background: {
      paper: baseTheme.palette.common.white,
      default: baseTheme.palette.common.white,
    },
    text: {
      primary: baseTheme.palette.common.black,
      secondary: baseTheme.palette.grey[500],
    },
  },
  typography: {
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightBold,
      fontSize: pxToRem(34),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(39),
      },
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightBold,
      fontSize: pxToRem(27),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(31),
      },
    },
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightBold,
      fontSize: pxToRem(22),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(25),
      },
    },
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightBold,
      fontSize: pxToRem(18),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(20),
      },
    },
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightBold,
      fontSize: pxToRem(14),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(16),
      },
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightRegular,
      fontSize: pxToRem(14),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(16),
      },
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightRegular,
      fontSize: pxToRem(11),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(13),
      },
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightRegular,
      fontSize: pxToRem(9),
      lineHeight: 1.5,
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(10),
      },
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: fontWeightBold,
      fontSize: pxToRem(14),
      lineHeight: 1.5,
      textTransform: "capitalize",
      [breakpoints.up("sm")]: {
        fontSize: pxToRem(16),
      },
    },
  },
  layout: {
    grid: {
      display: "grid",
      columnGap: 20,
      gridTemplateColumns: "repeat(4, 1fr)",
      [breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(8, 1fr)",
      },
      [breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(12, 1fr)",
      },
    },
    container: {
      margin: "0 16px",
      [breakpoints.up("sm")]: {
        margin: "0 32px",
      },
      [breakpoints.up("md")]: {
        margin: "0 auto",
        maxWidth: 840,
        width: "100%",
      },
      [breakpoints.up("lg")]: {
        margin: "0 200px",
        maxWidth: "none",
        width: "unset",
      },
      [breakpoints.up("xl")]: {
        margin: "0 auto",
        width: "100%",
        maxWidth: 1040,
      },
    },
    contentContainer: {
      margin: "0 16px",
      [breakpoints.up("sm")]: {
        margin: "0 32px",
      },
      [breakpoints.up("md")]: {
        maxWidth: 800,
      },
      [breakpoints.up("lg")]: {
        maxWidth: 1140,
      },
      [breakpoints.up("xl")]: {
        margin: "0 auto",
        maxWidth: 1060,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      [breakpoints.up("sm")]: {
        minHeight: 72,
      },
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <ExpandMore />,
      },
    },
    MuiAlert: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeMedium: {
          padding: 8,
          [breakpoints.up("sm")]: {
            padding: 10,
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        disableElevation: true,
      },
    },
    MuiMenu: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "0px 16px 0px 16px",
          [breakpoints.up("sm")]: {
            padding: "0px 32px 0px 32px",
          },
          [breakpoints.up("md")]: {
            padding: "0 96px 0 96px",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8F8F8",
          height: "6px",
          [breakpoints.up("sm")]: {
            height: "8px",
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        color: "primary",
        siblingCount: 0,
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#D6D6D6",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: `1px solid ${baseTheme.palette.green[700]}`,
          color: `${baseTheme.palette.green[700]} !important`,

          "&.Mui-selected": {
            color: `${baseTheme.palette.common.white} !important`,
            backgroundColor: `${baseTheme.palette.green[700]} !important`,
          },
        },
      },
    },
  },
});
