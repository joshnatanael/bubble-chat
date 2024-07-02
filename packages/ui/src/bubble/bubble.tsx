import React from "react";
import * as S from "./bubble.style";
import { BubbleProps } from "./bubble.type";

const Bubble: React.FC<BubbleProps> = (props) => {
  const { content, isUserMessage, time, ...otherProps } = props;

  return (
    <S.BubbleRoot isUserMessage={isUserMessage} {...otherProps}>
      {content}
      <S.TimeText>{time}</S.TimeText>
    </S.BubbleRoot>
  );
};

export default Bubble;
