import React, { SyntheticEvent } from "react";
import { AlertTitle } from "@mui/material";
import {
  NotificationToastProps,
  SenderIconProps,
} from "./notification-toast.type";
import { Avatar } from "../avatar";
import * as S from "./notification-toast.style";

const SenderIcon: React.FC<SenderIconProps> = (props) => {
  const { senderImg, senderName } = props;

  if (!senderImg) return <Avatar name={senderName} />;
  return (
    <S.SenderImageContainer>
      <S.SenderImageImage
        alt={`${senderName} profile picture`}
        fill
        priority
        sizes="100%"
        src={senderImg}
        unoptimized
      />
    </S.SenderImageContainer>
  );
};

const NotificationToast: React.FC<NotificationToastProps> = (props) => {
  const {
    messageContent,
    senderName,
    senderImg,
    open,
    onClose,
    onClick,
    ...otherProps
  } = props;

  const handleCloseNotification = (event: SyntheticEvent<Element, Event>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <S.NotificationToastRoot
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      open={open}
      onClick={onClick}
      {...otherProps}
    >
      <S.NotificationAlert
        icon={
          <SenderIcon senderImg={senderImg} senderName={senderName || ""} />
        }
        severity="info"
        onClose={handleCloseNotification}
      >
        <AlertTitle>{senderName}</AlertTitle>
        {messageContent}
      </S.NotificationAlert>
    </S.NotificationToastRoot>
  );
};

export default NotificationToast;
