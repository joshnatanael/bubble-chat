import React from "react";
import { Metadata } from "next";
import { MessagesMain } from "@/ui/pages/message";
import { LoginGuard } from "@/ui/components-wrapper/login-guard";

export const metadata: Metadata = {
  title: "Bubble Chat - Messages",
  description:
    "Start chatting now! Send messages with Bubble Chat to connect and communicate instantly.",
};

const Page = ({ params }: { params: { chatroomId?: string[] } }) => {
  return (
    <LoginGuard>
      <MessagesMain chatroomId={params.chatroomId?.[0]} />
    </LoginGuard>
  );
};

export default Page;
