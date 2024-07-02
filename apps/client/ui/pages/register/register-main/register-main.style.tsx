import { Box, Typography, styled } from "@mui/material";
import { Button } from "@repo/ui/button";
import { TextField } from "@repo/ui/text-field";
import Image from "next/image";

export const RegisterMainRoot = styled(Box, { name: "RegisterMainRoot" })(
  ({ theme }) => ({
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }),
);

export const RegisterImageSection = styled(Box, {
  name: "RegisterImageSection",
})(({ theme }) => ({
  // minHeight: 300,
  position: "relative",
  display: "flex",
  alignItems: "end",

  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

export const RegisterImage = styled(Image, {
  name: "RegisterImage",
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

export const RegisterFormSection = styled(Box, {
  name: "RegisterFormSection",
})(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  flexGrow: 1,

  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));

export const RegisterFormContainer = styled(Box, {
  name: "RegisterFormContainer",
})(({ theme }) => ({
  padding: 24,
  width: "100%",
  margin: "auto",

  [theme.breakpoints.up("md")]: {
    maxWidth: 540,
    marginLeft: 100,
  },
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

export const RegisterButtonContainer = styled(Box, {
  name: "RegisterButtonContainer",
})(({ theme }) => ({
  display: "flex",
  gap: 20,
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const RegisterButton = styled(Button, {
  name: "RegisterButton",
})(({ theme }) => ({
  flexBasis: "100%",

  [theme.breakpoints.up("sm")]: {
    flexBasis: "45%",
  },
}));
