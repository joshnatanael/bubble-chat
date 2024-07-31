import {
  errorMessage as defaultErrorMessage,
  ErrorMessage,
  ErrorMessageObject,
} from "@/constants";
import { RequestErrorReturn } from "@/redux/store";

export const mapErrorCode = {
  EmailExisted: "emailExisted",
  UsernameExisted: "usernameExisted",
  NotFoundByCondition: "notFoundByCondition",
};

export const parseRtkError = (
  error: RequestErrorReturn,
  errorMessage: ErrorMessageObject = defaultErrorMessage,
) => {
  if (!("status" in error) || !error.data)
    return errorMessage.somethingWentWrong;

  const { code } = error.data;

  const errCode = code as keyof typeof mapErrorCode;

  return (
    errorMessage[mapErrorCode[errCode] as ErrorMessage] ||
    errorMessage.somethingWentWrong
  );
};
