import React from "react";
import { TextFieldProps } from "@mui/material";
import * as S from "./text-field.style";

const TextField = React.forwardRef<TextFieldProps["inputRef"], TextFieldProps>(
  (props, ref) => {
    const { InputProps, ...otherProps } = props;
    return (
      <S.TextFieldRoot
        {...otherProps}
        InputProps={{ disableUnderline: true, ...(InputProps || {}) }}
        inputRef={ref}
        variant="filled"
      />
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
