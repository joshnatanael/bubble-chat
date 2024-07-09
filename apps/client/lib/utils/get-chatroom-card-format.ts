import dayjs from "dayjs";
import { MessageModel } from "@/redux/slices";
import { getUserName } from "./get-user-name";

export const getLastMessageFormat = (message?: MessageModel) => {
  if (!message) return undefined;
  return `${getUserName(message.user)}: ${message.content}`;
};

export const getTimeMessageFormat = (message?: MessageModel) => {
  if (!message) return undefined;

  return dayjs(message.createdAt).format(
    dayjs(message.createdAt).diff(new Date(), "day") === 0
      ? "h:ma"
      : "DD/MM/YYYY",
  );
};
