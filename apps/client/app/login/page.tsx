import React from "react";
import { Metadata } from "next";
import { LoginMain } from "@/ui/pages/login";

export const metadata: Metadata = {
  title: "Bubble Chat - Login",
  description: "Register or sign in to Bubble Chat",
};

const Page: React.FC = () => {
  return <LoginMain />;
};

export default Page;
