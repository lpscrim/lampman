import { useContext } from "react";
import { CartContext } from "../../_context/cart";
import Image from "next/image";
import Link from "next/link";
import Checkout from "../checkout/CheckoutButton";

export default function Cart({
  showModal,
  toggle,
}: {
  showModal: boolean;
  toggle: () => null;
}) {
  const { cartItems, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext)!;
  return (
    <>
      <div
        className={`${
          showModal ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 bg-black bg-opacity-30 z-50 `}
      >
        <div
          className={`absolute top-1 right-0 bottom-0 bg-background z-50 w-1/2 max-w-md transform transition-transform duration-1000 ${
            showModal ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full py-1 px-1">
            <button
              className="absolute right-1 px-4 py-2 bg-secondary text-primary text-xs font-bold uppercase rounded hover:bg-secondaryh focus:outline-none focus:bg-text2"
              onClick={toggle}
            >
              Close
            </button>
          </div>
          <div className="flex-col flex items-center bg-background gap-8 p-5 text-text2 text-sm">
            <h1 className="border-b-2 px-2 border-text2 mt-10 text-2xl font-bold">
              Basket
            </h1>
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  className="flex justify-between items-center"
                  key={item.id}
                >
                  <Link href={`/shop/${item.id}`}>
                    <div className="flex gap-4">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        className="rounded-md"
                        width={100}
                        height={100}
                      />
                      <div className="flex w-full flex-col">
                        <h1 className="text-sm sm:text-lg font-bold">
                          {item.name}
                        </h1>
                        <p className="text-text2">
                          £
                          {item.default_price?.unit_amount
                            ? Math.round(
                                item.default_price.unit_amount / 100
                              ).toFixed(2)
                            : "NA"}
                        </p>
                        <div className="flex pt-2 sm:hidden gap-4 ">
                          <button
                            className="mx-auto px-2 py-1 bg-secondary text-text1 text-xs font-bold uppercase rounded hover:bg-secondaryh focus:outline-none focus:bg-text2"
                            onClick={() => {
                              removeFromCart(item);
                            }}
                          >
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="hidden sm:flex gap-4">
                    <button
                      className="ml-8 px-1 sm:px-2 py-0 sm:py-1 bg-secondary text-text1 text-xs font-bold uppercase rounded hover:bg-secondaryh focus:outline-none focus:bg-text2"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 ? (
              <div className="flex flex-col justify-between items-center">
                <h1 className="text-lg font-bold">
                  Total: £{(getCartTotal() / 100).toFixed(2)}
                </h1>
                <button
                  className="px-4 py-3 my-4 bg-secondary text-primary text-xs font-bold uppercase rounded hover:bg-secondaryh focus:outline-none focus:bg-text2"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear cart
                </button>
                <Checkout products={cartItems} />
              </div>
            ) : (
              <h1 className="text-lg font-bold">Your cart is empty</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
