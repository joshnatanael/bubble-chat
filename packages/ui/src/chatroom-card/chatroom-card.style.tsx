import { Box, styled } from "@mui/material";

export const ChatroomCardRoot = styled(Box, { name: "ChatroomCardRoot" })(
  ({ theme }) => ({
    display: "flex",
    padding: 12,
    gap: 12,
    borderBottom: `1px solid ${theme.palette.grey[50]}`,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.blue[50],
    },
  }),
);

export const TextContainer = styled(Box, { name: "TextContainer" })(() => ({
  flexGrow: 1,
}));

export const NameTimeContainer = styled(Box, { name: "NameTimeContainer" })(
  () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
);

export const TimeText = styled(Box, { name: "TimeText" })(({ theme }) => ({
  fontSize: "12px !important",
  color: theme.palette.grey[100],
}));
