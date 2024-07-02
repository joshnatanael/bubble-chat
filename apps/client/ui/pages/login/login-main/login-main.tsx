"use client";

import React from "react";
import ChatImage from "public/assets/chat-image.png";
import { Typography } from "@mui/material";
import Logo from "public/assets/logo.png";
import Link from "next/link";
import { Controller } from "react-hook-form";
import * as S from "./login-main.style";
import { parseValidationMessage } from "@/lib/utils";
import useLoginMainLogic from "./use-login-main-logic";

const LoginMain: React.FC = () => {
  const {
    form,
    handler: { onSubmit },
  } = useLoginMainLogic();
  const { control, handleSubmit } = form;

  return (
    <S.LoginMainRoot>
      <S.LoginImageSection>
        <S.LoginImage
          alt="Chat Illustration"
          fill
          priority
          sizes="100%"
          src={ChatImage}
        />

        <S.BubbleChatFilter />
        <S.BubbleTextContainer>
          <S.LogoContainer>
            <S.LogoImage alt="Bubble Chat" fill priority src={Logo} />
          </S.LogoContainer>
          <S.BubbleTitle variant="h1">Bubble Chat 🫧</S.BubbleTitle>
          <Typography variant="h5">
            Access Bubble Chat instantly by effortlessly logging into your
            account.
          </Typography>
        </S.BubbleTextContainer>
      </S.LoginImageSection>
      <S.LoginFormSection>
        <S.LoginFormContainer>
          <S.LoginTitle component="h1" variant="h2">
            Login
          </S.LoginTitle>

          <S.LoginForm component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="credential"
              render={({ field, fieldState: { error } }) => (
                <S.StyledTextField
                  error={!!error?.message}
                  fullWidth
                  helperText={parseValidationMessage(error)}
                  label="Email / Username"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <S.StyledTextField
                  error={!!error?.message}
                  fullWidth
                  helperText={parseValidationMessage(error)}
                  label="Password"
                  type="password"
                  {...field}
                />
              )}
            />

            <S.LoginButtonContainer>
              <S.LoginButton fullWidth type="submit">
                Login
              </S.LoginButton>

              <Typography>
                Don&apos;t have an account?{" "}
                <S.RegisterText component={Link} href="/register">
                  Register
                </S.RegisterText>
              </Typography>
            </S.LoginButtonContainer>
          </S.LoginForm>
        </S.LoginFormContainer>
      </S.LoginFormSection>
    </S.LoginMainRoot>
  );
};

export default LoginMain;
