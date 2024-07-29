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

export const FlexContainer = styled(Box, { name: "FlexContainer" })(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ChatroomNameText = styled(Typography, {
  name: "ChatroomNameText",
})(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const TimeText = styled(Box, { name: "TimeText" })(({ theme }) => ({
  fontSize: "12px !important",
  color: theme.palette.grey[100],
}));

export const UnseenCountBox = styled(Box, { name: "UnseenCountBox" })(
  ({ theme }) => ({
    backgroundColor: theme.palette.blue[100],
    borderRadius: "50%",
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
);

export const UnseenCountText = styled(Typography, { name: "UnseenCountText" })(
  ({ theme }) => ({
    color: theme.palette.common.white,
    lineHeight: 1,
  }),
);
