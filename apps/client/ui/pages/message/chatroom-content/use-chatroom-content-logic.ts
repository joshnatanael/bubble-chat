import { useState } from "react";
import { useFetchChatroomDetailsQuery } from "@/redux/services";

const useChatroomContentLogic = (chatroomId?: string) => {
  const [anchorElChatroomOptions, setAnchorElChatroomOptions] =
    useState<null | HTMLElement>(null);
  const openChatroomOptions = Boolean(anchorElChatroomOptions);

  const handleClickChatroomOptions = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElChatroomOptions(event.currentTarget);
  };
  const handleCloseChatroomOptions = () => setAnchorElChatroomOptions(null);
  const handleLeaveChatroom = () => {};

  useFetchChatroomDetailsQuery({ chatroomId }, { skip: !chatroomId });

  return {
    state: { openChatroomOptions, anchorElChatroomOptions },
    handler: {
      handleCloseChatroomOptions,
      handleClickChatroomOptions,
      handleLeaveChatroom,
    },
  };
};

export default useChatroomContentLogic;
