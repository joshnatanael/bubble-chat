import React, { useEffect } from "react";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Button } from "@repo/ui/button";
import { LeaveChatroomDialogProps } from "./leave-chatroom-dialog.type";
import * as S from "./leave-chatroom-dialog.style";
import useLeaveChatroomDialogLogic from "./use-leave-chatroom-dialog-logic";

const LeaveChatroomDialog: React.FC<LeaveChatroomDialogProps> = (props) => {
  const { onClose, open, chatroomId, ...otherProps } = props;
  const {
    handler: { handleLeaveChatroom, handleLeaveChatroomSuccess },
    state: { leaveChatroomState },
  } = useLeaveChatroomDialogLogic();

  useEffect(() => {
    if (leaveChatroomState.isSuccess) {
      handleLeaveChatroomSuccess();
      onClose();
    }
  }, [leaveChatroomState.isSuccess]);

  return (
    <S.LeaveChatroomDialogRoot
      maxWidth="xs"
      open={open}
      onClose={onClose}
      {...otherProps}
    >
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to leave this chatroom? You will miss any
          ongoing and future messages.
        </DialogContentText>
      </DialogContent>
      <S.StyledDialogActions>
        <Button color="error" fullWidth variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="error"
          fullWidth
          loading={leaveChatroomState.isLoading}
          onClick={() => handleLeaveChatroom(chatroomId)}
        >
          Leave
        </Button>
      </S.StyledDialogActions>
    </S.LeaveChatroomDialogRoot>
  );
};

export default LeaveChatroomDialog;
