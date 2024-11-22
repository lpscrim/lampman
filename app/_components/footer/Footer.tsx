import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center w-full bg-secondary">
      <footer className="w-full text-text2 bg-background body-font">
        <div className="container flex px-8 lg:px-40 py-5 mx-auto items-start justify-around">
          <div className="w-1/5 px-4 lg:w-1/4 md:w-1/4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              <Link
                href="#"
                className="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                Company
              </Link>
            </h2>
          </div>
          <div className="w-1/5 px-4 lg:w-1/4 md:w-1/4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              <Link
                href="#"
                className="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                Company
              </Link>
            </h2>
          </div>
          <div className="w-1/5 px-4 lg:w-1/4 md:w-1/4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              <Link
                href="#"
                className="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                Company
              </Link>
            </h2>
          </div>
          <div className="w-1/5 px-4 lg:w-1/4 md:w-1/4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              <Link
                href="#"
                className="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                Company
              </Link>
            </h2>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2020 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
