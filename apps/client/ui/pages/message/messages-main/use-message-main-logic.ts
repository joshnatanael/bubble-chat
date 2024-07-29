import { useSelector } from "react-redux";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  MessageModel,
  selectAllChatrooms,
  selectAuthenticatedUser,
} from "@/redux/slices";
import {
  getUserName,
  parseRtkError,
  pusherClient,
  toPusherKey,
} from "@/lib/utils";
import { useFetchChatroomsQuery } from "@/redux/services";
import { useToast } from "@/lib/hooks";

const useMessageMainLogic = () => {
  const user = useSelector(selectAuthenticatedUser);
  const pathname = usePathname();
  const router = useRouter();
  const username = getUserName(user);
  const chatrooms = useSelector(selectAllChatrooms);
  const { showToast } = useToast();

  const [unseenMessages, setUnseenMessages] = useState<MessageModel[]>([]);
  const [anchorElSettings, setAnchorElSettings] = useState<null | HTMLElement>(
    null,
  );
  const openOptions = Boolean(anchorElSettings);

  const reduxState = useFetchChatroomsQuery({});

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSettings(event.currentTarget);
  };
  const handleCloseSettings = () => setAnchorElSettings(null);

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

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${user?.id}:chats`));

    const chatHandler = (message: MessageModel) => {
      const shouldNotify = pathname !== `/messages/${message.chatroomId}`;

      if (!shouldNotify) return;

      setUnseenMessages((prev) => [...prev, message]);
    };

    pusherClient.bind("new_message", chatHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${user?.id}:chats`));

      pusherClient.unbind("new_message", chatHandler);
    };
  }, [pathname, user?.id, router]);

  return {
    state: {
      username,
      openOptions,
      anchorElSettings,
      chatrooms,
      unseenMessages,
    },
    handler: {
      handleLogout,
      handleClickSettings,
      handleCloseSettings,
      handleClickChatroom,
    },
  };
};

export default useMessageMainLogic;
