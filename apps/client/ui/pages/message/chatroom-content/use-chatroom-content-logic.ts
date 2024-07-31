import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useFetchChatroomDetailsQuery,
  useFetchMessagesByChatroomIdQuery,
} from "@/redux/services";
import { useToast } from "@/lib/hooks";
import { parseRtkError, pusherClient, toPusherKey } from "@/lib/utils";
import {
  MessageModel,
  selectAuthenticatedUser,
  selectSelectedChatroom,
} from "@/redux/slices";
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
  const user = useSelector(selectAuthenticatedUser);
  const reduxState = useFetchChatroomDetailsQuery(
    { chatroomId },
    { skip: !chatroomId, refetchOnMountOrArgChange: true },
  );
  const fetchMessageState = useFetchMessagesByChatroomIdQuery(
    { chatroomId: chatroomId || "" },
    { skip: !chatroomId, refetchOnMountOrArgChange: true },
  );

  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [openLeaveDialog, setOpenLeaveDialog] = useState(false);

  const form = useForm({
    mode: "onSubmit",
    defaultValues: { content: "" },
    resolver: yupResolver(SendMessageSchema),
  });

  const handleClickChatroomOptions = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElChatroomOptions(event.currentTarget);
  };
  const handleCloseChatroomOptions = () => setAnchorElChatroomOptions(null);
  const handleSendMessage: SubmitHandler<SendMessageFormModel> = (data) => {
    onSendMessage(data);
  };
  const handleOpenLeaveDialog = () => setOpenLeaveDialog(true);
  const handleCloseLeaveDialog = () => setOpenLeaveDialog(false);

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

  useEffect(() => {
    if (sendMessageState.isSuccess) {
      form.setFocus("content");
      form.reset(undefined);
    }
  }, [sendMessageState.isSuccess, form.reset, form.setFocus]);

  useEffect(() => {
    if (fetchMessageState.isError && fetchMessageState.error) {
      showToast(parseRtkError(fetchMessageState.error));
    }
  }, [fetchMessageState.isError]);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`chat:${chatroomId}`));

    const messageHandler = (message: MessageModel) => {
      setMessages((prev) => [message, ...prev]);
    };

    pusherClient.bind("incomming-message", messageHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`chat:${chatroomId}`));

      pusherClient.unbind("incomming-message", messageHandler);
    };
  }, []);

  useEffect(() => {
    if (Array.isArray(fetchMessageState.data?.messages)) {
      setMessages([...fetchMessageState.data.messages].reverse());
    }
  }, [fetchMessageState.data?.messages]);

  return {
    form,
    state: {
      openChatroomOptions,
      anchorElChatroomOptions,
      chatroom,
      messages,
      user,
      openLeaveDialog,
    },
    handler: {
      handleCloseChatroomOptions,
      handleClickChatroomOptions,
      handleSendMessage,
      handleOpenLeaveDialog,
      handleCloseLeaveDialog,
    },
  };
};

export default useChatroomContentLogic;
