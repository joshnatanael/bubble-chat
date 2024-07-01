export type ShowToast = (
  message: string,
  variant?: "success" | "error" | "info",
) => void;

export type ToastMessage = string;
export type ToastVariant = "success" | "error" | "info" | undefined;

export interface ToastProviderInitialContext {
  // message: ToastMessage;
  // setMessage: Dispatch<SetStateAction<ToastMessage>>;
  // open: ToastVariant;
  // setOpen: Dispatch<SetStateAction<ToastMessage>>;
  showToast: ShowToast;
}
