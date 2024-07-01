import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
