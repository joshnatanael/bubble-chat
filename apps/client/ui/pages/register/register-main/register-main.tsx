"use client";

import React from "react";
import ChatImage from "public/assets/chat-image.png";
import { Typography } from "@mui/material";
import Logo from "public/assets/logo.png";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import { Controller } from "react-hook-form";
import * as S from "./register-main.style";
import useRegisterMainLogic from "./use-register-main-logic";
import { parseValidationMessage } from "@/lib/utils";

const RegisterMain: React.FC = () => {
  const {
    form,
    handler: { onSubmit },
  } = useRegisterMainLogic();
  const { control, handleSubmit } = form;

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

          <S.RegisterForm component="form" onSubmit={handleSubmit(onSubmit)}>
            <S.NameFieldContainer>
              <Controller
                control={control}
                name="firstname"
                render={({ field, fieldState: { error } }) => (
                  <S.NameField
                    error={!!error?.message}
                    fullWidth
                    helperText={parseValidationMessage(error)}
                    label="First Name"
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="lastname"
                render={({ field, fieldState: { error } }) => (
                  <S.NameField
                    error={!!error?.message}
                    fullWidth
                    helperText={parseValidationMessage(error)}
                    label="Last Name"
                    {...field}
                  />
                )}
              />
            </S.NameFieldContainer>

            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <S.StyledTextField
                  error={!!error?.message}
                  fullWidth
                  helperText={parseValidationMessage(error)}
                  label="Email"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <S.StyledTextField
                  error={!!error?.message}
                  fullWidth
                  helperText={parseValidationMessage(error)}
                  label="Username"
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

            <Button fullWidth type="submit">
              Sign Up
            </Button>
          </S.RegisterForm>
        </S.RegisterFormContainer>
      </S.RegisterFormSection>
    </S.RegisterMainRoot>
  );
};

export default RegisterMain;
