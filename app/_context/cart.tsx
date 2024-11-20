"use client"
import Stripe from 'stripe';
import { ReactNode } from 'react';
import { showToast } from 'react-next-toast';


type Product = Stripe.Product & {
    default_price: Stripe.Price;
  };


import { createContext, useState, useEffect } from 'react'

type CartContextType = {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item: Product) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      showToast.error('Item already in cart', 700)
    } else {
      showToast.success('Added to cart',700)
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (item: Product) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
        showToast.success('Item not in cart');
    }
  };

  const clearCart = () => {
    setCartItems([]);
    sessionStorage.removeItem("cartItems");
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const unitAmount = item.default_price?.unit_amount ?? 0;
      return (Math.round((total + unitAmount)/100));
    }, 0);
  };

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
