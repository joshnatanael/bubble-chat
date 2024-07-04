"use client";

import React from "react";
import { AvatarGroup, Box, IconButton, Input, Typography } from "@mui/material";
import {
  ChatBubbleOutlineRounded,
  MoreVertRounded,
  PeopleOutlineRounded,
  Send,
} from "@mui/icons-material";
import { ChatroomCard } from "@repo/ui/chatroom-card";
import { Avatar } from "@repo/ui/avatar";
import { Bubble } from "@repo/ui/bubble";
import * as S from "./messages-main.style";
import useMessageMainLogic from "./use-message-main-logic";
import { getUserName } from "@/lib/utils";

const MessagesMain: React.FC = () => {
  const {
    state: {
      username,
      openOptions,
      openChatroomOptions,
      anchorElSettings,
      anchorElChatroomOptions,
      chatrooms,
    },
    handler: {
      handleLogout,
      handleCloseChatroomOptions,
      handleClickSettings,
      handleCloseSettings,
      handleClickChatroomOptions,
    },
  } = useMessageMainLogic();

  return (
    <S.MessagesMainRoot>
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
            {chatrooms.map((chatroom) => (
              <ChatroomCard
                key={chatroom.id}
                message={`${getUserName(chatroom.messages[0]?.user)}: ${chatroom.messages[0]?.content}`}
                name={chatroom.name}
                time="22.10pm"
                users={chatroom.users.map((user) => getUserName(user))}
              />
            ))}
          </Box>
        </S.ChatroomContainer>
      </S.LeftSection>

      <S.RightSection>
        <S.Header>
          <S.ChatroomLeftHeader>
            <AvatarGroup max={3}>
              <Avatar name="John Doe" />
              <Avatar name="John Doe" />
              <Avatar name="John Doe" />
            </AvatarGroup>
            <Box>
              <Typography component="h2" variant="h5">
                Group chat
              </Typography>

              <Typography variant="body2">
                John Doe, John Doe, John Doe
              </Typography>
            </Box>
          </S.ChatroomLeftHeader>

          <S.ActionHeaderContainer>
            <S.StyledIconButton
              aria-label="Open popup options"
              onClick={handleClickChatroomOptions}
            >
              <MoreVertRounded />
            </S.StyledIconButton>

            <S.PopoverMenuRoot
              anchorEl={anchorElChatroomOptions}
              open={openChatroomOptions}
              onClose={handleCloseChatroomOptions}
            >
              <S.PopoverMenuItem role="link" onClick={handleLogout}>
                <S.LogoutText color="error" variant="body1">
                  Leave Chatroom
                </S.LogoutText>
              </S.PopoverMenuItem>
            </S.PopoverMenuRoot>
          </S.ActionHeaderContainer>
        </S.Header>

        <S.MessagesContainer>
          <Bubble content="Test" isUserMessage time="2:10pm" />
          <Bubble content="Test" isUserMessage={false} time="2:10pm" />
          <Box sx={{ height: "200vh" }} />
        </S.MessagesContainer>

        <S.ChatroomInputContainer>
          <Input
            endAdornment={
              <IconButton>
                <Send />
              </IconButton>
            }
            fullWidth
            placeholder="Type a message"
          />
        </S.ChatroomInputContainer>
      </S.RightSection>
    </S.MessagesMainRoot>
  );
};

export default MessagesMain;
