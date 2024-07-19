import { useSendMessageMutation } from "@/redux/services";
import { SendMessageFormModel } from "./use-chatroom-content-logic";

const useChatroomContentRedux = (chatroomId: string) => {
  const [sendMessage, reduxState] = useSendMessageMutation();

  const handleSendMessage = (data: SendMessageFormModel) => {
    sendMessage({
      content: data.content,
      chatroomId,
    });
  };

  return { onSendMessage: handleSendMessage, reduxState };
};

export default useChatroomContentRedux;
