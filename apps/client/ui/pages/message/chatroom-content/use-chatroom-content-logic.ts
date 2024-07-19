import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFetchChatroomDetailsQuery } from "@/redux/services";
import { useToast } from "@/lib/hooks";
import { parseRtkError } from "@/lib/utils";
import { selectSelectedChatroom } from "@/redux/slices";
import useChatroomContentRedux from "./use-chatroom-content-redux";

const SendMessageSchema = yup.object().shape({
  content: yup.string().required("required"),
});

export type SendMessageFormModel = yup.InferType<typeof SendMessageSchema>;

const useChatroomContentLogic = (chatroomId?: string) => {
  const { onSendMessage, reduxState: sendMessageState } =
    useChatroomContentRedux(chatroomId || "");

  const [anchorElChatroomOptions, setAnchorElChatroomOptions] =
    useState<null | HTMLElement>(null);
  const openChatroomOptions = Boolean(anchorElChatroomOptions);
  const { showToast } = useToast();
  const chatroom = useSelector(selectSelectedChatroom);
  const reduxState = useFetchChatroomDetailsQuery(
    { chatroomId },
    { skip: !chatroomId },
  );

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(SendMessageSchema),
  });

  const handleClickChatroomOptions = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElChatroomOptions(event.currentTarget);
  };
  const handleCloseChatroomOptions = () => setAnchorElChatroomOptions(null);
  const handleLeaveChatroom = () => {};
  const handleSendMessage: SubmitHandler<SendMessageFormModel> = (data) => {
    onSendMessage(data);
  };

  useEffect(() => {
    if (reduxState.isError && reduxState.error) {
      showToast(parseRtkError(reduxState.error));
    }
  }, [reduxState.isError]);

  useEffect(() => {
    if (sendMessageState.isError && sendMessageState.error) {
      showToast(parseRtkError(sendMessageState.error));
    }
  }, [sendMessageState.isError]);

  return {
    form,
    state: { openChatroomOptions, anchorElChatroomOptions, chatroom },
    handler: {
      handleCloseChatroomOptions,
      handleClickChatroomOptions,
      handleLeaveChatroom,
      handleSendMessage,
    },
  };
};

export default useChatroomContentLogic;
