import React from "react";
import { AvatarGroup, Box, Typography } from "@mui/material";
import { RenderIf } from "@repo/ui/render-if";
import NoChatroomSelected from "public/svgs/no-chatroom-selected.svg";
import { MoreVertRounded, Send } from "@mui/icons-material";
import { Bubble } from "@repo/ui/bubble";
import { Avatar } from "@repo/ui/avatar";
import { Controller } from "react-hook-form";
import { ChatroomContentProps } from "./chatroom-content.type";
import * as S from "./chatroom-content.style";
import useChatroomContentLogic from "./use-chatroom-content-logic";

const ChatroomContent: React.FC<ChatroomContentProps> = (props) => {
  const { chatroomId } = props;

  const {
    form,
    state: { openChatroomOptions, anchorElChatroomOptions, chatroom },
    handler: {
      handleCloseChatroomOptions,
      handleClickChatroomOptions,
      handleLeaveChatroom,
      handleSendMessage,
    },
  } = useChatroomContentLogic(chatroomId);
  const { handleSubmit, control } = form;

  return (
    <>
      <RenderIf isTrue={!chatroomId}>
        <S.NoChatroomSelectedSection>
          <Box>
            <S.NoChatroomImageContainer>
              <S.NoChatroomImage
                alt="No Chatroom Selected"
                fill
                priority
                src={NoChatroomSelected}
              />
            </S.NoChatroomImageContainer>
            <S.NoChatroomText variant="h3">
              No chatroom selected
            </S.NoChatroomText>
            <Typography>Please select a chatroom to view messages.</Typography>
          </Box>
        </S.NoChatroomSelectedSection>
      </RenderIf>

      <RenderIf isTrue={!!chatroomId}>
        <S.Header>
          <S.ChatroomLeftHeader>
            <AvatarGroup max={3}>
              {chatroom?.alternativeName
                .split(", ")
                .map((user) => <Avatar key={user} name={user} />)}
            </AvatarGroup>
            <Box>
              <Typography component="h2" variant="h5">
                {chatroom?.name || chatroom?.alternativeName}
              </Typography>

              <Typography variant="body2">
                {chatroom?.alternativeName}
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
              <S.PopoverMenuItem role="link" onClick={handleLeaveChatroom}>
                <S.LeaveText color="error" variant="body1">
                  Leave Chatroom
                </S.LeaveText>
              </S.PopoverMenuItem>
            </S.PopoverMenuRoot>
          </S.ActionHeaderContainer>
        </S.Header>

        <S.MessagesContainer>
          <Bubble content="Test" isUserMessage time="2:10pm" />
          <Bubble content="Test" isUserMessage={false} time="2:10pm" />
          <Box sx={{ height: "200vh" }} />
        </S.MessagesContainer>

        <S.ChatroomInputContainer
          component="form"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <S.StyledInput
                autoComplete="off"
                fullWidth
                placeholder="Type a message"
                {...field}
              />
            )}
          />
          <S.SendButton aria-label="Send Message" type="submit">
            <Send />
          </S.SendButton>
        </S.ChatroomInputContainer>
      </RenderIf>
    </>
  );
};

export default ChatroomContent;
