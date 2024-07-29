import { Alert, Box, Snackbar, styled } from "@mui/material";
import Image from "next/image";

export const NotificationToastRoot = styled(Snackbar, {
  name: "NotificationToastRoot",
})(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export const NotificationAlert = styled(Alert, {
  name: "NotificationAlert",
})(({ theme }) => ({
  backgroundColor: theme.palette.blue[300],
}));

export const SenderImageContainer = styled(Box, {
  name: "SenderImageContainer",
})(() => ({
  position: "relative",
  width: 48,
  height: 48,
  borderRadius: "50%",
  overflow: "hidden",
}));

export const SenderImageImage = styled(Image, {
  name: "SenderImageImage",
})(() => ({
  objectFit: "cover",
}));
