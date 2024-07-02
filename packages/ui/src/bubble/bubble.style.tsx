import { Box, styled } from "@mui/material";
import { BubbleProps } from "./bubble.type";

export const BubbleRoot = styled(Box, {
  name: "BubbleRoot",
  shouldForwardProp: (props) => props !== "isUserMessage",
})<Pick<BubbleProps, "isUserMessage">>(({ theme, isUserMessage }) => ({
  padding: "8px 16px",
  borderRadius: 8,
  width: "fit-content",
  maxWidth: 300,

  ...(isUserMessage
    ? {
        borderBottomRightRadius: 0,
        backgroundColor: theme.palette.blue[50],
      }
    : {
        borderBottomLeftRadius: 0,
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.grey[50]}`,
      }),
}));

export const TimeText = styled("span", { name: "TimeText" })(({ theme }) => ({
  marginLeft: 16,
  color: theme.palette.grey[100],
  ...theme.typography.body2,
}));
