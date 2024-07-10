import { AvatarGroup, Typography } from "@mui/material";
import React from "react";
import * as S from "./chatroom-card.style";
import { ChatroomCardProps } from "./chatroom-card.type";
import { Avatar } from "../avatar";

const ChatroomCard: React.FC<ChatroomCardProps> = (props) => {
  const { message, name, time, users, onClick, ...otherProps } = props;

  return (
    <S.ChatroomCardRoot onClick={onClick} {...otherProps}>
      <AvatarGroup max={2}>
        {users.map((user) => (
          <Avatar key={user} name={user} />
        ))}
      </AvatarGroup>
      <S.TextContainer>
        <S.NameTimeContainer>
          <S.ChatroomNameText>{name}</S.ChatroomNameText>
          <S.TimeText>{time}</S.TimeText>
        </S.NameTimeContainer>

        <Typography>{message}</Typography>
      </S.TextContainer>
    </S.ChatroomCardRoot>
  );
};

export default ChatroomCard;
