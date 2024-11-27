import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/app/_components/navigation/NavBar2";
import { CartProvider } from "./_context/cart";
import Footer from "./_components/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import ErrorButton from "./_components/error/TriggerError";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

export const metadata: Metadata = {
  title: "Lampman",
  description: "Seller of all things lamp",
};




export default function RootLayout({
  children,

}: {
  children: React.ReactNode


}) {
  return (
    
    <html lang="en">
      <body className="position-relative bg-background">
        <CartProvider>
          <NavBar2 />
          <ErrorBoundary errorComponent={Error} >
            <Suspense fallback={<Loading />}>
              <div className="relative">
                {children}  
              </div>
            </Suspense>
            </ErrorBoundary>
          </CartProvider>
        <Footer />
      </body>
    </html>
   
  );
}
