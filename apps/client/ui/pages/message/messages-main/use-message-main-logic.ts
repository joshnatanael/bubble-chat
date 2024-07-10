import { useSelector } from "react-redux";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { selectAllChatrooms, selectAuthenticatedUser } from "@/redux/slices";
import { getUserName, parseRtkError } from "@/lib/utils";
import { useFetchChatroomsQuery } from "@/redux/services";
import { useToast } from "@/lib/hooks";

const useMessageMainLogic = () => {
  const user = useSelector(selectAuthenticatedUser);
  const router = useRouter();
  const username = getUserName(user);
  const chatrooms = useSelector(selectAllChatrooms);
  const { showToast } = useToast();

  const [anchorElSettings, setAnchorElSettings] = useState<null | HTMLElement>(
    null,
  );
  const openOptions = Boolean(anchorElSettings);
  const [anchorElChatroomOptions, setAnchorElChatroomOptions] =
    useState<null | HTMLElement>(null);
  const openChatroomOptions = Boolean(anchorElChatroomOptions);

  const reduxState = useFetchChatroomsQuery({});

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSettings(event.currentTarget);
  };
  const handleCloseSettings = () => setAnchorElSettings(null);

  const handleClickChatroomOptions = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElChatroomOptions(event.currentTarget);
  };
  const handleCloseChatroomOptions = () => setAnchorElChatroomOptions(null);

  const handleLogout = () => {
    router.push("/logout");
  };

  const handleClickChatroom = (chatroomId: string) => {
    router.push(`/messages/${chatroomId}`);
  };

  useEffect(() => {
    if (reduxState.isError && reduxState.error) {
      showToast(parseRtkError(reduxState.error));
    }
  }, [reduxState]);

  return {
    state: {
      username,
      openOptions,
      openChatroomOptions,
      anchorElSettings,
      anchorElChatroomOptions,
      chatrooms,
    },
    handler: {
      handleLogout,
      handleCloseChatroomOptions,
      handleClickSettings,
      handleCloseSettings,
      handleClickChatroomOptions,
      handleClickChatroom,
    },
  };
};

export default useMessageMainLogic;
