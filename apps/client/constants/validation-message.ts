export const ValidationMessage = {
  invalidEmailFormat: "Invalid email.",
  lowercase1Char: "Min. 1 lowercase characters",
  LTE255Chars: "Max. 255 characters",
  numeric1Char: "Min. 1 numeric characters",
  required: "This field is required.",
  uppercase1Char: "Min. 1 uppercase characters",
};

export type ValidationMessageObject = typeof ValidationMessage;
export type ValidationMessageType = keyof typeof ValidationMessage;
