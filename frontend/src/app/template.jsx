"use client";
import { CartProvider } from "@/context/CartContext";
import { SellerProvider } from "@/context/SellerContext";
import { VoiceProvider } from "@/context/VoiceContext";
import React from "react";

const Template = ({ children }) => {
  return (
    <CartProvider>
      <SellerProvider>
        <VoiceProvider>{children}</VoiceProvider>
      </SellerProvider>
    </CartProvider>
  );
};

export default Template;
