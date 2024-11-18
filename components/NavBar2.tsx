"use client";
import Image from "next/image";
import Link from "next/link";
import SplitText from "./animata/text/split-text";
export default function NavBar2() {
  return (
    <nav className="bg-[color:--secondary]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/favicon.ico" alt="Logo" width={30} height={30} />
          <SplitText text="LAMPMAN" />
        </Link>

        <div className=" flex space-x-6 rtl:space-x-reverse">
          <Link href="/shop" className="text-text1 font-bold hover:text-text1h">
            Shop
          </Link>
          <Link href="#" className="text-text1 font-bold hover:text-text1h">
            About
          </Link>
          <Link href="#" className="text-text1 font-bold hover:text-text1h">
            Contact
          </Link>
          <Link href="#" className="text-primary font-bold hover:text-primaryh">
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
          </Link>
        </div>
      </div>
    </nav>
  );
}
