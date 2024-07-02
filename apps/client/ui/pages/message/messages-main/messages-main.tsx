"use client";

import React, { useState } from "react";
import { AvatarGroup, Box, IconButton, Input, Typography } from "@mui/material";
import {
  ChatBubbleOutlineRounded,
  MoreVertRounded,
  PeopleOutlineRounded,
  Send,
} from "@mui/icons-material";
import { useRouter } from "next-nprogress-bar";
import { ChatroomCard } from "@repo/ui/chatroom-card";
import { Avatar } from "@repo/ui/avatar";
import { Bubble } from "@repo/ui/bubble";
import * as S from "./messages-main.style";

const MessagesMain: React.FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [anchorElChatroomOptions, setAnchorElChatroomOptions] =
    useState<null | HTMLElement>(null);
  const openChatroomOptions = Boolean(anchorElChatroomOptions);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleClickChatroomOptions = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElChatroomOptions(event.currentTarget);
  };
  const handleCloseChatroomOptions = () => setAnchorElChatroomOptions(null);

  const handleLogout = () => {
    router.push("/logout");
  };

  return (
    <S.MessagesMainRoot>
      <S.LeftSection>
        <S.Header component="header">
          <Avatar name="John Doe" />

          <S.ActionHeaderContainer>
            <S.StyledIconButton aria-label="Create new chatroom">
              <ChatBubbleOutlineRounded />
            </S.StyledIconButton>

            <S.StyledIconButton aria-label="Go to friends">
              <PeopleOutlineRounded />
            </S.StyledIconButton>

            <S.StyledIconButton
              aria-label="Open popup options"
              onClick={handleClick}
            >
              <MoreVertRounded />
            </S.StyledIconButton>

            <S.PopoverMenuRoot
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
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
            {new Array(3).fill(null).map((el, idx) => (
              <ChatroomCard
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                message="You: Test"
                name="Group Chat Name"
                time="22.10pm"
                users={["Remy Sharp", "Travis Howard", "Agnes Walker"]}
              />
            ))}
            <ChatroomCard
              message="You: Test"
              name="Group Chat Name"
              time="22.10pm"
              users={["Remy Sharp"]}
            />
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
