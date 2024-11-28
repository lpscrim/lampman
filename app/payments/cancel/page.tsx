import Link
 from "next/link";
export default function PaymentFail() {
  return (
    <div className="text-center h-screen py-20 px-20">
      <h2 className="text-4xl pt-44 font-semibold mb-4">Something went wrong!</h2>
      <p className="text-xl font-semibold mb-10">Payment was cancelled</p>
      <div className="w-full items-center space-x-4">
              <Link
                href="/"
                className="py-2.5 px-5 text-sm font-bold text-secondary focus:outline-none bg-primary rounded-lg border focus:z-10 focus:ring-4 focus:ring-text1  border-text2 hover:primaryh"
              >
                Return To Shop
              </Link>
            </div>
    </div>
  );
}
