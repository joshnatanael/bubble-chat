import { Box, styled, Typography } from "@mui/material";
import { BubbleProps } from "./bubble.type";
import { Avatar } from "../avatar";

export const BubbleRoot = styled(Box, {
  name: "BubbleRoot",
  shouldForwardProp: (props) => props !== "isUserMessage",
})<Pick<BubbleProps, "isUserMessage">>(({ isUserMessage }) => ({
  display: "flex",
  marginBottom: 12,
  gap: 10,

  ...(isUserMessage && {
    flexDirection: "row-reverse",
  }),
}));

export const MessageContainer = styled(Box, {
  name: "MessageContainer",
  shouldForwardProp: (props) => props !== "isUserMessage",
})<Pick<BubbleProps, "isUserMessage">>(({ theme, isUserMessage }) => ({
  padding: "8px 16px",
  borderRadius: 8,
  width: "fit-content",
  maxWidth: 300,

  ...(isUserMessage
    ? {
        borderTopRightRadius: 0,
        backgroundColor: theme.palette.blue[50],
      }
    : {
        borderTopLeftRadius: 0,
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.grey[50]}`,
      }),
}));

export const UserText = styled(Typography, { name: "UserText" })(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.yellow[700],
  }),
);

export const StyledAvatar = styled(Avatar, {
  name: "StyledAvatar",
  shouldForwardProp: (props) => props !== "isSameUser",
})<Pick<BubbleProps, "isSameUser">>(({ isSameUser }) => ({
  ...(isSameUser && {
    visibility: "hidden",
  }),
}));

export const TimeText = styled("span", { name: "TimeText" })(({ theme }) => ({
  marginLeft: 16,
  color: theme.palette.grey[100],
  ...theme.typography.body2,
}));
