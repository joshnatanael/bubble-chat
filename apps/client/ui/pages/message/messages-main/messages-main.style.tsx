import {
  Box,
  IconButton,
  Input,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import { PopoverMenu } from "@repo/ui/popover-menu";
import Image from "next/image";

export const MessagesMainRoot = styled(Box, { name: "MessagesMainRoot" })(
  ({ theme }) => ({
    display: "flex",
    height: "100%",
    backgroundColor: theme.palette.background.blue,
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
  backgroundColor: theme.palette.background.navy,
  color: theme.palette.common.white,
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
})(({ theme }) => ({
  marginLeft: 8,
  color: theme.palette.common.white,
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
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
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
})(({ theme }) => ({
  padding: 18,
  backgroundColor: theme.palette.background.navy,
  display: "flex",
  gap: 12,
}));

export const StyledInput = styled(Input, {
  name: "StyledInput",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.blue,
  color: theme.palette.common.white,
  borderRadius: 12,

  "&.MuiInputBase-root:before": {
    borderBottom: "unset !important",
  },
  "&.MuiInputBase-root:after": {
    borderBottom: "unset !important",
  },
  ".MuiInput-input": {
    padding: "8px 12px",
  },
}));

export const SendButton = styled(IconButton, {
  name: "SendButton",
})(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
}));

export const NoChatroomSelectedSection = styled(Box, {
  name: "NoChatroomSelectedSection",
})(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export const NoChatroomImageContainer = styled(Box, {
  name: "NoChatroomImageContainer",
})(() => ({
  position: "relative",
  width: 200,
  height: 200,
  margin: "0 auto 24px",
}));

export const NoChatroomImage = styled(Image, {
  name: "NoChatroomImage",
})(() => ({
  objectFit: "contain",
}));

export const NoChatroomText = styled(Typography, {
  name: "NoChatroomText",
})(() => ({
  textAlign: "center",
}));
