"use client";
import { CartContext } from "../../_context/cart";
import { useContext } from "react";
import Stripe from "stripe";

type Product = Stripe.Product & {
    default_price: Stripe.Price;
  };

export default function AddButton({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext)!;

  return (
    <button
      onClick={() => addToCart(product)}
      className="
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text2
                text-base
                font-bold
                flex
                items-center
                justify-center
                leading-none
                text-primary
                bg-secondary
                w-full
                py-4
                hover:bg-secondaryh
            "
    >
      Add to basket
    </button>
  );
}
