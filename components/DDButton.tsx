import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
export default function DDButton() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="inline-flex w-full bg-clear font-bold text-text1  hover:text-text1h">
        <Link href='/shop'>
            <span className="inline-flex">Shop</span>
        </Link>
        <MenuButton className="inline-flex">
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-text1 hover:text-text1h" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-text1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem >
            <Link
              href={{
                pathname: "/shop",
                query: { type: "lamps" },
              }}
              className="text-center block px-4 py-2 bg-text1 text-sm text-bold text-text2 data-[focus]:bg-text1h data-[focus]:outline-none"
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
              className="text-center block px-4 py-2 bg-text1 text-sm text-bold text-text2 data-[focus]:bg-text1h data-[focus]:outline-none"
            >
              Curios
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
