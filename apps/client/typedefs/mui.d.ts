/* eslint-disable import/no-extraneous-dependencies */
import { Color } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

interface Layout {
  grid: object;
  container: object;
  dashboardContainer: object;
}

interface LayoutOptions {
  grid?: object;
  container?: object;
  dashboardContainer?: object;
}

declare module "@mui/material/styles" {
  interface Theme {
    layout: Layout;
  }

  interface ThemeOptions {
    layout?: LayoutOptions;
  }

  interface TypeBackground {
    navy?: string;
    blue?: string;
  }

  interface PaletteOptions {
    green?: ColorPartial;
    orange?: ColorPartial;
    yellow?: ColorPartial;
    blue?: ColorPartial;
    red?: ColorPartial;
    purple?: ColorPartial;
    black?: ColorPartial;
  }

  interface Palette {
    green: Color;
    orange: Color;
    yellow: Color;
    blue: Color;
    red: Color;
    purple: Color;
    black: Color;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    "primary-light": true;
    grey: true;
  }
}
