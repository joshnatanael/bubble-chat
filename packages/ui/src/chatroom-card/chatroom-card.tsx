import { AvatarGroup, Typography } from "@mui/material";
import React from "react";
import * as S from "./chatroom-card.style";
import { ChatroomCardProps } from "./chatroom-card.type";
import { Avatar } from "../avatar";

const ChatroomCard: React.FC<ChatroomCardProps> = (props) => {
  const { message, name, time, users, ...otherProps } = props;

  return (
    <S.ChatroomCardRoot {...otherProps}>
      <AvatarGroup max={2}>
        {users.map((user) => (
          <Avatar key={user} name={user} />
        ))}
      </AvatarGroup>
      <S.TextContainer>
        <S.NameTimeContainer>
          <Typography>{name}</Typography>
          <S.TimeText>{time}</S.TimeText>
        </S.NameTimeContainer>

        <Typography>{message}</Typography>
      </S.TextContainer>
    </S.ChatroomCardRoot>
  );
};

export default ChatroomCard;
