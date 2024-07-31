import { useEffect } from "react";
import { useRouter } from "next-nprogress-bar";
import { useLeaveChatroomMutation } from "@/redux/services";
import { useToast } from "@/lib/hooks";
import { parseRtkError } from "@/lib/utils";

const useLeaveChatroomDialogLogic = () => {
  const { showToast } = useToast();
  const router = useRouter();
  const [leaveChatroom, leaveChatroomState] = useLeaveChatroomMutation();

  const handleLeaveChatroom = (chatroomId: string) =>
    leaveChatroom({ chatroomId });
  const handleLeaveChatroomSuccess = () => router.push("/messages");

  useEffect(() => {
    if (leaveChatroomState.isError && leaveChatroomState.error) {
      showToast(parseRtkError(leaveChatroomState.error));
    }
  }, [leaveChatroomState.isError]);

  return {
    handler: { handleLeaveChatroom, handleLeaveChatroomSuccess },
    state: { leaveChatroomState },
  };
};

export default useLeaveChatroomDialogLogic;
