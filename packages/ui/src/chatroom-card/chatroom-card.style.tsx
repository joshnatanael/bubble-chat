import { Box, styled, Typography } from "@mui/material";

export const ChatroomCardRoot = styled(Box, { name: "ChatroomCardRoot" })(
  ({ theme }) => ({
    display: "flex",
    padding: 12,
    gap: 12,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.blue[100],
    },
  }),
);

export const TextContainer = styled(Box, { name: "TextContainer" })(
  ({ theme }) => ({
    flexGrow: 1,
    color: theme.palette.common.white,
  }),
);

export const NameTimeContainer = styled(Box, { name: "NameTimeContainer" })(
  () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
);

export const ChatroomNameText = styled(Typography, {
  name: "ChatroomNameText",
})(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const TimeText = styled(Box, { name: "TimeText" })(({ theme }) => ({
  fontSize: "12px !important",
  color: theme.palette.grey[100],
}));
