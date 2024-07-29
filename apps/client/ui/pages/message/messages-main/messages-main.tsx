"use client";

import React from "react";
import { Box } from "@mui/material";
import {
  ChatBubbleOutlineRounded,
  MoreVertRounded,
  PeopleOutlineRounded,
} from "@mui/icons-material";
import { ChatroomCard } from "@repo/ui/chatroom-card";
import { Avatar } from "@repo/ui/avatar";
import { NotificationToast } from "@repo/ui/notification-toast";
import * as S from "./messages-main.style";
import useMessageMainLogic from "./use-message-main-logic";
import {
  getLastMessageFormat,
  getTimeMessageFormat,
  getUserName,
} from "@/lib/utils";
import { MessagesMainProps } from "./messages-main.type";
import { ChatroomContent } from "../chatroom-content";

const MessagesMain: React.FC<MessagesMainProps> = (props) => {
  const { chatroomId, ...otherProps } = props;

  const {
    state: {
      username,
      openOptions,
      anchorElSettings,
      chatrooms,
      unseenMessages,
      openNotificationToast,
      notificationContent,
    },
    handler: {
      handleLogout,
      handleClickSettings,
      handleCloseSettings,
      handleClickChatroom,
      handleCloseNotification,
    },
  } = useMessageMainLogic();

  return (
    <S.MessagesMainRoot {...otherProps}>
      <S.LeftSection>
        <S.Header component="header">
          <Avatar name={username} />

          <S.ActionHeaderContainer>
            <S.StyledIconButton aria-label="Create new chatroom">
              <ChatBubbleOutlineRounded />
            </S.StyledIconButton>

            <S.StyledIconButton aria-label="Go to friends">
              <PeopleOutlineRounded />
            </S.StyledIconButton>

            <S.StyledIconButton
              aria-label="Open popup options"
              onClick={handleClickSettings}
            >
              <MoreVertRounded />
            </S.StyledIconButton>

            <S.PopoverMenuRoot
              anchorEl={anchorElSettings}
              open={openOptions}
              onClose={handleCloseSettings}
            >
              <S.PopoverMenuItem role="link" onClick={handleLogout}>
                <S.LogoutText color="error" variant="body1">
                  Logout
                </S.LogoutText>
              </S.PopoverMenuItem>
            </S.PopoverMenuRoot>
          </S.ActionHeaderContainer>
        </S.Header>
        <S.ChatroomContainer>
          <Box sx={{ height: "200vh" }}>
            {chatrooms.map((chatroom) => {
              const unseenMessagesCount = unseenMessages.filter((unseenMsg) => {
                return unseenMsg.chatroomId === chatroom.id;
              }).length;

              return (
                <ChatroomCard
                  key={chatroom.id}
                  message={getLastMessageFormat(chatroom.messages?.[0])}
                  name={chatroom.name || chatroom.alternativeName}
                  time={getTimeMessageFormat(chatroom.messages?.[0])}
                  unseenMessagesCount={unseenMessagesCount}
                  users={chatroom.alternativeName?.split(", ") || []}
                  onClick={() => handleClickChatroom(chatroom.id)}
                />
              );
            })}
          </Box>
        </S.ChatroomContainer>
      </S.LeftSection>

      <S.RightSection>
        <ChatroomContent chatroomId={chatroomId} />
      </S.RightSection>

      <NotificationToast
        messageContent={notificationContent?.content}
        open={openNotificationToast}
        senderImg={notificationContent?.user?.picture}
        senderName={getUserName(notificationContent?.user)}
        onClick={() => handleClickChatroom(notificationContent?.chatroomId)}
        onClose={handleCloseNotification}
      />
    </S.MessagesMainRoot>
  );
};

export default MessagesMain;
