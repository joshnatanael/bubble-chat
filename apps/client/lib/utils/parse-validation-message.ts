import { FieldError } from "react-hook-form";
import {
  ValidationMessage as defaultValidationMessage,
  ValidationMessageType,
  ValidationMessageObject,
} from "@/constants";

export const parseValidationMessage = (
  error: FieldError | ValidationMessageType | undefined,
  validation: ValidationMessageObject = defaultValidationMessage,
) => {
  if (!error) return "";

  if (typeof error === "object" && error.type) {
    return error?.message
      ? validation[error.message as ValidationMessageType]
      : "";
  }

  if (typeof error === "string") {
    return validation[error];
  }

  return "";
};
