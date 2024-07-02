import React from "react";
import { Metadata } from "next";
import { MessagesMain } from "@/ui/pages/message";
import { LoginGuard } from "@/ui/components-wrapper/login-guard";

export const metadata: Metadata = {
  title: "Bubble Chat - Messages",
  description:
    "Start chatting now! Send messages with Bubble Chat to connect and communicate instantly.",
};

const Page: React.FC = () => {
  return (
    <LoginGuard>
      <MessagesMain />
    </LoginGuard>
  );
};

export default Page;
