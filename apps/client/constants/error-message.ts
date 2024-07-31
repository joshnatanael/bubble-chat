export const errorMessage = {
  emailExisted: "Email is already in use. Please use another email.",
  somethingWentWrong: "Something went wrong. Please try again later.",
  usernameExisted: "Username is already in use. Please use another username.",
  notFoundByCondition: "Data not found.",
};

export type ErrorMessageObject = typeof errorMessage;
export type ErrorMessage = keyof typeof errorMessage;
