import { Dialog, DialogActions, styled } from "@mui/material";

export const LeaveChatroomDialogRoot = styled(Dialog, {
  name: "LeaveChatroomDialogRoot",
})(() => ({
  ".MuiDialog-paper": {
    boxShadow: "unset",
    borderRadius: 12,
  },
}));

export const StyledDialogActions = styled(DialogActions, {
  name: "StyledDialogActions",
})(() => ({
  padding: "8px 24px 20px",
}));
