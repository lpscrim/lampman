import { useContext } from "react";
import { CartContext } from "../../_context/cart";
import Image from "next/image";

export default function Cart({
  showModal,
  toggle,
}: {
  showModal: boolean;
  toggle: () => null;
}) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext)!;
  return (
    <>
    
    <div className={`${showModal ? "translate-x-0" : "translate-x-full"} fixed inset-0 bg-black bg-opacity-30 z-50`}>
        <div className={`absolute top-1 right-0 bottom-0 bg-white z-50 w-1/2 transform transition-transform duration-2000 ${
              showModal ? "translate-x-0" : "translate-x-full"
            }`}>
        <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
            <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
                <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                    <Image
                    src={item.images[0]}
                    alt={item.name}
                    className="rounded-md h-24"
                    width={50}
                    height={30}
                    />
                    <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{item.name}</h1>
                    <p className="text-gray-600">
                        {item.default_price?.unit_amount
                        ? Math.round(item.default_price.unit_amount / 100)
                        : "NA"}
                    </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                        addToCart(item);
                    }}
                    >
                    +
                    </button>
                    <p>{item.metadata.stock}</p>
                    <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                        removeFromCart(item);
                    }}
                    >
                    -
                    </button>
                </div>
                </div>
            ))}
            </div>
            {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
                <h1 className="text-lg font-bold">Total: £{getCartTotal()}</h1>
                <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                    clearCart();
                }}
                >
                Clear cart
                </button>
            </div>
            ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
            )}
        </div>
    </div>
    </div>
   
    </>
  )
  
}
