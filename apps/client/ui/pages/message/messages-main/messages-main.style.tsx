import { Box, IconButton, MenuItem, Typography, styled } from "@mui/material";
import { PopoverMenu } from "@repo/ui/popover-menu";

export const MessagesMainRoot = styled(Box, { name: "MessagesMainRoot" })(
  () => ({
    display: "flex",
    height: "100%",
  }),
);

export const LeftSection = styled(Box, { name: "LeftSection" })(() => ({
  flexBasis: "30%",
  overflow: "hidden",
}));

export const Header = styled(Box, { name: "Header" })(({ theme }) => ({
  padding: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.yellow[100],
}));

export const ActionHeaderContainer = styled(Box, {
  name: "ActionHeaderContainer",
})(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: -8,
}));

export const StyledIconButton = styled(IconButton, {
  name: "StyledIconButton",
})(() => ({
  marginLeft: 8,
}));

export const ChatroomContainer = styled(Box, { name: "ChatroomContainer" })(
  () => ({
    height: "100%",
    overflowY: "scroll",
  }),
);

export const PopoverMenuRoot = styled(PopoverMenu, { name: "PopoverMenuRoot" })(
  () => ({
    ".MuiMenu-paper": {
      minWidth: "210px",
    },
  }),
);

export const PopoverMenuItem = styled(MenuItem, { name: "PopoverMenuItem" })(
  () => ({
    "&.MuiMenuItem-root": {
      padding: 12,
    },
  }),
);

export const LogoutText = styled(Typography, { name: "LogoutText" })(
  ({ theme }) => ({
    color: theme.palette.red[500],
  }),
);

export const RightSection = styled(Box, { name: "RightSection" })(
  ({ theme }) => ({
    flexBasis: "70%",
    borderLeft: `1px solid ${theme.palette.grey[200]}`,
    display: "flex",
    flexDirection: "column",
  }),
);

export const ChatroomLeftHeader = styled(Box, { name: "ChatroomLeftHeader" })(
  () => ({
    display: "flex",
    gap: 12,
  }),
);

export const MessagesContainer = styled(Box, {
  name: "MessagesContainer",
})(() => ({
  padding: 24,
  flexGrow: 1,
  overflowY: "scroll",
}));

export const ChatroomInputContainer = styled(Box, {
  name: "ChatroomInputContainer",
})(() => ({
  padding: 24,
}));
