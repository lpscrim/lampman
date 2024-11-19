import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/components/NavBar2";
import CartProvider from "./providers/CartProvider";
import ShoppingCartModal from "@/components/cart/ShoppingCartModal";



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
      <body>
        <CartProvider>
          <NavBar2 />
          
            {children}  
        </CartProvider>
      </body>
    </html>
  );
}
