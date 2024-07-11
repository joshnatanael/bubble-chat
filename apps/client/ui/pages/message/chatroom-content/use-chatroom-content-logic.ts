import { useState } from "react";

const useChatroomContentLogic = () => {
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
