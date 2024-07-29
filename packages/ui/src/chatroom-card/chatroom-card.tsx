import { AvatarGroup, Typography } from "@mui/material";
import React from "react";
import * as S from "./chatroom-card.style";
import { ChatroomCardProps } from "./chatroom-card.type";
import { Avatar } from "../avatar";
import { RenderIf } from "../render-if";

const ChatroomCard: React.FC<ChatroomCardProps> = (props) => {
  const {
    message,
    name,
    time,
    users,
    unseenMessagesCount,
    onClick,
    ...otherProps
  } = props;

  return (
    <S.ChatroomCardRoot onClick={onClick} {...otherProps}>
      <AvatarGroup max={2}>
        {users.map((user) => (
          <Avatar key={user} name={user} />
        ))}
      </AvatarGroup>
      <S.TextContainer>
        <S.FlexContainer>
          <S.ChatroomNameText>{name}</S.ChatroomNameText>
          <S.TimeText>{time}</S.TimeText>
        </S.FlexContainer>

        <S.FlexContainer>
          <Typography>{message}</Typography>
          <RenderIf isTrue={!!unseenMessagesCount}>
            <S.UnseenCountBox>
              <S.UnseenCountText variant="body2">
                {unseenMessagesCount}
              </S.UnseenCountText>
            </S.UnseenCountBox>
          </RenderIf>
        </S.FlexContainer>
      </S.TextContainer>
    </S.ChatroomCardRoot>
  );
};

export default ChatroomCard;
