import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchChatroomDetailsQuery } from "@/redux/services";
import { useToast } from "@/lib/hooks";
import { parseRtkError } from "@/lib/utils";
import { selectSelectedChatroom } from "@/redux/slices";

const useChatroomContentLogic = (chatroomId?: string) => {
  const [anchorElChatroomOptions, setAnchorElChatroomOptions] =
    useState<null | HTMLElement>(null);
  const openChatroomOptions = Boolean(anchorElChatroomOptions);
  const { showToast } = useToast();
  const chatroom = useSelector(selectSelectedChatroom);
  const reduxState = useFetchChatroomDetailsQuery(
    { chatroomId },
    { skip: !chatroomId },
  );

  const handleClickChatroomOptions = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElChatroomOptions(event.currentTarget);
  };
  const handleCloseChatroomOptions = () => setAnchorElChatroomOptions(null);
  const handleLeaveChatroom = () => {};

  useEffect(() => {
    if (reduxState.isError && reduxState.error) {
      showToast(parseRtkError(reduxState.error));
    }
  }, [reduxState.isError]);

  return {
    state: { openChatroomOptions, anchorElChatroomOptions, chatroom },
    handler: {
      handleCloseChatroomOptions,
      handleClickChatroomOptions,
      handleLeaveChatroom,
    },
  };
};

export default useChatroomContentLogic;
