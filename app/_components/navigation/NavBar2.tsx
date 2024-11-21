"use client"

import Cart from "../cart/Cart";
import DDButton from "../navigation/DDButton";
import Image from "next/image";
import Link from "next/link";
import SplitText from "../animata/text/split-text";
import bulb from "../../favicon.ico";

import { useState, useContext } from "react"
import { CartContext } from "@/app/_context/cart"

export default function NavBar2() {


  const { cartItems } = useContext(CartContext)!;
  const [showModal, setShowModal] = useState(false)

  const toggle = (): null => {
    setShowModal(!showModal);
    return null
  }
  

  return (
  <>
    <nav className="z-9999 bg-secondary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={bulb} alt="Logo" width={30} />
          <SplitText text="LAMPMAN" />
        </Link>

        <div className=" flex space-x-6 rtl:space-x-reverse">
          <Link href="/" className="text-text1 font-bold hover:text-text1h">
            Home
          </Link>
          <Link href="#" className="text-text1 font-bold hover:text-text1h">
            About
          </Link>
          <DDButton />
          <Link
            href="#"
            className="text-text1 hidden sm:block font-bold hover:text-text1h"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </Link>
          <button
              onClick={toggle}
              className="space-x-1 flex text-primary font-bold hover:text-primaryh"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="">
                {cartItems.length === 0 ? null : cartItems.length}
              </span>
            </button>
        </div>
      </div>
    </nav>
    <Cart showModal={showModal} toggle={toggle} />
  </>
  );
}
