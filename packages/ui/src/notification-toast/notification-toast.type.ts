export interface NotificationToastProps {
  senderName: string;
  senderImg?: string;
  messageContent: string;
  open: boolean;
  onClose: () => void;
  onClick: () => void;
}

export interface SenderIconProps {
  senderName: string;
  senderImg?: string;
}
