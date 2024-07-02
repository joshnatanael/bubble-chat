import { Box, Typography, styled } from "@mui/material";
import { Button } from "@repo/ui/button";
import { TextField } from "@repo/ui/text-field";
import Image from "next/image";

export const LoginMainRoot = styled(Box, { name: "LoginMainRoot" })(
  ({ theme }) => ({
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }),
);

export const LoginImageSection = styled(Box, {
  name: "LoginImageSection",
})(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "end",

  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

export const LoginImage = styled(Image, {
  name: "LoginImage",
})(() => ({
  objectFit: "cover",
}));

export const BubbleChatFilter = styled(Box, {
  name: "BubbleChatFilter",
})(() => ({
  position: "absolute",
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
  background: "rgba(0,0,0,0.3)",
}));

export const BubbleTextContainer = styled(Box, {
  name: "BubbleTextContainer",
})(({ theme }) => ({
  padding: "48px 32px",
  color: theme.palette.common.white,
  zIndex: 1,
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

export const LoginFormSection = styled(Box, {
  name: "LoginFormSection",
})(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  flexGrow: 1,

  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));

export const LoginFormContainer = styled(Box, {
  name: "LoginFormContainer",
})(({ theme }) => ({
  padding: 24,
  width: "100%",
  margin: "auto",

  [theme.breakpoints.up("md")]: {
    maxWidth: 540,
    marginLeft: 100,
  },
}));

export const LoginTitle = styled(Typography, {
  name: "LoginTitle",
})(() => ({
  marginBottom: 4,
})) as typeof Typography;

export const RegisterText = styled(Typography, { name: "RegisterText" })(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "underline",
  }),
) as typeof Typography;

export const LoginForm = styled(Box, {
  name: "LoginForm",
})(() => ({
  marginTop: 36,
}));

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})(() => ({
  marginBottom: 36,
}));

export const LoginButtonContainer = styled(Box, {
  name: "LoginButtonContainer",
})(({ theme }) => ({
  display: "flex",
  gap: 20,
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const LoginButton = styled(Button, {
  name: "LoginButton",
})(({ theme }) => ({
  flexBasis: "100%",

  [theme.breakpoints.up("sm")]: {
    flexBasis: "45%",
  },
}));
