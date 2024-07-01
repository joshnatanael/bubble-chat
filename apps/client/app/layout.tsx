/* eslint-disable @next/next/no-page-custom-font */
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import {
  ProgressBarProvider,
  ReduxProvider,
  ToastProvider,
} from "@/ui/components-wrapper";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ReduxProvider>
              <ProgressBarProvider>
                <ToastProvider>{children}</ToastProvider>
              </ProgressBarProvider>
            </ReduxProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
