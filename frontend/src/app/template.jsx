"use client";
import { CartProvider } from "@/context/CartContext";
import { SellerProvider } from "@/context/SellerContext";
import { VoiceProvider } from "@/context/VoiceContext";
import React from "react";

const Template = ({ children }) => {
  return (
    <VoiceProvider>
      <SellerProvider>
        <CartProvider>{children}</CartProvider>
      </SellerProvider>
    </VoiceProvider>
  );
};

export default Template;
