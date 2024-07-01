"use client";

import React from "react";
import * as S from "./button.style";
import { ButtonProps } from "./button.type";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return <S.ButtonRoot {...otherProps}>{children}</S.ButtonRoot>;
};

export default Button;
