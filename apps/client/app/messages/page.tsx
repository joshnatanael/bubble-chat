import React from "react";
import { Metadata } from "next";
import { MessagesMain } from "@/ui/pages/message";

export const metadata: Metadata = {
  title: "Bubble Chat - Messages",
  description:
    "Start chatting now! Send messages with Bubble Chat to connect and communicate instantly.",
};

const Page = () => {
  return <MessagesMain />;
};

export default Page;
