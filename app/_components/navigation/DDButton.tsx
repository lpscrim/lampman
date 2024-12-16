import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Link from "next/link";
export default function DDButton() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="inline-flex w-full bg-clear font-bold text-text1  hover:text-text1h">
        <Link href="/shop">
          <span className="inline-flex">Shop</span>
        </Link>
        <MenuButton aria-label="Open menu" className="pl-2 pt-1 inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-5 pl-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-text1 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href={{
                pathname: "/shop",
                query: { type: "lamps" },
              }}
              className="hover:bg-text1h text-center block px-4 py-2 bg-text1 text-sm font-bold text-text2 data-[focus]:bg-text1h data-[focus]:outline-none "
            >
              Lamps
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={{
                pathname: "/shop",
                query: { type: "curios" },
              }}
              className="hover:bg-text1h text-center block px-4 py-2 bg-text1 text-sm font-bold text-text2 data-[focus]:bg-text1h data-[focus]:outline-none"
            >
              Curios
            </Link>
          </MenuItem>
        </div>      
      </MenuItems>
    </Menu>
  );
}
