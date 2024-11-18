import Link from "next/link";
export default function ShopNav() {
  return (
    <div className="sm:px-6 lg:flex lg:items-center lg:justify-between">
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="ml-3 block mx-1 sm:mx-0">
          <Link
            href={{
              pathname: "/shop",
              query: { type: "all" },
            }}
          >
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-secondaryh"
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="hidden sm:block">All</span>
            </button>
          </Link>
        </span>

        <span className="sm:ml-3  mx-1 sm:mx-0">
          <Link
            href={{
              pathname: "/shop",
              query: { type: "lamps" },
            }}
          >
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-secondary shadow-sm hover:bg-primaryh focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <span className="hidden sm:block">Lamps</span>
            </button>
          </Link>
        </span>
        <span className="sm:ml-3  mx-1 sm:mx-0">
          <Link
            href={{
              pathname: "/shop",
              query: { type: "curios" },
            }}
          >
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-secondary shadow-sm hover:bg-primaryh focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="hidden sm:block">Curios</span>
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}
