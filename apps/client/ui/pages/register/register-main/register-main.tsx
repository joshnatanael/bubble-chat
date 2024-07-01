"use client";

import React from "react";
import ChatImage from "public/assets/chat-image.png";
import { Typography } from "@mui/material";
import Logo from "public/assets/logo.png";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import * as S from "./register-main.style";

const RegisterMain: React.FC = () => {
  return (
    <S.RegisterMainRoot>
      <S.RegisterImageSection>
        <S.RegisterImage
          alt="Chat Illustration"
          fill
          priority
          sizes="100%"
          src={ChatImage}
        />

        <S.BubbleChatContainer>
          <S.BubbleTextContainer>
            <S.LogoContainer>
              <S.LogoImage alt="Bubble Chat" fill priority src={Logo} />
            </S.LogoContainer>
            <S.BubbleTitle variant="h1">Bubble Chat 🫧</S.BubbleTitle>
            <Typography>
              Join Bubble Chat today by creating your account effortlessly.
            </Typography>
          </S.BubbleTextContainer>
        </S.BubbleChatContainer>
      </S.RegisterImageSection>
      <S.RegisterFormSection>
        <S.RegisterFormContainer>
          <S.RegisterTitle component="h1" variant="h2">
            Register
          </S.RegisterTitle>
          <Typography>
            Already have an account?{" "}
            <S.SigninText component={Link} href="/signin">
              Log In
            </S.SigninText>
          </Typography>

          <S.RegisterForm component="form">
            <S.NameFieldContainer>
              <S.NameField fullWidth label="First Name" />

              <S.NameField fullWidth label="Last Name" />
            </S.NameFieldContainer>

            <S.StyledTextField fullWidth label="Email" />

            <S.StyledTextField fullWidth label="Username" />

            <S.StyledTextField fullWidth label="Password" />

            <Button fullWidth>Sign Up</Button>
          </S.RegisterForm>
        </S.RegisterFormContainer>
      </S.RegisterFormSection>
    </S.RegisterMainRoot>
  );
};

export default RegisterMain;
