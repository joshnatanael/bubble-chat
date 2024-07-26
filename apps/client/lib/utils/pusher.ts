import PusherClient from "pusher-js";

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    cluster: "ap1",
  },
);

export function toPusherKey(key: string) {
  return key.replace(/:/g, "__");
}
