import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/app/_components/navigation/NavBar2";
import { CartProvider } from "./_context/cart";
import Footer from "./_components/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: "Tastefully restored Lamps and Curios",
};




export default function RootLayout({
  children,

}: {
  children: React.ReactNode


}) {
  return (
    
    <html lang="en">
      <head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Small shop selling refurbished goods" />
      </head>
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
