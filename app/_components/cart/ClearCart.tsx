"use client";

import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "@/app/_context/cart";


export default function ClearCart() {
  const { clearCart } = useContext(CartContext)!;

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return null; 