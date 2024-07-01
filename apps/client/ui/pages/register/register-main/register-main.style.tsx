import { Box, Typography, styled } from "@mui/material";
import { TextField } from "@repo/ui/text-field";
import Image from "next/image";

export const RegisterMainRoot = styled(Box, { name: "RegisterMainRoot" })(
  () => ({
    height: "100%",
    display: "flex",
  }),
);

export const RegisterImageSection = styled(Box, {
  name: "RegisterImageSection",
})(() => ({
  height: "100%",
  width: "40%",
  position: "relative",
}));

export const RegisterImage = styled(Image, {
  name: "RegisterImage",
})(() => ({
  objectFit: "cover",
}));

export const BubbleChatContainer = styled(Box, {
  name: "BubbleChatContainer",
})(() => ({
  position: "absolute",
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
  background: "rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
}));

export const BubbleTextContainer = styled(Box, {
  name: "BubbleTextContainer",
})(({ theme }) => ({
  padding: "12px 32px 48px",
  color: theme.palette.common.white,
}));

export const LogoContainer = styled(Box, {
  name: "LogoContainer",
})(() => ({
  height: 60,
  width: 60,
  position: "relative",
}));

export const LogoImage = styled(Image, {
  name: "LogoImage",
})(() => ({
  objectFit: "cover",
  filter: "invert(100%)",
}));

export const BubbleTitle = styled(Typography, {
  name: "BubbleTitle",
})(() => ({
  fontFamily: '"Playwrite IT Moderna", cursive',
  marginTop: 8,
  marginBottom: 18,
}));

export const RegisterFormSection = styled(Box, {
  name: "RegisterFormSection",
})(() => ({
  height: "100%",
  width: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const RegisterFormContainer = styled(Box, {
  name: "RegisterFormContainer",
})(() => ({
  padding: 24,
  width: "100%",
  maxWidth: 540,
}));

export const RegisterTitle = styled(Typography, {
  name: "RegisterTitle",
})(() => ({
  marginBottom: 4,
})) as typeof Typography;

export const SigninText = styled(Typography, { name: "SigninText" })(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "underline",
  }),
) as typeof Typography;

export const RegisterForm = styled(Box, {
  name: "RegisterForm",
})(() => ({
  marginTop: 36,
}));

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})(() => ({
  marginBottom: 36,
}));

export const NameFieldContainer = styled(Box, {
  name: "NameFieldContainer",
})(() => ({
  display: "flex",
  marginRight: -20,
}));

export const NameField = styled(TextField, {
  name: "NameField",
})(() => ({
  marginBottom: 36,
  marginRight: 20,
}));
