"use client";
import { SellerProvider } from "@/context/SellerContext";
import { VoiceProvider } from "@/context/VoiceContext";
import React from "react";

const Template = ({ children }) => {
  return (
    <VoiceProvider>
      <SellerProvider>{children}</SellerProvider>
    </VoiceProvider>
  );
};

export default Template;
