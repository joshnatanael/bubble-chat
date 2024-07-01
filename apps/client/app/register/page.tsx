import React from "react";
import { Metadata } from "next";
import { RegisterMain } from "@/ui/pages/register";

export const metadata: Metadata = {
  title: "Bubble Chat - Register",
  description: "Register or sign in to Bubble Chat",
};

const Page = () => {
  return <RegisterMain />;
};

export default Page;
