import React from "react";
import * as S from "./bubble.style";
import { BubbleProps } from "./bubble.type";

const Bubble: React.FC<BubbleProps> = (props) => {
  const { content, isUserMessage, time, user, isSameUser, ...otherProps } =
    props;

  return (
    <S.BubbleRoot isUserMessage={isUserMessage} {...otherProps}>
      <S.StyledAvatar isSameUser={isSameUser} name={user} />
      <S.MessageContainer isUserMessage={isUserMessage}>
        <S.UserText>{user}</S.UserText>
        {content}
        <S.TimeText>{time}</S.TimeText>
      </S.MessageContainer>
    </S.BubbleRoot>
  );
};

export default Bubble;
