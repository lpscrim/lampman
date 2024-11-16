import Image from "next/image";
import Link from "next/link";
//DELETE UNECESSARY CSS//
export default function NavBar2() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="text-xl font-semibold whitespace-nowrap dark:text-white">
            LAMPMAN
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
          <Link href="/shop" className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-700">
            Shop
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400">
            About
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400">
            Contact
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400">
            Basket
          </Link>
        </div>
      </div>
    </nav>
  );
}
