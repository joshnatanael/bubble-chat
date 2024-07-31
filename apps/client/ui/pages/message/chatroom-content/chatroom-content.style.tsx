import {
  Box,
  IconButton,
  Input,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import { PopoverMenu } from "@repo/ui/popover-menu";
import Image from "next/image";

export const Header = styled(Box, { name: "Header" })(({ theme }) => ({
  padding: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.navy,
  color: theme.palette.common.white,
}));

export const ChatroomLeftHeader = styled(Box, { name: "ChatroomLeftHeader" })(
  () => ({
    display: "flex",
    gap: 12,
  }),
);

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

export const LeaveText = styled(Typography, { name: "LeaveText" })(
  ({ theme }) => ({
    color: theme.palette.red[500],
  }),
);

export const MessagesContainer = styled(Box, {
  name: "MessagesContainer",
})(() => ({
  padding: 24,
  flexGrow: 1,
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column-reverse",
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

  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
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
