import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/app/_components/navigation/NavBar2";
import { CartProvider } from "./_context/cart";



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
          <div className="relative">
            {children}  
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
